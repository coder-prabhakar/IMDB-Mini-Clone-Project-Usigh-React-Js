import Header from "./component/Header";
import Home from "./component/Home";
import MovieDetails from "./component/MovieDetails";

// Router
import {BrowserRouter, Routes, Route } from "react-router-dom";

// ContextProvider
import ContextProvider from "./ContextAPI/ContextAPI";


function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header/>
            <Home/>
          </>
        }/>
        <Route path="/movie-details" element={
          <>
            <Header/>
            <MovieDetails/>
          </>
        }/>
      </Routes>
    </BrowserRouter>
    </ContextProvider>
    
  );
}

export default App;