import { useState,useEffect } from "react";
import { useStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import {fetchMByCategories} from "../services/movieApi";

function Movies() {
    const {categories} = useStore();
    const [moviesByCategories,setMoviesByCategories] = useState({});
    const [selectedMovie, setSelectedMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        if(categories.length===0) {
            navigate("/");
            return;
        }
        
        const loadMovies = async () => {
            const results={};
            for(const category of categories) {
                results[category] = await fetchMByCategories(category);
            }
            setMoviesByCategories(results);
        };

        loadMovies();
    }, [categories,navigate]);

    return(
        <div className="min-h-screen bg-darkBg text-white p-8 md:p-12">
            <div className="flex justify-between items-center mb-8">
                <h2 className="nice font-cursive tex-4xl text-brandGreen">Super app</h2>
                <img src="../assets/profile.png" alt="avatar" className="w-12 h-12 bg-white rounded-full cursor-pointer" onClick={()=>navigate("/dashboard")}/>
            </div>
            <h3 className="tex-xl text-white-200 font-bold mb-10">Entertainment according to your choices</h3>
            {categories.map((itemcategories)=>(
                <div className="mb-10" key={itemcategories}>
                    <h4 className="text-lg" font-bold mb-4 text-white-200>{itemcategories}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {moviesByCategories[itemcategories]?moviesByCategories[itemcategories].map((movie)=>(
                            <MovieCard key={movie.imdbID} movie={movie} onclick={(movie)=>setSelectedMovie(movie)}/>
                        )):<p className="text-gray-600">Loading...</p>}
                    </div>
                </div>
            ))}
            <MovieModal movie={selectedMovie} onClose={()=>setSelectedMovie(null)}/>
        </div>
    );
}

export default Movies;