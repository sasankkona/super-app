import axios from "axios";

const fetchNews = async (category="general") => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
        return response.data.articles?.filter(a => a.urlToImage) || [];
    } catch (error) {
        console.error("News service failure:", error);
        throw error;
    }
}

export default fetchNews;