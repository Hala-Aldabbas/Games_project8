import React, { Fragment, useContext } from "react";
import { GameDetailsContext } from "../../context/GameDetailsContext";
import ProgressBar from "../../components/Common/ProgressBar/ProgressBar.component";
import  { useState, useEffect } from "react";
import Details from "../../components/Games/Details/Details.component";
import './home.css'

const GameDetails = () => {
  const {
    doneFetchGameDetails,
    gameDetails,
    doneFetchGameScreenshots,
    gameScreenshots,
  } = useContext(GameDetailsContext);

  return (
    <div className="top">
    <Fragment>
      {doneFetchGameDetails && gameDetails ? (
        <Fragment>
          <Details
            gameDetails={gameDetails}
            gameScreenshots={gameScreenshots}
            doneFetchGameScreenshots={doneFetchGameScreenshots}
          />
        </Fragment>
      ) : (
        <ProgressBar />
      )}

    </Fragment></div>
  );
};

export default GameDetails;
