import React, {Fragment, useContext} from 'react';
import { PlatformDetailContext } from "../../context/PlatformDetailContext";
import Grid from "@material-ui/core/Grid";
import ProgressBar from './../../components/Common/ProgressBar/ProgressBar.component';
import CollectionInfo from "./../../components/Collection/CollectionInfo/CollectionInfo.component";
import Game from './../../components/Games/Game/Game.component';
import './home.css'
const PlatformDetail = () => {
  const {doneFetchPlatform, doneFetchPlatformGames, platform, platformGames} = useContext(PlatformDetailContext);
  return ( 
    <Fragment>
      <div className="top">
      {doneFetchPlatform && doneFetchPlatformGames ? (
        <Fragment>
          <CollectionInfo item={platform} />
          <br />
          <Grid container spacing={2}>
            <Game games={platformGames} />
          </Grid>
        </Fragment>
      ) : (
        <ProgressBar />
      )}</div>
    </Fragment>
  );
}

export default PlatformDetail;