function checkDraw (board) {
  for(var i = 0; i < board.length; i++) {
    var row = board[i]
    for(var x = 0; x < row.length; x++) {
      if (row[x] === 5) {
        return false;
      }
    }
  }
  return true;
}

export default checkDraw;