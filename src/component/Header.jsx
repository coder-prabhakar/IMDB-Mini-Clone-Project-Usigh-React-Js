import Movie from "./Movie";
import {useState} from "react";
import { Link } from "react-router-dom";

function Header({setMovieId, setSrhBtnClick, movieStyle, setMovieStyle}) {

  const [srhKeywordMovie,setSrhKeywordMovie] = useState([]);

  function searchedKeyword(e){
    setMovieStyle({});

    fetch(`https://www.omdbapi.com/?s=${e.target.value}&apikey=612090f1`)
    .then((data)=>{
      return data.json()
    })
    .then((result)=>{
      if(result.Response === "True"){
          setSrhKeywordMovie(result.Search);
      } else {
        setSrhKeywordMovie([]);
      }
    });
  }

  return (
    <div className='Header'>
      {/* Website Name */}
      <p className="webName">IMDb</p>

      <div className="searbarWid">
        {/* SearchBar */}
        <div className='SearchBar'>
            <input type="text" onChange={searchedKeyword}/>
            <Link className="uil uil-search" onClick={()=>{
              setSrhBtnClick(srhKeywordMovie);
              setMovieStyle({display:"none"});
            }} 
            to="/"></Link>
        </div>
        <Movie movieList={srhKeywordMovie} setMovieId={setMovieId} movieStyle={movieStyle}/>
      </div>
    </div>
  )
}

export default Header