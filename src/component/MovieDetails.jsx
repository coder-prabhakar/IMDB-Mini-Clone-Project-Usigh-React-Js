import React from 'react'
import './css/MovieDetails.css'

// Context API
import { useContext } from "react";
import { CommonContext } from '../ContextAPI/ContextAPI';


function MovieDetails() {

  const {movieData, setMovieStyle} = useContext(CommonContext);

  return (
    (movieData !== null)?
    <div className='MovieDetails' onClick={()=>setMovieStyle({display:'none'})}>
      
      {/* Movie Image */}
      <div className='movie-img'>
        <img src={movieData.Poster} alt={movieData.Poster} width="100%"/>
      </div>

      {/* Movie Information */}
      <div className='movie-dtl'>
        {/* Name */}
        <p className="mov-title">{movieData.Title}</p>
        {/* Rating */}
        <div className='star'><span>&#9733;</span><span>{movieData.imdbRating}</span></div>
        {/* Genre */}
        <div className='genre'>{movieData.Genre.split(",").map((value,index)=>(
          <span key={index}>{value.trim()}</span>
        ))}</div>
        {
          [
            {key:'Type', value:movieData.Type},
            {key:'Actors', value:movieData.Actors},
            {key:'Released', value:movieData.Released},
            {key:'Language', value:movieData.Language},
            {key:'Country', value:movieData.Country},
          ].map((item)=>(
            <p><span>{item.key}:</span> &nbsp; {item.value}</p>
          ))
        }
        {/* Story */}
        <div className='storyline'>
          <p>Storyline</p>
          <p>{movieData.Plot}</p>
        </div>
      </div>

    </div>
    :
    null
    )
}



export default MovieDetails;