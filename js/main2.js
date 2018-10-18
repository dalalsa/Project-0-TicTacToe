$(document).ready(function() {
  console.log("XO Game");

  var computer = "O";
  var turn = "X";
  var grid = [["0", "1", "2"], ["3", "4", "5"], ["6", "7", "8"]];
  var gameOver = false;
  var play = true;
  var countX = 0;
  var line;
  player1 = "X";
  player2 = "O";
  var player = player1;
  var row = "row";
  var col = "col";
  var diagr1 = "diag1";
  var diagr2 = "diag2";
  var againstComputer = false;
  var availbleArray = [];
  var getAvailableMovesCom;
  var move = 0;
  var computerPlay = 1;
  //start buttons
  $("#1Player").click(function() {
    computerPlay = true;
  });
  $("#2Player").click(function() {
    computerPlay = false;
  });
  $("btnX").click(function() {
    player1 = "X";
  });
  $("btnO").click(function() {
    player1 = "O";
  });
  // Button click function
  function buttonClick() {
    $(this)
      .css("background-color", "#00796B")
      .css("color", "white");
    $(this)
      .prevAll()
      .css("background-color", "inherit")
      .css("color", "inherit");
    $(this)
      .nextAll()
      .css("background-color", "inherit")
      .css("color", "inherit");
    var object = $(this)
      .parent()
      .attr("id");
    if (object == "playerButton") computerPlay = $(this).attr("value");
    else if (object == "symbolChoseButton") mode.playas = $(this).attr("value");
    else if (object == "levelChoseButton") mode.level = $(this).attr("value");
    else console.log("Error!");
  }

  //intro screen
  $(function() {
    $("div.ButtonGroup>button:first-child")
      .css("background-color", "#00796B")
      .css("color", "white"); // Set default color button
    $("div.ButtonGroup>button").on("click", buttonClick); //Register event handler
    $("#startButton").on("click", startgame);
  });

  function endGame() {
    if (move == 9) {
      play = false;
      alert("game over");
      return true;
    }
    return false;
  }

  ///////////------------------------ Computer Move ---------------------------/////////////
  function computerMove() {
    if (!endGame()) {
      function getAvailableMoves() {
        //
        var availableMoves = [];
        for (var row = 0; row < 3; row++) {
          for (var column = 0; column < 3; column++) {
            if (grid[row][column] !== "O" && grid[row][column] !== "X") {
              availableMoves.push(grid[row][column]);
            }
          }
        }

        return availableMoves;
      }

      function randomGene() {
        var random = Math.floor(Math.random() * 10 - 1);
        return random;
      }
      var random1 = randomGene();
      //var getAvailableMovesCom = getAvailableMoves();
      var availableMoves = [];
      for (var row = 0; row < 3; row++) {
        for (var column = 0; column < 3; column++) {
          if (grid[row][column] !== "O") {
            availableMoves.push(grid[row][column]);
            console.log("availableMoves herefff  : ", grid[row][column]);
          }
        }
      }
      console.log("availableMoves 2  : ", availableMoves);
      getAvailableMovesCom = getAvailableMoves();
      var done = false;
      while (!done) {
        for (var i = 0; i < 9; i++) {
          if (availableMoves[i] == random1) {
            console.log(
              "random number matched : " +
                availableMoves +
                "random : " +
                random1
            );
            done = true;
            var computerId = random1;

            console.log("found match ", computerId);
            return computerId;
          } else {
            if (!play) {
              return;
            } else {
              random1 = randomGene();
              console.log("not found match  cont search  ", computerId);
            }
          }
        }
      }
    }
  }

  // Start Game function
  function startgame() {
    $(".container").hide();
    var board_table =
      '<table cellpadding="0px" cellspacing="0px" align="center" border="0px" class="board"><tr id ="tr0"><td id="0"> </td><td id="1"> </td><td id="2"> </td></tr><tr id ="tr1"><td id="3"> </td><td id="4"> </td><td id="5"> </td></tr><tr id ="tr2"><td id="6"> </td><td id="7"> </td><td id="8"> </td></tr></table>';
    $("#board").html(board_table);
    var $cells = $("#board tr td");
    $cells.click(function() {
      console.log("clickeddd", player);
      if ($(this).text() == " " && play) {
        for (var i = 0; i < grid.length; i++) {
          var id = $(this).attr("id");
          for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == id) {
              grid[i][j] = player;
              $(this).append(player);
              move++;
            }
          }
        }
      }
      if (play) {
        if (computerPlay) {
          player = nextTurn();
          var cm1 = computerMove();
          for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[i].length; j++) {
              if (grid[i][j] == cm1) {
                console.log("clickedhd", player);
                grid[i][j] = player;
                console.log("computer moove:", player);
                $("#" + cm1).append(player);
                player = nextTurn();
                move++;
              }
            }
          }
        } else if (!computerPlay) {
          player = nextTurn();
          //var cm1 = computerMove();
          for (var i = 0; i < grid.length; i++) {
            var id = $(this).attr("id");
            for (var j = 0; j < grid[i].length; j++) {
              if (grid[i][j] == id) {
                grid[i][j] = player;
                $(this).append(player);

                move++;
              }
            }
          }
        }
      }
      results();
    });
  }

  //   if (mode.playas == 'X') {
  //     player1 = 'X'; player2 = 'O'; symbolFlag = true;
  //   }
  //   else if (mode.playas == 'O') {
  //     player1 = 'O'; player2 = 'X'; symbolFlag = false;
  //   }
  //   else console.log('Error!');
  //   // Resigter event handler for each td
  //   $("td").on('mouseover', MouseOver).on('mouseout', MouseOut).on('click', MouseClick);
  //   $("#restartButton").on('click', restartGame);
  // }
  // Button click function
  function buttonClick() {
    $(this)
      .css("background-color", "#00796B")
      .css("color", "white");
    $(this)
      .prevAll()
      .css("background-color", "inherit")
      .css("color", "inherit");
    $(this)
      .nextAll()
      .css("background-color", "inherit")
      .css("color", "inherit");
    var object = $(this)
      .parent()
      .attr("id");
    // if (object == "playerButton") mode.noplayer = $(this).attr("value");
    // else if (object == "symbolChoseButton") mode.playas = $(this).attr("value");
    // else if (object == "levelChoseButton") mode.level = $(this).attr("value");
    // else console.log("Error!");
  }
  /////////////////////

  function userChoice(uc) {
    if (uc == "X") {
      player1 = "X";
      player2 = "O";
    } else if (uc == "O") {
      player1 = "O";
      player2 = "X";
    }
  }
  //change the turn
  function nextTurn() {
    turn = turn == player1 ? player2 : player1;
    return turn;
  }
  //results function
  function results() {
    var myResults = {};
    endGame();
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

    function checkForWinner(symbol) {
      my = {
        result: undefined,
        winningLine: undefined,
        winningLineType: undefined,
        winningLineNum: undefined
      };
      //check the repeats
      function succession(line) {
        if (line === symbol.repeat(3)) return true;
      }
      //check for rows
      for (var i = 0; i < 3; i++) {
        line = grid[i].join("");
        if (succession(line)) {
          my.result = symbol;
          my.winningLineType = row;
          my.winningLineNum = i;
          // my.winningLine = [[i, 0], [i, 1], [i, 2]];
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
  //function to show the winning line
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

  function restartGame() {
    location.reload();
  }
});
