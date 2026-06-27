import { useState, useEffect } from 'react';
import fetchNews from '../services/newsApi';

function NewsWidget() {
  const [news, setNews] = useState([]);
  const [newsIndex, setNewsIndex] = useState(0);

  useEffect(() => {
    fetchNews()
      .then(articles => setNews(articles))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (news.length === 0) return;
    const interval = setInterval(() => setNewsIndex(p => (p + 1) % news.length), 2000);
    return () => clearInterval(interval);
  }, [news]);

  return (
    <div className="w-full md:w-1/3 bg-white text-black rounded-3xl overflow-hidden shadow-lg flex flex-col h-[540px]">
      {news.length > 0 ? (
        <>
          <div className="h-2/3 relative">
            <img src={news[newsIndex].urlToImage} alt="news" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white p-4">
              <h2 className="text-xl font-bold line-clamp-2">{news[newsIndex].title}</h2>
              <p className="text-xs mt-1">{new Date(news[newsIndex].publishedAt).toLocaleString()}</p>
            </div>
          </div>
          <div className="h-1/3 p-6 overflow-y-auto">
            <p className="text-gray-800 text-sm leading-relaxed">{news[newsIndex].description || "Read full article..."}</p>
          </div>
        </>
      ) : <div className="p-8 text-center text-gray-500">Loading News...</div>}
    </div>
  );
}

export default NewsWidget;