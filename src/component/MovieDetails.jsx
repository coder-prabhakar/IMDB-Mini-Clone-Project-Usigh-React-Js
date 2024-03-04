import React from 'react'
import './css/MovieDetails.css'

function MovieDetails({movieData}) {
  return (
    (movieData !== null)?
    <div className='MovieDetails'>
      <div className='movie-img'>
        <img src={movieData.Poster} alt={movieData.Poster} width="100%"/>
      </div>
      <div className='movie-dtl'>
        <p className="mov-title">{movieData.Title}</p>
        <div className='star'><span>&#9733;</span><span>{movieData.imdbRating}</span></div>
        <div className='genre'>{movieData.Genre.split(",").map((value,index)=>(
          <span key={index}>{value.trim()}</span>
        ))}</div>
        <p><span>Type:</span> &nbsp; {movieData.Type}</p>
        <p><span>Actors:</span> &nbsp; {movieData.Actors}</p>
        <p><span>Released:</span> &nbsp; {movieData.Released}</p>
        <p><span>Language:</span> &nbsp; {movieData.Language}</p>
        <p><span>Country:</span> &nbsp; {movieData.Country}</p>
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