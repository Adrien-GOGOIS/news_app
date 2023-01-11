import React, { useEffect, useState } from "react";

import './card.css';

function NewsCard(props) {

    const [news, setNews] = useState()

    return (
    <>
        <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
            <img className="rounded-t object-cover h-48 w-96" src={props.src} alt="" />
            </a>
            <div className="p-5">
                <a href={props.link} target="_blank" rel="noreferrer">
                    <h5 className="title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                </a>
                <p className="content mb-3 font-normal text-gray-700 dark:text-gray-400">{props.content}</p>
                <a href={props.link}  target="_blank" rel="noreferrer" className="inline-flex items-center mt-2 mb-5 px-3 py-2 text-sm font-medium text-center hover:text-news-orange text-news-white rounded-lg hover:bg-news-white bg-news-orange focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Lire
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
            <p className="text-sm italic text-white absolute bottom-2 left-5">{props.author}</p>
            <p className="text-sm italic text-white absolute bottom-2 right-5">{props.date}</p>
        </div> 
    </>
    )
}

export default NewsCard;