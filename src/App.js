import {useState} from "react";
import Header from "./component/Header";
import MovieDetails from "./component/MovieDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

  const [movieId, setMovieId] = useState("kuchh nahi");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header setMovieId={setMovieId}/>,
    },
    {
      path: "movie-details",
      element: (
        <>
          <Header setMovieId={setMovieId}/>
          <MovieDetails movieId={movieId}/>
        </>
      )
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;