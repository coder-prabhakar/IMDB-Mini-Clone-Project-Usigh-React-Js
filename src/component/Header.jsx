import Movie from "./Movie";
import { Link } from "react-router-dom";

function Header({getInput, setMovieData, movieList, movieStyle, setMovieStyle}) {
  
  var searchKeyword = "";
  function searchedKeyword(e){
    setMovieStyle({})
    searchKeyword = e.target.value;
    getInput("s", searchKeyword, false)
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
              setMovieStyle({display:"none"});
              getInput("s", searchKeyword, true);
              setTimeout(()=>{setMovieData(null)},500)
            }} 
            to="/"></Link>
        </div>
        <Movie getInput={getInput} movieList={movieList} movieStyle={movieStyle} setMovieStyle={setMovieStyle}/>
      </div>
    </div>
  )
}

export default Header