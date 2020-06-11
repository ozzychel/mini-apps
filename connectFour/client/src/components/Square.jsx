import React from 'react';

var Square = ({square, rowIndex, colIndex}) => (
  <div className="square" data-x={rowIndex} data-y={colIndex}>
    {square}
  </div>
)

export default Square;