import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import NewsCard from "./newsCard";

import './newsList.css'

function NewsList() {

    const [news, setNews] = useState()
    const [topic, setTopic] = useState()
    const [language, setLanguage] = useState()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        setLanguage(data.language)
        setTopic(data.topic)
    };

    const getTopArticles = () => {
        fetch("http://localhost:8000/top")
        .then((res) => res.json())
        .then((res) => {
            setNews(res.data);
        });
    }

    useEffect(() => {
        getTopArticles()
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8000/everything/news?q=${topic}&language=${language}`)
        .then((res) => res.json())
        .then((res) => {
            setNews(res.data);
        });
    }, [topic, language])

    const renderArticles = () => {
        return (
            news.map(element => {
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
                    })
        )
    }

    const renderArticlesNotFound = () => {
        return (
            <div>
                <p>Aucun articles ne correspond à cette recherche...</p>
                <p>Pour continuer à vous faire du mal, vérifiez vos mot-clefs et recommencez</p>
                <p>Et pourquoi ne pas consulter nos <span onClick={getTopArticles} className="font-bold text-news-white">articles les plus populaires ?</span></p>
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="my-3">
                    <img src="/logo.png" alt="logo" className="h-52 w-56"/>
                </div>
                <div className="my-5 ">
                    <form className="relative" onSubmit={handleSubmit(onSubmit)}>
                        <input className="rounded border-2 mx-3 p-2 border-news-white" {...register("topic", { required: true })} placeholder="Mot-clef(s)"/>
                        <select className="bg-news-white rounded mx-3 h-100 p-3" {...register("language")}>
                            <option value="fr">Français</option>
                            <option value="en">Anglais</option>
                        </select>
                        <input className="rounded mx-3 bg-news-orange p-2 border-news-white border-2 font-bold text-news-white" type="submit" value="C'est parti !"/>
                        {errors.topic && <span className="absolute p-2">Obligatoire</span>}
                    </form>
                </div>

                <div>
                    <button className="rounded mx-3 bg-news-orange p-2 border-news-white border-2 font-bold text-news-white" onClick={getTopArticles}>Top France</button>
                </div>
           
                <div className="grid gap-5 grid-cols-4 grid-rows-3 mt-5">
                    {news && renderArticles()}
                </div>     
            </div>     
        </>
    )
}

export default NewsList;