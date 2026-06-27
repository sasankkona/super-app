import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';
import WeatherWidget from '../components/WeatherWidget';
import NotesWidget from '../components/NotesWidget';
import TimerWidget from '../components/TimerWidget';
import NewsWidget from '../components/NewsWidget';

function Dashboard() {
    const { user, categories } = useStore();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-darkBg text-white p-8 flex flex-col md:flex-row gap-6 relative">
            <div className="flex flex-col w-full md:w-2/3 gap-6">
                <div className="flex flex-col md:flex-row gap-6 h-80">
                    <div className="flex flex-col w-full md:w-1/2">
                        <div className="bg-[#5746EA] rounded-3xl p-6 flex items-center gap-4 h-2/3 shadow-lg">
                            <img src="/assets/profile1.png" alt="avatar" className="w-24 h-32 bg-white rounded-xl object-cover" />
                            <div className="flex flex-col overflow-hidden">
                                <h2 className="text-lg text-white-200">{user.name}</h2>
                                <h3 className="text-sm text-white-300">{user.email}</h3>
                                <h1 className="text-3xl font-bold mt-2 truncate">{user.username}</h1>
                                <div className="flex flex-wrap gap-2 mt-4 overflow-y-auto h-16">
                                    {categories.map(category => <span key={category} className="bg-[#9F94FF] text-white px-3 py-1 rounded-full text-xs">{category}</span>)}
                                </div>
                            </div>
                        </div>
                        <WeatherWidget />
                    </div>
                    <NotesWidget />
                </div>
                <TimerWidget />
            </div>
            <NewsWidget />
            <button onClick={() => navigate('/movies')} className="absolute bottom-8 right-8 bg-brandGreen text-black px-8 py-2 rounded-full font-bold hover:bg-green-400 shadow-lg">Browse</button>
        </div>
    );
}

export default Dashboard;