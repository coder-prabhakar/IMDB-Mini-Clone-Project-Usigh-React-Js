import React from 'react'
import './css/MovieDetails.css'

function MovieDetails({movieData}) {
  return (
    (movieData !== null)?
    <div className='MovieDetails' style={{display:'flex',gap:"30px"}}>
      <img src={movieData.Poster} alt="" width="500px"/>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <h1>Movie Name: {movieData.Title}</h1>
        <p>Actors: {movieData.Actors}</p>
        <p>Type: {movieData.Type}</p>
        <p>Released: {movieData.Released}</p>
        <p>Country: {movieData.Country}</p>
        <p>Language: {movieData.Language}</p>
        <p>imdbRating: {movieData.imdbRating}</p>
      </div>
    </div>
    :
    null
    )
}



export default MovieDetails