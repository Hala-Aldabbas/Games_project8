import React, { Component } from 'react';

import './ytvideo.css';
// AIzaSyD9oSTliKnwtVGxhHc9sG5CO3lt4gLZgPY
// AIzaSyCo3d9QE-My-Npv-4QzPchD58bSUflrKYI
const apikey = "";
const maxResults = 20;
const qstr = "sonic";

var apiurlstr = `https://www.googleapis.com/youtube/v3/search?key=${apikey}&maxResults=${maxResults}&part=snippet,id&q=${qstr}`,
    yturlstr = "https://www.youtube.com/embed/";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function getFiveRandomNums(){
  var randset = [];
  for (var i=0; i<1; i=i+1) {
    randset.push(getRandomIntInclusive(0,19));
  }
  return randset;
}

class Ytvideo extends Component {

  constructor(props){
    super(props);
    this.state = {
      vidResult: []
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked(){
    fetch(apiurlstr)
    .then((response) => response.json())
    .then((responseJson) => {
      const vidResult = [];
      getFiveRandomNums().map(num => vidResult.push(yturlstr + responseJson.items[num].id.videoId));
      this.setState({vidResult});
    })
    .catch((error) => {
      console.error(error);
    });
  }


  render() {

    return (
      <div className="video">
        <div className='hh'>
          <button onClick={this.clicked}>To Get Random Gaming Videos Press Here</button>
        </div >
        <div >
        {this.state.vidResult.map((link, i) => {
            var frame = <div key={i} className="video"><iframe title="Pirate Video"  width="1260" height="615" src={link} frameBorder="0" encrypted-media={true.toString()} allowFullScreen></iframe></div>;
            return frame;
        })}

        {this.frame}
</div>
      </div>
    );
  }
}

export default Ytvideo;
