import React from 'react';
import Board from './Board.jsx';
import checkWinner from '../lib/checkWinner.js'
import checkDraw from '../lib/checkDraw.js'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentMatrix: [],
      currentPalyer: false
    }
  }

  componentDidMount () {
    var matr = [];
    var i = 0;
    while(i < 6) {
      let row = [];
      let k = 0;
      while(k < 7) {
        row.push(5);
        k++;
      }
    matr.push(row);
    i++;
    }
    this.setState({
      currentMatrix: matr
    })
  }

  onSquareClickHandler (rowIndex, colIndex) {
    // console.log(rowIndex, colIndex);
    var newMatrix = [...this.state.currentMatrix];
    if(newMatrix[rowIndex][colIndex] === 5) {
      !this.state.currentPalyer ?
      newMatrix[rowIndex][colIndex] = 0 :
      newMatrix[rowIndex][colIndex] = 1
      this.setState({
        currentPalyer: !this.state.currentPalyer,
        currentMatrix: newMatrix
      })
      var checkWin = checkWinner(this.state.currentMatrix)
      var checkDr = checkDraw(this.state.currentMatrix)
      if (checkWin) {
        console.log('WINNER')
      } else if(checkDr) {
        console.log('DRAW')
      } else {
        console.log('NOT YET')
      }

    } else {
      console.log('Hey, that was ALREADY CLICKED!!!')
    }
    //check for the winner
  }

  getBoard () {
    return this.state.currentMatrix
  }

  render () {

    return (
      <div className="board-cont">
        <Board
        matrix={this.state.currentMatrix}
        onSquareClickHandler={this.onSquareClickHandler.bind(this)}
        getBoard={this.getBoard.bind(this)}
        />
      </div>
    )
  }
}

export default App;