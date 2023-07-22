import { useState,useEffect } from 'react'

const NewsItem = ({articleValue}) => {
    console.log(articleValue);
    return (
        <div className='newsItems-wrapper'>
            {
                articleValue.map((elem, index) => {
                    return(
                        <div key={index} className='newsItem-wrap'>
                            <a href={elem.url == null ? "#" : elem.url} target="_blank">
                                <figure>
                                    <img src={elem.urlToImage==null?"https://images.hindustantimes.com/tech/img/2022/07/16/1600x900/asteroid-3628185_1920_1631933514992_1657946158840_1657946158840.jpg" : elem.urlToImage } alt="" />
                                </figure>
                            </a>
                            <div className='journal-txt'>
                                <div className='authorDate'>By <strong>{elem.author ? elem.author : "Unknown"}
                                </strong> on <span>{new Date(elem.publishedAt == null ? " " : elem.publishedAt).toGMTString()}</span></div>
                                <a href={elem.url == null ? "$" : elem.url} target="_blank">
                                    <h4>{elem.title == null ? "Cutom title" : elem.title}</h4>
                                </a>
                                <p>{elem.description == null ? "Custom Description" : elem.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NewsItem
