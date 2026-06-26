import React from "react";

function MovieCard({movie, onClick}) {
    return(
        <div onClick={()=>onClick(movie)} className="rounded-xl overflow-hidden transition-transform cursor-pointer hover:scale-105 shadow-lg border border-gray-800">
            <img src={movie.poster !== "N/A"?movie.poster:"https://via.placeholder.com/300x450?text=No+Image"} alt={movie.Title} className="w-full h-48 object-cover"/>
        </div>
    );
}

export default MovieCard;