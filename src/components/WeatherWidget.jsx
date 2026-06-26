import { useState, useEffect } from 'react';
import { Wind, Droplets, ThermometerSun } from "lucide-react";
import { fetchWeather } from '../services/weatherApi';

export default function WeatherWidget() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetchWeather()
            .then(data => setWeather(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="bg-[#101744] rounded-3xl h-1/3 flex flex-col shadow-lg overflow-hidden mt-6">
            <div className="bg-[#E23A70] text-center py-2 font-bold text-lg tracking-widest">
                {new Date().toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })} &nbsp;&nbsp;&nbsp; {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </div>
            {weather ? (
                <div className="flex items-center justify-around h-full p-4">
                    <div className="text-center flex flex-col items-center">
                        <ThermometerSun size={32} />
                        <span className="text-sm mt-1">{weather.weather[0].main}</span>
                    </div>
                    <div className="text-4xl font-bold border-r border-gray-500 pr-6">{Math.round(weather.main.temp)}°C</div>
                    <div className="flex flex-col text-sm gap-2 pl-2">
                        <span className="flex items-center gap-2"><Wind size={16} /> {weather.wind.speed} km/h Wind</span>
                        <span className="flex items-center gap-2"><Droplets size={16} /> {weather.main.humidity}% Humidity</span>
                    </div>
                </div>
            ) : <div className="p-4 text-center">Loading Weather...</div>}
        </div>
    );
}