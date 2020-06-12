import React from 'react';
import Square from './Square.jsx'

var Row = ({row, rowIndex,onSquareClickHandler,getBoard}) => (
  <div className="row">
    {row.map((square, colIndex)=>(
      <Square
      square={square}
      rowIndex={rowIndex}
      colIndex={colIndex}
      onSquareClickHandler={onSquareClickHandler}
      getBoard={getBoard}
      key={colIndex}
      />
    ))}
  </div>

)

export default Row;