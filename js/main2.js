$(document).ready(function() {
  console.log("XO Game");
  var player = "X";
  var computer = "O";
  var turn = "X";
  var grid = [["0", "1", "2"], ["3", "4", "5"], ["6", "7", "8"]];
  var gameOver = false;
  var play = true;
  var countX = 0;
  var line;
  var player1 = "X";
  var player2 = "O";
  var row = "row";
  var col = "col";
  var diagr1 = "diag1";
  var diagr2 = "diag2";
  var againstComputer = false;
  var availbleArray = [];
  var getAvailableMovesCom;
  // var getAvailableMovesCom = [];
  function computerMove() {
    var random1 = randomGene();

    getAvailableMovesCom = getAvailableMoves();

    for (var i = 0; i < getAvailableMovesCom.length; i++) {
      if (getAvailableMovesCom[i] == random1) {
        console.log(
          "random number matched : " +
            getAvailableMovesCom +
            "random : " +
            random1
        );
        var computerId = "#" + random1;
        console.log("ggg ", computerId);

        return computerId;
      }
    }
    function randomGene() {
      var random = Math.floor(Math.random() * 9 - 1);
      return random;
    }
  }
  function getAvailableMoves() {
    //
    var availableMoves = [];
    for (var row = 0; row < 3; row++) {
      for (var column = 0; column < 3; column++) {
        if (grid[row][column] !== "X" && grid[row][column] !== "O") {
          availableMoves.push(grid[row][column]);
        }
      }
    }
    console.log("availableMoves : ", availableMoves);
    return availableMoves;
  }

  //emptyCells[random].textContent = mark;}

  var board_table =
    '<table cellpadding="0px" cellspacing="0px" align="center" border="0px" class="board"><tr id ="tr0"><td id="0"> </td><td id="1"> </td><td id="2"> </td></tr><tr id ="tr1"><td id="3"> </td><td id="4"> </td><td id="5"> </td></tr><tr id ="tr2"><td id="6"> </td><td id="7"> </td><td id="8"> </td></tr></table>';
  $("#board").html(board_table);
  var $cells = $("#board tr td");
  $cells.click(function() {
    console.log("clickeddd", id);
    if (play && $(this).text() == " ") {
      for (var i = 0; i < grid.length; i++) {
        var id = $(this).attr("id");
        for (var j = 0; j < grid[i].length; j++) {
          if (grid[i][j] == id) {
            grid[i][j] = player;
            $(this).append(player);
          }
        }
      }
      player = nextTurn();
    }
    var cm1 = computerMove();
    console.log("computer move:", cm1);
    $(cm1).append(player);
    player = nextTurn();
    results();
  });

  /////////////////////
  function computerPlay() {
    againstComputer = true;
  }
  function userChoice(uc) {
    if (uc == "X") {
      player1 = "X";
      player2 = "O";
    } else if (uc == "O") {
      player1 = "O";
      player2 = "X";
    }
  }

  function nextTurn() {
    turn = turn == player1 ? player2 : player1;
    return turn;
  }

  function results() {
    var myResults = {};
    if (checkForWinner(player1)) {
      myResults = checkForWinner(player1);
      console.log(myResults);
      drawLine(myResults.winningLineType, myResults.winningLineNum);
      play = false;
      alert(
        "winner is x :" +
          myResults.result +
          "line " +
          myResults.winningLine +
          " type " +
          myResults.winningLineType +
          " number " +
          myResults.winningLineNum
      );
    }
    if (checkForWinner(player2)) {
      myResults = checkForWinner(player2);
      drawLine(myResults.winningLineType, myResults.winningLineNum);
      alert("winner  is O"), myResults.winningLineNum;
      play = false;
    }
    //check for rows
    function checkForWinner(symbol) {
      my = {
        result: undefined,
        winningLine: undefined,
        winningLineType: undefined,
        winningLineNum: undefined
      };
      //check the repeats
      function succession(line) {
        //console.log("return fast");
        if (line === symbol.repeat(3)) return true;
      }
      for (var i = 0; i < 3; i++) {
        line = grid[i].join("");
        //console.log("some here", line);
        if (succession(line)) {
          my.result = symbol;
          my.winningLineType = row;
          my.winningLineNum = i;
          // my.winningLine = [[i, 0], [i, 1], [i, 2]];
          //my.line = i
          //console.log("success here rows line", my.result + "row : " + i); //works
          return my;
        }
      }
      //check for columns

      for (var j = 0; j < 3; j++) {
        var column = [grid[0][j], grid[1][j], grid[2][j]];
        line = column.join("");
        if (succession(line)) {
          my.result = symbol;
          //my.winningLine = [[0, j], [1, j], [2, j]];

          my.winningLineNum = j;
          my.winningLineType = col;
          //alert("success col here col line " + j);
          // return { result, winningLine };
          return my;
        }
      }
      //check for diag
      var diag1 = [grid[0][0], grid[1][1], grid[2][2]];
      line = diag1.join("");
      if (succession(line)) {
        my.result = symbol;
        my.winningLineType = diagr1;
        my.winningLineNum = 1;
        my.winningLine = [[0, 0], [1, 1], [2, 2]];
        // console.log("dig1" + diagr1);
        //return { result, winningLine };
        return my;
      }

      var diag2 = [grid[0][2], grid[1][1], grid[2][0]];
      line = diag2.join("");
      if (succession(line)) {
        my.result = symbol;
        my.winningLineType = diagr2;
        my.winningLineNum = 2;
        // my.winningLine = [[0, 2], [1, 1], [2, 0]];
        //return { result, winningLine };
        return my;
      }
    }
  }

  function drawLine(lineType, lineNumber) {
    var $rows = $("#board tr");
    if (lineType == "row") {
      if (lineNumber === 0) {
        $("#board #tr0").addClass("green");
      }
      if (lineNumber === 1) {
        $("#board #tr1").addClass("red");
      }
      if (lineNumber === 2) {
        $("#board #tr2").addClass("red");
      }
    }
    ////
    if (lineType == "col") {
      if (lineNumber === 0) {
        $("#board tr #0,#3,#6").addClass("green");
      }
      if (lineNumber === 1) {
        $("#board tr #1,#4,#7").addClass("red");
      }
      if (lineNumber === 2) {
        $("#board tr #2,#5,#8").addClass("red");
      }
    }
    if (lineType == "diag1") {
      $("#board tr #0,#4,#8").addClass("green");
    }
    if (lineType == "diag2") {
      $("#board tr #2,#4,#6").addClass("green");
    }
  }
});
