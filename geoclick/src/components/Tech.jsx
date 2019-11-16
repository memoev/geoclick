import React, { Component } from 'react';
import TechElement from './TechElement';
import images from '../images.json'

class Tech extends Component {
    
    state = {
        images
    };

    render() {
        return (
          <>
            <h2>Clicky game!</h2>
            <p>
              Click on an image to earn points, but don't click on any more than
              once or you'll have to start over again!
            </p>
            {this.state.images.map(({ id, src, title }) => (
              <TechElement key={id} id={id} src={src} title={title} />
            ))}
          </>
        );
    }
}

export default Tech;

