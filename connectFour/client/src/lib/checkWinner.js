function checkWinner (board) {
  var checkX = function (board) {
    for (var i = 0; i < board.length; i++) {
      var row = board[i];
      for (var j = 0; j < row.length-2; j++) {
        var sum = row[j] + row[j+1] + row[j+2]
        if(sum === 0 || sum === 3) {
          return true
        }
      }
    }
  return false;
  };

  var checkY = function (board) {
    for (var i = 0; i < 7; i ++) {
      var column = [];
      var k = 0;
      while(k < 6) {
        var line = board[k][i]
        column.push(line)
        k++;
      }
      for (var j = 0; j < column.length-2; j++) {
        var sum = column[j] + column[j+1] + column[j+2]
        if(sum === 0 || sum === 3) {
          return true
        }
      }
    }
    return false;
  };

  var checkMajor = function (board) {
    for(var i = 0; i < board.length-2; i ++) {
      var m = 0;
      while(m < board[i].length-2) {
        var block = [];
        var k = i;
        while(k < i+3) {
          var x = m;
          while(x < m + 3){
          block.push(board[k][x])
            x++;
          }
          k++;
        }
        var sum1 = block[0]+block[4]+block[8];
        var sum2 = block[2]+block[4]+block[6]
        if(sum1 === 3 || sum1 === 0 || sum2 === 3 || sum2 === 0) {
          return true;
        }
        m++;
      }
    }
    return false;
  }

  var x = checkX(board)
  var y = checkY(board)
  var diag = checkMajor(board)
  if(x===true || y === true || diag === true) {
    return true;
  } else {
    return false;
  }

}

export default checkWinner;