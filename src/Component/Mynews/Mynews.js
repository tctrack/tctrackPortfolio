import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CommonBanner from '../CommonBanner/CommonBanner';
import NewsItem from './NewsItem';
import { AiOutlineCaretRight, AiFillCaretLeft } from 'react-icons/ai';
import { getQueriesForElement } from '@testing-library/react';
import Search from './Search';
import Categories from './Categories';
import Recentpost from './Recentpost';
import Tags from './Tags';



const News = (props) => {

	const [article, setArticle] = useState([]);
	const [cate, setCate] = useState("business");
	const [pageNo, setPageNo] = useState(1);
	const [pages, setPages] = useState([]);

	let pageSize = 10;

	const newsApi = process.env.REACT_APP_NEWS_API;
	useEffect(() => {
		featchApi();
	}, [pageNo,cate]);

	const changeCategory = (cat) => {
		console.log(cat)
		setCate(cat)
	}


	const featchApi = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=in&category=${cate}&apiKey=737fe5b1358f40c7a056ea9bfb00b964&page=${pageNo}&pageSize=${pageSize}`;
		const response = await fetch(url);
		const resJson = await response.json();
		if (resJson.status == "ok") {
			console.log(resJson.articles)
			setArticle(resJson.articles);
			setPages(resJson.totalResults / pageSize);
		} else {
			console.log("Api not working");
		}

	}

	const prevPage = () => {
		let getCurPage = pageNo - 1;
		setPageNo(getCurPage);
	}

	const nextPage = (element) => {
		let getCurPage = pageNo + 1;
		setPageNo(getCurPage);
		if (getCurPage == pageSize) {
			document.querySelector('.nextPageLink').disabled = true;
		} else {
			document.querySelector('.nextPageLink').disabled = false;
		}
	}

	const getPage = (element) => {
		let pno = element.target.innerText;
		element.target.classList.add('active');
		document.querySelectorAll(".pageLink").classList.remove('active');


		setPageNo(pno);
		if (pno == pageSize) {
			document.querySelector('.nextPageLink').disabled = true;
		} else {
			document.querySelector('.nextPageLink').disabled = false;
		}

	}
	return (
		<>
			<CommonBanner title="News" />
			<section className='news-section'>
				<div className='container'>
					<div className="row gx-5">
						<div className='col-md-8'>
							<div className="newsItems-wrapper">
								<div className="row">
								<NewsItem articleValue={article}/>
							</div>
							</div>
							<div className='newsPagination'>
								<ul>
									<li><button disabled={pageNo <= 1} onClick={()=>prevPage()} className="prePageLink" href="#"><AiFillCaretLeft /></button></li>
									{
										[...Array(pages)].map((i, index) => (
											<li key={index}>
												<a onClick={()=>getPage()} className={index == 0 ? "pageLink active" : "pageLink"} href="#">{index + 1}</a>
											</li>
										)
										)
									}
									<li><button disabled={pageNo == 4} onClick={()=>nextPage()} className="nextPageLink" href="#"><AiOutlineCaretRight /></button></li>
								</ul>
							</div>
						</div>
						<div className="col-md-4">
							<div className='newsRight-panel'>
								<Search />
								<Categories changeFun={changeCategory}/>
								<Recentpost recentArticle={article} />
								<Tags />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default News
