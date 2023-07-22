import React from 'react'
import { BiSearch } from "react-icons/bi";

function Search() {
  return (
    <>
        <div className="newsSearch">
            <form>
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='Search' />
                    <button><BiSearch/></button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Search
