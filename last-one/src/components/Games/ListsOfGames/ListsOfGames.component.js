import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Game from "./../Game/Game.component";
import './list.css'

const mystyle = {
  backgroundColor: "black",
};

const ListOfGames = ({ popularGames, upcomingGames, newGames }) => (
  <Fragment>
    <Grid item xs={12} md={6} lg={4}>
      <h3  className="mt-0 colors">Popular Games</h3>
      <Paper elevation={3} className="games-container">
        <Grid style={mystyle} container spacing={2}>
          <Game  games={popularGames} listofgames />
        </Grid>
      </Paper>
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      <h3 className="mt-0 colors">Upcoming Games</h3>
      <Paper elevation={3} className="games-container">
        <Grid style={mystyle} container spacing={2}>
          <Game games={upcomingGames} listofgames />
        </Grid>
      </Paper>
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      <h3 className="mt-0 colors">New Games</h3>
      <Paper elevation={3} className="games-container">
        <Grid style={mystyle} container spacing={2}>
          <Game games={newGames} listofgames />
        </Grid>
      </Paper>
    </Grid>
  </Fragment>
);

export default ListOfGames;
