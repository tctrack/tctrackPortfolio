import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blogs = () => {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const BlogData = res.data.slice(0, 3);
            console.log(BlogData);
            setBlog(BlogData);
        }
        getData();
    }, [])

    return (
        <>
            <section className='common-section-padding blogs-section commonSecTop'>
                <div className='container'>
                    <div className='section-heading'>
                        <h2>Recent Blogs</h2>
                    </div>
                    <div className='row gx-5 blogs-wrapper'>
                        {
                            blog.map((curVal, index) => {
                                const { id, title, body } = curVal;
                                return (
                                    <div className='col-md-4' key={index}>
                                        <div className={"blog-wrap blog-wrap-" + (id)}>
                                            <h4>{title}</h4>
                                            <p>{body}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs
