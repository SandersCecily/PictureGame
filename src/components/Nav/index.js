import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Click Game
      </a>
      <div>
        <p>Your Score :  {props.score} |  High Score: {props.highscore} </p>
      </div>
    </nav>
  );
}

export default Nav;
