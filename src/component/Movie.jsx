import './css/Movie.css';
import { Link } from "react-router-dom";


function Movie({getInput, movieList, movieStyle, setMovieStyle}) {

  return (
        (movieList !== null)?
        <Link className="movListShow" to="/movie-details" style={movieStyle} onClick={()=>{
          setMovieStyle({display:"none"});
        }}
        >
        {
          movieList.map((value,index) => (
            <div className="movie" key={index} onClick={()=> getInput("i", value.imdbID, false)}>
                <img src={value.Poster} height="100%" alt="" />
                <div>
                    <p>{value.Title}</p>
                    <p className="releasedYear">{value.Year}</p>
                </div>
            </div>
          ))
        }
        </Link>
        :
        <span></span>
  )
}


export default Movie