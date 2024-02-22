import {useState} from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import MovieDetails from "./component/MovieDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

  const [homeMovieList, setHomeMovieList] = useState(null);
  const [movieList, setMovieList] = useState(null); 
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
        } else {
          setMovieList(null)
        }
        (homeMovieShow)?setHomeMovieList(movieList):setHomeMovieList(homeMovieList);
      } else {
        setMovieData(null)
        setMovieData(result)
      }
    });
  }

  const [movieStyle, setMovieStyle] = useState({});

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header getInput={getInput} setMovieData={setMovieData} movieList={movieList} movieStyle={movieStyle} setMovieStyle={setMovieStyle}/>
          <Home getInput={getInput} homeMovieList={homeMovieList} setMovieStyle={setMovieStyle}/>
        </>
      ),
    },
    {
      path: "movie-details",
      element: (
        <>
          <Header getInput={getInput} setMovieData={setMovieData} movieList={movieList} movieStyle={movieStyle} setMovieStyle={setMovieStyle}/>
          <MovieDetails movieData={movieData}/>
        </>
      )
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;