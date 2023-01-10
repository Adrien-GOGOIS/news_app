import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import NewsCard from "./newsCard";

import './homepage.css'

function Homepage() {

    const [news, setNews] = useState()
    const [topic, setTopic] = useState()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        setTopic(data.topic)
    };

    useEffect(() => {
        fetch("http://localhost:8000/everything/news?q=bitcoin&language=fr")
        .then((res) => res.json())
        .then((res) => {
            setNews(res.data);
        });
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8000/everything/news?q=${topic}&language=fr`)
        .then((res) => res.json())
        .then((res) => {
            setNews(res.data);
        });
    }, [topic])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="bitcoin" {...register("topic")} />
                    {errors.topic && <span>This field is required</span>}
                <input type="submit" />
            </form>
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