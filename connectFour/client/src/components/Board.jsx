import React from 'react';
import Square from './Square.jsx';
import Row from './Row.jsx'

var Board = ({matrix}) => (
  <div>
     {matrix.map((row, rowIndex)=>(
      <Row
      row={row}
      rowIndex={rowIndex}
      />
     ))}
  </div>
)

export default Board;