import React from "react";
import "./style.css";

function Container(props) {
  return (
    <div className="card">
        <img alt="flower to click" src={props.image} id={props.id} 
        onClick={() => props.clickHandler(props.id)} className="card-img"/>
    </div>
  );
}

export default Container;
