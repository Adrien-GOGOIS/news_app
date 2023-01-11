import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import NewsCard from "./newsCard";

import './homepage.css'

function Homepage() {

    const [news, setNews] = useState()
    const [topic, setTopic] = useState()
    const [language, setLanguage] = useState()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        setLanguage(data.language)
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
        fetch(`http://localhost:8000/everything/news?q=${topic}&language=${language}`)
        .then((res) => res.json())
        .then((res) => {
            setNews(res.data);
        });
    }, [topic, language])

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="my-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="rounded border-4 border-indigo-500 mx-3 p-3" defaultValue="bitcoin" {...register("topic")} />
                            {errors.topic && <span>This field is required</span>}
                        <select className="bg-indigo-200 rounded mx-3 h-100 p-4" {...register("language")}>
                            <option value="fr">français</option>
                            <option value="en">anglais</option>
                        </select>
                        <input className=" rounded mx-3 bg-indigo-500 p-3" type="submit" />
                    </form>
                </div>
           
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
                                date={element.publishedAt.split("T")[0]}
                            />
                        )
                    })}
                </div>     
            </div>     
        </>
    )
}

export default Homepage;