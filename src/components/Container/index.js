import React from "react";
import "./style.css";

function Container(props) {
  return (
    <div className="container">
      <div className="card">
        <img alt="flower to click" src={props.image} id={props.id} onClick={() => props.gameHandler(props.id)} className="card-img clicked" />
      </div>
    </div>
  );
}

export default Container;
