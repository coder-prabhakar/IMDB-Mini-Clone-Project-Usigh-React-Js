import React from 'react';
import './css/Home.css'
import { Link } from "react-router-dom";

function Home({getInput, homeMovieList, setMovieStyle}) {   

  return (
    (homeMovieList !== null)?
    <div className='Home' onClick={()=>{ setMovieStyle({display:"none"}) }}>
        {
          homeMovieList.map((value,index)=>(
            <Link key={index} className="box" to="/movie-details" onClick={()=> getInput("i", value.imdbID, false)}>
              <img src={value.Poster} alt={value.Title} />
              <div>
                <span>{value.Title}</span>
                <span>{value.Year}</span>
                <span>{value.Type}</span>
              </div>
            </Link>
          ))
        }
    </div>
    : null
  )
}

export default Home;