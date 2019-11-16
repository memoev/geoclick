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
            {this.state.images.map(({id, src, title}) => (
            <TechElement 
                key={id} 
                id={id} 
                src={src} 
                title={title}
            />))}
          </>
        );
    }
}

export default Tech;

