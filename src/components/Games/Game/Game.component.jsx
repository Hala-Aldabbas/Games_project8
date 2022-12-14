import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./Game.styles.scss";
import { useState, useEffect } from 'react';

const Game = ({ games, listofgames }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);


  
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = games.slice(indexOfFirstPost, indexOfLastPost);


    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(games.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }


  return (
    <Fragment>
      {currentPosts.map((game) => {
        const { id, background_image, name, released, parent_platforms } = game;
        const imgSrc = background_image
          ? background_image
          : require("./../../../assets/images/placeholder.png");
        return (
          <Grid key={id} item xs={12} sm={listofgames ? 12 : 6} md={listofgames ? 12 : 4}>
            <Link to={`/games/details/${id}`} className="card-link" >
              <Card variant="outlined" className="card" style={{height:'300px'}}>
                <CardMedia
                  className="card-game-image"
                  image={imgSrc}
                  title={name}
                />
                <CardContent className="card-game-content">
                  <div>
                    <h4 className="card-game-name text-white">{name}</h4>
                    <p className="card-game-released text-white">{released}</p>
                  </div>
                  <ul className="card-game-platforms">
                    {parent_platforms &&
                      parent_platforms.map((platform) => {
                        const { id, name } = platform.platform;
                        return (
                          <li key={id} className="card-game-platform">
                            <img
                              src={require(`./../../../assets/images/${id}.svg`)}
                              alt={name}
                              className="platform-logo"
                            />
                          </li>
                        );
                      })}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        );
      })}
       <ul className='pagination justify-content-center' style={{marginLeft:'45%'}}>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <button onClick={() => paginate(number)} className='page-link'>
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
    </Fragment>
  );
};

export default Game;
