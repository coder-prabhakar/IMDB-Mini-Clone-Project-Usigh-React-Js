import './css/Movie.css';
import { Link } from "react-router-dom";

function Movie({movieList , setMovieId, movieStyle, setMovieStyle}) {

  return (
    <Link className="movListShow" to="/movie-details" style={movieStyle} onClick={()=>{
      setMovieStyle({display:"none"});
    }}
    >
      {
        movieList.map((value,index) => (
          <div className="movie" key={index} onClick={()=>setMovieId(value.imdbID)}>
              <img src={value.Poster} height="100%" alt="" />
              <div>
                  <p>{value.Title}</p>
                  <p className="releasedYear">{value.Year}</p>
              </div>
          </div>
        ))
      }
    </Link>
  )
}

export default Movie