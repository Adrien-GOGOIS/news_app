import React, { useEffect, useState } from "react";
import NewsCard from "./newsCard";

import './homepage.css'

function Homepage() {

    const [news, setNews] = useState()

    useEffect(() => {
    fetch("http://localhost:8000/everything/news?q=bitcoin&language=fr")
      .then((res) => res.json())
      .then((res) => {
        setNews(res.data);
      });
  }, []);

    return (
        <>
            <div className="grid gap-4 grid-cols-4 grid-rows-3">
                {news && news.map(element => {
                    return (
                        <NewsCard 
                            author={element.source.name} 
                            link={element.url} 
                            title={element.title} 
                            content={element.content} 
                            src={element.urlToImage} 
                            description={element.description} 
                            date={element.publishedAt}/>
                    )
                })}
            </div>
           
        </>
    )
}

export default Homepage;