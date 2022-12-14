import React, {createContext, useState, useEffect} from 'react';
import {gameGenresGet} from './../constants';
import './style.css'
export const GenresContext = createContext();

const GenresContextProvider = ({children}) => {
  const [doneFetchGenres, setdoneFetchGenres] = useState(false);
  const [genres, setGenres] = useState([]);

  //Life cycle
  useEffect(() => getGenres(), []);

  //Fetch
  const getGenres = () => {
    fetch(gameGenresGet())
      .then(res => res.json())
      .then(data => {
        setdoneFetchGenres(true);
        setGenres(data.results)
      })
      .catch(error => console.log(error))
  }

  return (
    <GenresContext.Provider value={{doneFetchGenres, genres}}>
     <div className="top">{children}</div>
    </GenresContext.Provider>
  )
}

export default GenresContextProvider;