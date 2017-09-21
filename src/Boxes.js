import React from 'react';

const Boxes = ({ boxState, onMouseEnter, onMouseLeave }) => {
  let array = new Array(this.MAX_BOXES);
  let boxArray = boxState.map((box) => (
    <div 
      className="box"
      id={box.id}
      color={box.color}
      style={box.style}
      onMouseEnter={() => onMouseEnter(box.id)}
      onMouseLeave={() => onMouseLeave(box.id)}>
    </div>
  ))
  return (
    <div id="main">
      {boxArray}
    </div>
  );
};

export default Boxes;