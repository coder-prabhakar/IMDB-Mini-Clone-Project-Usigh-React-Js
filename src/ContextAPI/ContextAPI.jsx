import { createContext, useState } from "react";

export const CommonContext = createContext();


export default function ContextProvider({children}){
    
  // Home Movie List
  const [homeMovieList, setHomeMovieList] = useState(null);

  // Searched keyword
  const [movieList, setMovieList] = useState(null); 

  // Data of a particular movie
  const [movieData, setMovieData] = useState(null);

  // SearchBar Movie Show or Hidden Style
  const [movieStyle, setMovieStyle] = useState({});

  /*------------------- getInput Function -------------*/
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

  return (
    <CommonContext.Provider
    value={{
        getInput,
        movieList, 
        homeMovieList, 
        movieData, 
        setMovieData, 
        movieStyle, 
        setMovieStyle
    }}>
    {children}
    </CommonContext.Provider>
  )
  
}