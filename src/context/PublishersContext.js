import React, {createContext, useState, useEffect} from 'react';
import {publishersGet} from './../constants';
import './style.css'
export const PublishersContext = createContext();

const PublishersContextProvider = ({children}) => {
  const [doneFetchPublishers, setDoneFetchPublishers] = useState(false);
  const [publishers, setPublishers] = useState(false);

  //Life Cycle
  useEffect(() => getPublishers(), []);

  //Fetch
  const getPublishers = () => {
    fetch(publishersGet())
      .then(res => res.json())
      .then(data => {
        setDoneFetchPublishers(true);
        setPublishers(data.results)
      })
      .catch(error => console.log(error))
  }

  return (
    <PublishersContext.Provider value={{doneFetchPublishers, publishers}}>
<div className="top">{children}</div>
    </PublishersContext.Provider>
  )

}

export default PublishersContextProvider;