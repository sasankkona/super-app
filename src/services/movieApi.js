import axios from "axios";

const fetchMByCategories = async (category) => {
    try {
        const response = await axios.get(`https://www.omdbapi.com/?s=${category}&type=movie&apikey=${import.meta.env.VITE_OMDB_API_KEY}`);
        return response.data.Search ? response.data.Search.slice(0, 4) : [];
    } catch (error) {
        console.error("Movie service failure:", error);
        throw error;
    }
}

export default fetchMByCategories;