import React from 'react';

function TechElement({ key, id, src, title, handleClick }) {
  return (
    <>
      <button>
        <img
          key={key}
          id={id}
          src={src}
          alt={title}
          style={{ width: "100px", height: "100px" }}
          onClick={handleClick}
        />
      </button>
    </>
  );
}

export default TechElement;