  var activePlayer;
  var isRunning;
  var board;
  var count;

  init()

  function init () {
    activePlayer = 0;
    count = 0;
    board = [9,9,9,9,9,9,9,9,9];
    isRunning = true;

      document.querySelectorAll('.square').forEach((item)=>{
        item.classList.remove('clicked1');
        item.classList.remove('clicked2');
        item.addEventListener('click', ()=>{
          changeView(item)
        })
      })
      document.getElementById('container').style = 'display: grid';
      document.getElementById('activePlayer').style = "display: inline-block";
      document.querySelector('.message').innerHTML = "";
      document.querySelector('.message').classList.remove('winner')

      console.log('Game initialized')

      activeP()
    }

    function changeView (item) {
      if(item.classList.length === 1) {
        if(activePlayer === 0) {
          item.classList.add("clicked1")
          let squareNum = item.id;
          board[squareNum] = 0;
          count++;
          if(checkWinner() || count === 9) {
            final(count)
          } else {}
          activePlayer = 1;
          activeP()
          item.removeEventListener('click', changeView)
        } else {
          item.classList.add("clicked2")
          let squareNum = item.id;
          board[squareNum] = 1;
          count++;
            if(checkWinner() || count === 9) {
              final(count)
            } else { }
          activePlayer = 0;
          activeP()
          item.removeEventListener('click', changeView)
        }
      }
    }

  function activeP () {
    document.getElementById('activePlayer').innerHTML = `Player ${activePlayer+1}, it's your turn!`;
  }

  var checkWinner = function () {

    var checkX = function () {
      for(var i = 0; i < board.length; i+=3) {
        let chop = board.slice(i,i+3)
        if(checkSum(chop)) {
          return true;
        }
      }
      return false;
    };

    var checkY = function () {
      for(var i = 0; i < 3; i++) {
        let col = [board[i],board[i+3],board[i+6]]
        if(checkSum(col)){
          return true
        }
      }
      return false;
    }

    var checkMajor = function () {
      let major = []
      for(var i = 0; i < board.length; i+=4) {
        major.push(board[i])
      }
      return checkSum(major)
    }

    var checkMinor = function () {
      let minor = [];
      for (var i = board.length-3; i > 0; i-=2) {
        minor.push(board[i])
      }
      return checkSum(minor)
    }

    var checkSum = function (arr) {
      var sum = arr.reduce((memo, val)=>{
        memo += val;
        return memo;
      })
      if(sum === 3 || sum === 0) {
        return true;
      } else {
        return false;
      }
    }

    if(checkX()||checkY()|| checkMajor() || checkMinor()) {
      return true;
    } else {
      return false;
    }
  }

  var final = function (count) {
    isRunning = false;
    var mess1 = `Draw! Please press the button to start new game!`
    var mess2 = `Player ${activePlayer+1} wins!!! Congratulations!!!`
    document.getElementById('container').style = 'display:none';
    document.getElementById('activePlayer').style = "display: none";
    document.querySelector('.message').classList.add('winner')
    if(count === 9) {
      document.querySelector('.message').innerHTML = mess1;
    } else {
      document.querySelector('.message').innerHTML = mess2;
    }
  }

  document.getElementById('btn').addEventListener('click',()=>{
    init();
  })



