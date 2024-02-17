import React from 'react'
import './css/MovieDetails.css'

function MovieDetails({movieId}) {
  return (
    <div className='MovieDetails'>
      <h1>Movie Details</h1>
      <h2>{movieId}</h2>
    </div>
  )
}

export default MovieDetails
