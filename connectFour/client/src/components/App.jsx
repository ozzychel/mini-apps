import React from 'react';
import Board from './Board.jsx';
import checkWinner from '../lib/checkWinner.js'
import checkDraw from '../lib/checkDraw.js'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentMatrix: [],
      currentPalyer: false,
      tabCount: 0
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
      currentMatrix: matr,
      currentPlayer: false,
      tabCount: 0
    })
  }

  onSquareClickHandler (rowIndex, colIndex) {
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
        this.setState({
          tabCount: 1
        })
      } else if(checkDr) {
        this.setState({
          tabCount: 2
        })
      } else {}

    } else {
      console.log('Hey, that was ALREADY CLICKED!!!')
    }
    //check for the winner
  }

  getBoard () {
    return this.state.currentMatrix
  }

  render () {
    if(!this.state.tabCount){
      return (
        <div className="board-cont">
          <Board
          matrix={this.state.currentMatrix}
          onSquareClickHandler={this.onSquareClickHandler.bind(this)}
          getBoard={this.getBoard.bind(this)}
          />
        </div>
      )
    } else if(this.state.tabCount === 1) {
      return (
        <div>
          <h1>WINNER!!!</h1>
        </div>
      )
    } else {
      return (
        <div>
          <h1>DRAW!!!</h1>
          <h2>PLEASE RELOAD THE PAGE TO START OVER...</h2>
        </div>
      )
    }
  }
}

export default App;