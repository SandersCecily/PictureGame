import React, { Component } from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import "./App.css";
import flowers from "../src/flowers.json";

class App extends Component {
  state = {
    flowers,
    clicked: [],
    score: 0,
    highscore: 0
  }

  
  gameHandler = (id) => {
    let clicked = this.state.clicked;
    if (clicked.includes(id)) {
      this.setState({
        clicked: [], score: 0
      })
      return
    } else {
      clicked.push(id);
    }

    if (clicked.length === this.state.flowers.length) {
      this.setState({
        score: 0, clicked: []
      })
      return
    }

    this.setState({ flowers, clicked, score: clicked.length, status: " " });
    var index = 0, rand = 0, temp = null

    //fisher-yates shuffle
    for (index = flowers.length - 1; index > 0; index -= 1) {
      rand = Math.floor(Math.random() * (index + 1))
      temp = flowers[index]
      flowers[index] = flowers[rand]
      flowers[rand] = temp
    }

  }

  render() {
    return (
      <React.Fragment>
        <Nav score={this.state.score} topScore={this.state.highscore} />
        <Jumbotron />
        {this.state.flowers.map(flower => (
          <Container
            key={flower.id}
            id={flower.id}
            image={flower.image}
            gameHandler={this.gameHandler}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default App;