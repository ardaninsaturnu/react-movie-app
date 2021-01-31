import React from 'react'


const SearchBar = () => {
  return (

    <>


      <form className="row form-inline d-flex flex-column align-items-center">
        <input
          className="form-control mt-5"
          type="search"
          placeholder="Search"
          aria-label="Search"/>
        <button className="w-50 btn my-3 text-success fw-bolder" style={{backgroundColor: "#FFFBD2"}} type="submit">Search</button>
      </form>


    </>

  )
}


export default SearchBar