import {useState} from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import MovieDetails from "./component/MovieDetails";

// Router
import {BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  // Home Movie List
  const [homeMovieList, setHomeMovieList] = useState(null);
  // Searched keyword
  const [movieList, setMovieList] = useState(null); 
  // Data of a particular movie
  const [movieData, setMovieData] = useState(null);

  function getInput(apiSrhType, address, homeMovieShow){

    fetch(`https://www.omdbapi.com/?${apiSrhType}=${address}&apikey=612090f1`)
    .then((data)=>{
      return data.json()
    })
    .then((result)=>{ 

      if(apiSrhType === "s"){
        if(address.length > 2 && result.Response === "True"){
          setMovieList(result.Search)
        }
        (homeMovieShow)?setHomeMovieList(movieList):setHomeMovieList(homeMovieList);
      } else {
        setMovieData(result)
      }

    });
  }

  const [movieStyle, setMovieStyle] = useState({});
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header getInput={getInput} setMovieData={setMovieData} movieList={movieList} movieStyle={movieStyle} setMovieStyle={setMovieStyle}/>
            <Home getInput={getInput} homeMovieList={homeMovieList} setMovieStyle={setMovieStyle}/>
          </>
        }/>
        <Route path="/movie-details" element={
          <>
            <Header getInput={getInput} setMovieData={setMovieData} movieList={movieList} movieStyle={movieStyle} setMovieStyle={setMovieStyle}/>
            <MovieDetails movieData={movieData} setMovieStyle={setMovieStyle}/>
          </>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;