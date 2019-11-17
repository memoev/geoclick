import React, { Component } from 'react';
import TechElement from './TechElement';
import images from '../images.json'

class Tech extends Component {
  state = {
    images,
    imagesClicked: [],
    click: 0,
    topScore: 0,
    guess: ""
  };

  handleTechElementClick = event => {
    const elementId = event.target.id;
    const plusClick = this.state.click + 1;
    !this.state.imagesClicked.includes(elementId)
      ? this.educatedGuess(plusClick, elementId)
      : this.uneducatedGuess();
      this.shuffleTechElements();
    };
    
  educatedGuess = (plusClick, elementId) => {
    this.setState({
      click: plusClick,
      imagesClicked: [...this.state.imagesClicked, elementId],
      guess: "You guessed correctly!"
    });
    (this.state.topScore >= plusClick)
    ? this.setState({ topScore: this.state.topScore })
    : this.setState({ topScore: plusClick})
  };

  uneducatedGuess = () => {
    this.setState({
      click: 0,
      imagesClicked: [],
      guess: "You guessed incorrectly!"
    });
  };

  shuffleTechElements = () => {
    const newArray = this.state.images.sort(() => Math.random() - 0.5);
    this.setState({ images: newArray });
  };

  render() {
    return (
      <>
        <h2>Clicky game!</h2>
        <p>
          Click on an image to earn points, but don't click on any more than
          once or you'll have to start over again!
        </p>
        <div className="guess">
          {this.state.guess ? this.state.guess : <b>Are you ready?</b>}
        </div>
        <div>
          Score: {this.state.click} | Top Score: {this.state.topScore}
        </div>
        {this.state.images.map(({ id, src, title }) => (
          <TechElement
            key={id}
            id={id}
            src={src}
            title={title}
            handleClick={this.handleTechElementClick}
          />
        ))}
      </>
    );
  }
}

export default Tech;

