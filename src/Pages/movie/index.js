import React from 'react'
import film from '../../images/film.jpg'

const Movie = (props) => {

return(
  <>
    <div className={`row bg-warning d-flex`}>
      <div className={`col-xl-6`}>
        <img src={film}/>
      </div>
      <div className={`col-xl-6`}>
        <h4>movie name</h4>
        <p>year</p>
        <p>runtime</p>
        <p>Director</p>
        <p>Actors</p>
        <p>Rewards</p>
      </div>
    </div>
  </>
  )



}

export default Movie