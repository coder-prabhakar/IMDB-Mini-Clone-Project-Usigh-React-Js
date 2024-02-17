import {useState} from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import MovieDetails from "./component/MovieDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

  const [movieId, setMovieId] = useState("kuchh nahi");

  const [srhBtnClick, setSrhBtnClick] = useState([]);
  
  const [movieStyle, setMovieStyle] = useState({});

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header setMovieId={setMovieId} setSrhBtnClick={setSrhBtnClick} movieStyle={movieStyle} setMovieStyle={setMovieStyle}/>
          <Home srhBtnClick={srhBtnClick} setMovieId={setMovieId} setMovieStyle={setMovieStyle}/>
        </>
      ),
    },
    {
      path: "movie-details",
      element: (
        <>
          <Header setMovieId={setMovieId} setSrhBtnClick={setSrhBtnClick} movieStyle={movieStyle} setMovieStyle={setMovieStyle}/>
          <MovieDetails movieId={movieId}/>
        </>
      )
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;