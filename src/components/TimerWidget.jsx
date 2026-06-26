import { useState, useEffect } from 'react';

export default function TimerWidget() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        let timer;
        if (isPlaying) {
            timer = setInterval(() => {
                if (seconds > 0) setSeconds(s => s - 1);
                else if (minutes > 0) { setMinutes(m => m - 1); setSeconds(59); }
                else if (hours > 0) { setHours(h => h - 1); setMinutes(59); setSeconds(59); }
                else setIsPlaying(false);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isPlaying, hours, minutes, seconds]);

    return (
        <div className="bg-[#1E1E2F] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg h-48 mt-6">
            <div className="relative w-36 h-36 flex items-center justify-center rounded-full border-4 border-[#FF6A6A] shadow-[0_0_15px_#FF6A6A]">
                <span className="text-3xl font-bold font-mono">{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
            </div>
            <div className="flex flex-col w-1/2 mt-4 md:mt-0">
                <div className="flex justify-between text-gray-400 text-center mb-2">
                    <span className="w-1/3">Hours</span><span className="w-1/3">Minutes</span><span className="w-1/3">Seconds</span>
                </div>
                <div className="flex justify-between text-center text-2xl font-bold mb-6">
                    <div className="w-1/3 flex flex-col items-center"><button onClick={() => setHours(h => h + 1)}>▲</button><span>{String(hours).padStart(2, '0')}</span><button onClick={() => setHours(h => h > 0 ? h - 1 : 0)}>▼</button></div>
                    <span className="text-4xl">:</span>
                    <div className="w-1/3 flex flex-col items-center"><button onClick={() => setMinutes(m => m < 59 ? m + 1 : 0)}>▲</button><span>{String(minutes).padStart(2, '0')}</span><button onClick={() => setMinutes(m => m > 0 ? m - 1 : 59)}>▼</button></div>
                    <span className="text-4xl">:</span>
                    <div className="w-1/3 flex flex-col items-center"><button onClick={() => setSeconds(s => s < 59 ? s + 1 : 0)}>▲</button><span>{String(seconds).padStart(2, '0')}</span><button onClick={() => setSeconds(s => s > 0 ? s - 1 : 59)}>▼</button></div>
                </div>
                <button onClick={() => setIsPlaying(!isPlaying)} className="bg-[#FF6A6A] hover:bg-red-400 text-white font-bold py-2 rounded-full w-full transition-colors">{isPlaying ? "Pause" : "Start"}</button>
            </div>
        </div>
    );
}