import React from 'react';

function TechElement({ key, id, src, title }) {
    return (
      <>
        <img 
            key={key} 
            id={id} 
            src={src} 
            alt={title} 
            style={{width:"100px",height:"100px"}}
        />
      </>
    );
}

export default TechElement;