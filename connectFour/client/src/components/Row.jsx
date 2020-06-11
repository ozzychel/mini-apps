import React from 'react';
import Square from './Square.jsx'

var Row = ({row, rowIndex}) => (
  <div className="row">
    {row.map((square, colIndex)=>(
      <Square
      square={square}
      rowIndex={rowIndex}
      colIndex={colIndex}
      />
    ))}
  </div>

)

export default Row;