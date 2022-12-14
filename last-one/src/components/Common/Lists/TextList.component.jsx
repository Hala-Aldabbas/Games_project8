import React, { Fragment } from "react";
import Subtitle from "./../Subtitle/Subtitle.component";
import "./Lists.styles.scss";

var stylingObject = {
  h3: {
    color: "white",
   fontsize: 40 ,
  }
}


const TextList = ({ title, items, platforms, collection }) => (
  <Fragment>
    
    <h3 style={stylingObject.h3}>{title}  </h3> 
    <ul  className="list">
      {items && collection
        ? items.slice(0, 3).map((item) => (
            <li className="list__item" key={item.id}>
              {item.name}
            </li>
          ))
        : items && platforms
        ? items.map((item) => (
            <li className="list__item" key={item.platform.id}>
              {item.platform.name}
            </li>
          ))
        : items.map((item) => (
            <li className="list__item" key={item.id}>
              {item.name}
            </li>
          ))}
    </ul>
  </Fragment>
);

export default TextList;
