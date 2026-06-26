import React from 'react';

function MovieModal({ movie, onClose }) {
  if (!movie) {
    return null;
  }
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-cardBg p-6 rounded-xl max-w-2xl w-full flex gap-6 relative text-white border border-gray-700">
        <button onClick={onClose} className="absolute top-4 right-4 text-brandGreen font-bold text-2xl hover:text-white">X</button>
        <img src={movie.Poster} alt="poster" className="w-1/3 rounded-lg object-cover" />
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-2">{movie.Title}</h2>
          <p className="text-gray-400 mb-4">{movie.Year} • {movie.Type}</p>
          <p className="text-gray-300 text-sm overflow-y-auto max-h-40">{movie.Plot || "Detailed information will be fetched from the OMDB 'plot=full' endpoint."}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;