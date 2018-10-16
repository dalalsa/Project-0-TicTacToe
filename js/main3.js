$(document).ready(function() {
  console.log("wineer", checkForWinner());
  var move = 1;
  var play = true;
  var playerGrid = [];
  var computerGrid = [];
  grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var board_table =
    '<table cellpadding="0px" cellspacing="0px" align="center" border="0px" class="board"><tr><td id="0"> </td><td id="1"> </td><td id="2"> </td></tr><tr><td id="3"> </td><td id="4"> </td><td id="5"> </td></tr><tr><td id="6"> </td><td id="7"> </td><td id="8"> </td></tr></table>';
  $("#board").html(board_table);
  var $cells = $("#board tr td");

  $cells.click(function() {
    console.log("player", playerGrid[i], "hh", i);
    if (move % 2 == 1) {
      for (var i = 0; i < grid.length; i++) {
        var id = $(this).attr("id");
      }
      if ((grid[i] = id)) {
        playerGrid[i] = "X";
        $(this).append("X");
      }
      move++;
    } else
      for (var i = 0; i < grid.length; i++) {
        var id = $(this).attr("id");
      }
    if ((grid[i] = id)) {
      computerGrid[i] = "O";
      $(this).append("O");
      console.log("player", computerGrid[i], "hhjj", i);
    }

    if (checkForWinner() === "X" || checkForWinner() === "O") {
      console.log("wineer", checkForWinner());

      play = false;
    }
  });

  //2:check for winners and return winner
  var winner;
  function checkForWinner() {
    var case1 = $("#board tr .row1.x").text().length;
    var case2 = $("#board tr .row2.x").text().length;
    var case3 = $("#board tr .row3.x").text().length;
    var case4 = $("#board tr .col1.x").text().length;
    var case5 = $("#board tr .col2.x").text().length;
    var case6 = $("#board tr .col3.x").text().length;

    ///
    var case7 = $("#board tr .row1.o").text().length;
    var case8 = $("#board tr .row2.o").text().length;
    var case9 = $("#board tr .row3.o").text().length;
    var case10 = $("#board tr .col1.o").text().length;
    var case11 = $("#board tr .col2.o").text().length;
    var case12 = $("#board tr .col3.o").text().length;
    if (case1 || case2 || case3 || case4 || case5 || case6 === 3) {
      winner = "x";
      console.log("hhhhh", winner);
      return winner;
    }
    if (case7 || case8 || case9 || case10 || case11 || case12 === 3) {
      winner = "o";
      console.log("hhhhh", winner);
      return winner;
    }
  }

  // var cell1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
  // var cell2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
  // var cell3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
  // var cell4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
  // var cell5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
  // var cell6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
  // var cell7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
  // var cell8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
  // var cell9 = $("#board tr:nth-child(3) td:nth-child(3)").text();
  // // check rows
  // if      ((cell1==cell2) && (cell2==cell3)) { return cell3; }
  // else if ((cell4==cell5) && (cell5==cell6)) { return cell6; }
  // else if ((cell7==cell8) && (cell8==cell9)) { return cell9; }
  // // check columns
  // else if ((cell1==cell4) && (cell4==cell7)) { return cell7; }
  // else if ((cell2==cell5) && (cell5==cell8)) { return cell8; }
  // else if ((cell3==cell6) && (cell6==cell9)) { return cell9; }
  // // check diagonals
  // else if ((cell1==cell5) && (cell5==cell9)) { return cell9; }
  // else if ((cell3==cell5) && (cell5==cell7)) { return cell7; }
  // // no winner
  // return -1;
});
