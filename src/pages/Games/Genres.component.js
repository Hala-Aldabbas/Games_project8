import React, { Fragment, useContext } from 'react';
import { GenresContext } from './../../context/GenresContext';
import Grid from "@material-ui/core/Grid";
import CollectionCard from './../../components/Collection/CollectionCard/CollectionCard.component';
import ProgressBar from "../../components/Common/ProgressBar/ProgressBar.component";
import './home.css'
const Genre = () => {
  const {doneFetchGenres, genres} = useContext(GenresContext);
  return ( 
    <Fragment>
      <div className="top">
      <h1 className="text-center ">Games Types</h1>
      {
        doneFetchGenres && genres ?
        <Grid container spacing={3}>
          <CollectionCard link="genres" items={genres} />
        </Grid>
        : <ProgressBar />
      }</div>
    </Fragment>
  );
}

export default Genre;