import React, { Component } from 'react';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
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

  
  clickHandler = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      var currentscore = this.state.score + 1
      this.setState({ score: currentscore });
      this.setState({
        clicked: this.state.clicked.concat(id),
      });
      if (currentscore >= this.state.highscore) {
        this.setState({ highscore: currentscore });
      } else if (currentscore === 12) {
        alert("You won!");
      }
      this.handleShuffle();
    } else {
      this.setState({
        currentScore: 0,
        highscore: this.state.highscore,
        clicked: []
      });
    }
  };

  ///edit!!!
  handleShuffle = () => {
      this.setState({
        flowers: this.state.flowers.sort(() => 0.5 - Math.random())
      });
    };

  //end edit!!

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
            handleClick={this.clickHandler}
          />
        ))}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;