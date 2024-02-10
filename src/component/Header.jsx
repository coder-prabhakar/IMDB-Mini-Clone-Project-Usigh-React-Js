import Movie from "./Movie";
import {useState} from "react";

function Header({setMovieId}) {

  const [srhKeywordMovie,setSrhKeywordMovie] = useState([]);

  function searchedKeyword(e){
    let keyword = e.target.value;
    if(keyword.length > 2){
      fetch(`https://www.omdbapi.com/?s=${keyword}&apikey=612090f1`)
      .then((data)=>{
        return data.json()
      })
      .then((result)=>{
        if(result.Response === "True"){
          if(result.Search.length <= 5){
            setSrhKeywordMovie(result.Search);
          } else {
            let storeTenMovie = [];
            for(let i = 0; i<5; i++){
              storeTenMovie.push(result.Search[i])
            }
            setSrhKeywordMovie(storeTenMovie);
          }
        }
      });
    } else {
      setSrhKeywordMovie([]);
    }
  }

  return (
    <div className='Header'>
      {/* Website Name */}
      <p className="webName">IMDb</p>

      <div className="searbarWid">
        {/* SearchBar */}
        <div className='SearchBar'>
            <input type="text" onChange={searchedKeyword}/>
            <i className="uil uil-search"></i>
        </div>
        <Movie movieList={srhKeywordMovie} setMovieId={setMovieId}/>
      </div>
    </div>
  )
}

export default Header