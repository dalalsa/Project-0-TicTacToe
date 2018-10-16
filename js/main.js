$(document).ready(function() {
  var move = 1;
  var play = true;

  //2:draw the board
  //    var gameArray = {row:[a,b,c],[d,e,f],[g,h,i],
  //     column:[a,d,g,[b,e,h],[c,f,i],
  //     dig:[a,e,i],[c,e,g]};
  //    function checkForWinner() {
  //     if ($("#board tr td").hasClass("x")){
  //         console.log("winner is X")
  //     }

  // }
  // console.log(checkForWinner())

  //decide who  is turn

  //1:turns
  var userChoose = "X";
  var computerChoose = "O";
  $cells = $("#board tr td");
  function chooseSymple(uc) {
    if (uc === "X") {
      userChoose = "X";
    } else if (uc === "O") {
      userChoose = "O";
    }
    return userChoose;
  }
  $cells.click(function() {
    if ($(this).text() == "" && play) {
      if (move % 2 == 1) {
        $(this).append(userChoose);
        console.log("ok", $("#board tr .row3").text());
        $(this).addClass("x");
        move++;
      } else {
        $(this).append(computerChoose);
        $(this).addClass("o");
        move++;
      }
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

  function checkForWinner() {
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
  }
});

{
  /* <table id='board'>
<tr >
  <td class = 'row1'></td><td class = 'row1'></td><td class = 'row1'></td>
</tr>
<tr>
  <td class = 'row2'></td><td class = 'row2'></td><td class = 'row2'></td>
</tr>
<tr>
  <td class = 'row3' ></td><td class = 'row3'></td><td class = 'row3'></td>
</tr>
</table> */
}

//   if (
//     grid[i][0] == grid[i][1] &&
//     grid[i][1] == grid[i][2] &&
//     grid[i][0] != " "
//   ) {
//     return true;
//   }
//   if (
//     grid[0][i] == grid[1][i] &&
//     grid[1][i] == grid[2][i] &&
//     grid[0][i] != " "
//   ) {
//     return true;
//   }

//   if (
//     grid[0][0] == grid[1][1] &&
//     grid[1][1] == grid[2][2] &&
//     grid[0][0] != " "
//   ) {
//     return true;
//   }

//   if (
//     grid[0][2] == grid[1][1] &&
//     grid[1][1] == grid[2][0] &&
//     grid[0][2] != " "
//   ) {
//     return true;
//   }
// }

//return false;
