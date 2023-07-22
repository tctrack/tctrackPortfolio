import React, {useState, useEffect } from 'react';


function Categories(props) {

    const [category, setCategory] = useState([]);
    const [catName, setCatName] = useState([]);

    useEffect(() => {
		const featchApi = async () =>{
			const url = `https://newsapi.org/v2/top-headlines/sources?apiKey=737fe5b1358f40c7a056ea9bfb00b964`;
			const response = await fetch(url);
			const resJson = await response.json();
			if(resJson.status == "ok"){
                let categoriesArray = [];
                for (let i = 0; i < resJson.sources.length; i++) {
                    categoriesArray.push(resJson.sources[i].category)
                }
                
                console.log(categoriesArray);
                
                let uniqueCat = [...new Set(categoriesArray)];
                uniqueCat.shift()
				setCategory(uniqueCat);
			}else{
				console.log("Api not working");
			}
			
		}

		featchApi();
  }, []);

  const getCatName = (cat) => {
    // console.log(cat)
    props.changeFun(cat);
  }


    return (
        <>
            <div className="newsCategoriesSection newsRight-wrap">
                <h4>Categories</h4>
                <ul>
                    {
                        category.map((curCate, index) => {
                            return(
                                <li key={index}>
                                    <a href="#" onClick={(e)=>getCatName(curCate)}>{curCate}</a>
                                    <span>(1)</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Categories
