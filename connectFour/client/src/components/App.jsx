import React from 'react';
import Board from './Board.jsx';

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentMatrix: []
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



  render () {

    return (
      <div className="board-cont">
        <Board matrix={this.state.currentMatrix}/>
      </div>
    )
  }
}

export default App;