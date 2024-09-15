import './css/Movie.css';
import { Link } from "react-router-dom";

// Context API
import { useContext } from "react";
import { CommonContext } from '../ContextAPI/ContextAPI';


function Movie() {

  const {getInput, movieList, movieStyle, setMovieStyle} = useContext(CommonContext);

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


export default Movie;