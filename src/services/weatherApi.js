import axios from "axios";

const fetchWeather = async (city="Bhilai") => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);
        return response.data;
    } catch (error) {
        console.error("Weather service failure:",error);
        throw error;
    }
}

export default fetchWeather;