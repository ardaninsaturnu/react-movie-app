import React from 'react'


const SearchBar= (props) => {
return(

       <>
       

       <form className="row form-inline d-flex flex-column align-items-center">
      <input
        className="form-control mt-5"
        type="search"
        value={props.value}
        onChange={(event)=>{props.setSearchValue(event.target.value)}}
        placeholder="Search"
        aria-label="Search"/>
      <button className="w-50 btn bg-warning btn-outline-success my-3" type="submit">Search</button>
    </form>


          </>

  )
}


export default SearchBar