import React, { Component } from 'react';
import TechElement from './TechElement';
import images from '../images.json'

class Tech extends Component {
    
    state = {
        images,
        click: 0,
        topScore: 0,
        guess: '',
    };

    handleTechElementClick = event => {
      const plusClick = this.state.click + 1
      this.setState({ click: plusClick, topScore: plusClick, guess: 'You guessed correctly!' })
      this.shuffleTechElements();
    }

    shuffleTechElements = () => {
      const newArray = this.state.images.sort(() => Math.random() - 0.5);
      this.setState({ images: newArray });
    }

    render() {
        return (
          <>
            <h2>Clicky game!</h2>
            <p>
              Click on an image to earn points, but don't click on any more than
              once or you'll have to start over again!
            </p>
            <div className='guess'>{this.state.guess ? this.state.guess : <b>Are you ready?</b>}</div>
            <div>Score: {this.state.click} | Top Score: {this.state.topScore}</div>
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

