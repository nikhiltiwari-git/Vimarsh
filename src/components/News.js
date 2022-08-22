import '../App.css';
import './News.css';
import React from 'react';
import {useState} from 'react' ;

function News() {
    let [value,setValue] = useState("");

    async function fetchdata(){
        let response = await fetch('https://newsapi.org/v2/everything?q=crypto-currency&apiKey=c4904ae815b644ce8d40c67df8cdc139') ;
        let data = await response.json();

        // console.log(data.articles);

        let image = data.articles.map((a)=>{return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={a.urlTouImage} alt="Banner"/>
        <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{a.tittle}</div>
        <p class="text-gray-700 text-base">
            {a.description}
        </p>
        <a href={a.url}>Read More...</a>
        </div>   
        </div>
        )
        })
        // console.log(image);
        setValue(image);
    }
    fetchdata(); 
    return <div className='tittle'>  {value} </div>;
}

export default News;
