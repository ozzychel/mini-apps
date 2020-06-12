import React from 'react';
import Square from './Square.jsx';
import Row from './Row.jsx'

var Board = ({matrix, onSquareClickHandler,getBoard}) => (
  <div>
     {matrix.map((row, rowIndex)=>(
      <Row
      row={row}
      rowIndex={rowIndex}
      onSquareClickHandler={onSquareClickHandler}
      getBoard={getBoard}
      key={rowIndex}
      />
     ))}
  </div>
)

export default Board;