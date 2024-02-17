import React from 'react';
import './css/Home.css'
import { Link } from "react-router-dom";

function Home({setMovieId, srhBtnClick, setMovieStyle}) {   

  return (
    <Link className='Home' to="/movie-details" onClick={()=>{
      setMovieStyle({display:"none"});
    }}>
        {
          srhBtnClick.map((value,index)=>(
            <div key={index} onClick={()=>setMovieId(value.imdbID)}>
              <img src={value.Poster} alt={value.Title} />
              <div>
                <span>{value.Title}</span>
                <span>{value.Year}</span>
                <span>{value.Type}</span>
              </div>
            </div>
          ))
        }
    </Link>
  )
}

export default Home