import React from 'react'

function Recentpost({ recentArticle }) {

   

    const slicedArray = recentArticle.slice(0, 4);
    console.log(slicedArray);
    return (
        <>
            <div className="rececntPostSection newsRight-wrap">
                <h4>Recent Posts</h4>
                <ul>
                    {
                        slicedArray.map((elem, index) => {
                            return (
                                <li key={index}>
                                    <a href={elem.url == null ? "#" : elem.url} target="_blank">
                                        <figure>
                                            <img src={elem.urlToImage == null ? "https://images.hindustantimes.com/tech/img/2022/07/16/1600x900/asteroid-3628185_1920_1631933514992_1657946158840_1657946158840.jpg" : elem.urlToImage} alt="" />
                                        </figure>
                                        <div className='recent-post-content'>
                                            <h5>{elem.title.slice(0, 10) == null ? "Cutom title" : elem.title.slice(0, 35)} ...</h5>
                                            <p>{new Date(elem.publishedAt == null ? " " : elem.publishedAt).toGMTString()}</p>
                                        </div>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Recentpost
