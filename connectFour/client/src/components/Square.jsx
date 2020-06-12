import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      currentBoard: false
    }
  }

  setBoard(board) {
    this.setState({
      currentBoard: board
    })
  }

  render () {
    return (
      <div
        className={
          !this.state.currentBoard ? 'square' :
          this.state.currentBoard[this.props.rowIndex][this.props.colIndex] === 0 ? "square-green" : "square-red"
        }
        data-x={this.props.rowIndex}
        data-y={this.props.colIndex}
        onClick={()=>{
          this.props.onSquareClickHandler(this.props.rowIndex,this.props.colIndex)
          var board = this.props.getBoard()
          this.setBoard(board)
          }}
        >
       {this.props.square}
      </div>
    )
  }
}



// var Square = ({square, rowIndex, colIndex, onSquareClickHandler,getPlayer}) => (

//   <div
//     className={`square`}
//     data-x={rowIndex}
//     data-y={colIndex}
//     onClick={()=>{
//       onSquareClickHandler(rowIndex,colIndex)
//       getPlayer(rowIndex,colIndex)
//     }}

//     >
//     {square}
//   </div>

// )


export default Square;