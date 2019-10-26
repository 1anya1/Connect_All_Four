
$(()=>{ ///on load function
   
  // constants
    const playersColors = {  // this is an object literal (datastructure)in the game that will assign players color plays. 
      '1': 'yellow',
      '-1': 'red',
      '0': 'white',
    };
    //variables  
    let board; 
    let turn;
    let winner;

    // h2 element that will be used to display names and wins in the game 
    const messageElement = document.getElementById('message'); // global variable for message finds id of message
    
    //event listners
    // adding event listner on the column selector 
    document.querySelector('section.columnSelector') //this returns the DOM element
    .addEventListener('click', handleClick );// creating event listner for the specific event just like on click in jQuery 
    // so essentially anytime someone clicks on the arrows above each column there is an event listner firing off
    //functions
    initGame(); ///calling on the function--function declaration, renders the board on reload 
    function initGame(){
      board = [
        [0,0,0,0,0,0], //column 1 starts with bottom left (c0r0) foing all the way up tp (cor5)
        [0,0,0,0,0,0], // column 2
        [0,0,0,0,0,0], // column 3
        [0,0,0,0,0,0], // column 4
        [0,0,0,0,0,0], // column 5
        [0,0,0,0,0,0], // column 6
        [0,0,0,0,0,0]  // column 7
      ];
      turn = 1; // game alsways starts off with player one " yellow turn"
      winner = null; //1 for yellow -1 for red and null for no winner null  
      renderBoard(); //calling on function render 
    }
    
    function renderBoard () {  /// from state to dom transfer , render the board for each nested column render the board 
      board.forEach(function(columnArr, columnIdx){ //forEach() calls a provided callback function once for each element in an array in ascending order.
      // hide or show columns marker depending if there are zeros or not ( if the column is full disable the triangle)
      const marker = document.getElementById(`column${columnIdx}`) //using template literals to get the column index -- this is for the top partt of the gmae the triangles 
      if(columnArr.indexOf(0)=== -1){ // this represents a full column. The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. 
        marker.style.visibility = 'hidden'; // this hides the column triangle if the column array is full 
      } else{
        marker.style.visibility = 'visible';// the triangle still shows if the array is not full ( meaning not -1)
      }
      //looping through the arrays in the board, using two parameters colmn array and extracting the index of the column array 
      columnArr.forEach(function(boxVal, rowIndex ){
        //going through each column at a time and checking each one of the cell values. 
        const div = document.getElementById(`c${columnIdx}r${rowIndex}`); //getting the id's 
        // console.log(div);
        div.style.backgroundColor = playersColors[boxVal]; // this calls on the object literal and assigns the color to the div on which the player pressed
        });
      
    });
        //rendering message on the scereen
    if(winner){
      if(winner === 'T'){ /// need to implement finction for this !
        messageElement.textContent = "it's a tie"
    }
    else {
      messageElement.textContent = `${playersColors[winner].toUpperCase()} Wins`;//calling on the object of Players Colors  using square bracket notation // need to uppercase this 
        }
    }else {
      // messageElement.textContent = `${turn}'s Turn`;//calling on the turn of player 1 or -1;
      messageElement.textContent = `${playersColors[turn].toUpperCase()} Turn`;//calling on the object of Players Colors  using square bracket notation // need to uppercase this 
     }
    
    };
    
    function handleClick(event){ // event handler for when someone clicks on the column selector 
      // console.log(event.target) ;
      //get id index of columnSelector clicked 
      let index= parseInt(event.target.id.replace('column',''));   //grabbig each id of the event we are clicking on, replace removes a specific item from the string and replacing it with an empty string. 
      // this code insures that the selector its self is clicked and not the surrounding area. Parse Int will give us a number from that string. If the result is not a number the value will be ignored. 
      if(isNaN(index) || winner) return; //if the value is a number then it is true, or if there is already a winner or a tie exit the function. 
      console.log(index);
      //getting olumn array and the board array 
      let columnArr = board[index]; //assigning the empty arrays of the board to each one of the columns
      console.log(columnArr); //this gives us the value of each of the arrays in the board game 
      //getting the index of the first 0 in the column array
      let rowIndex = columnArr.indexOf(0); // finding the first index of zero in a row 
      //if the column is full there is no zeros, so index of becomes -1. this code checks for that, nothing in no zeros are available ( column full);
      if(rowIndex === -1) return; //if all of the column array is not a zero, which position within the row id zero? updating the position of the array 
      //update the column array within the board with a player whose turn it is. 
      columnArr[rowIndex] = turn; //updated the board array 
      //this is for the flip between 1 and -1 essentially changing turns. 
      turn *= -1; // this changes out turns between 1 and -1. 
      //update the winner 
      winner = getWinner();
      renderBoard();  //updating the state of the game
    }
    function getWinner(){
      //return the winner, 't', or null
      let winner=null; //setting winner null (false) to runrun the function
      for(let columnIdx = 0; columnIdx<board.length; columnIdx++){ //this loop irretirates through all the columns of the board to find the values they have been reassigned/ assigned
        winner= checkColumn(columnIdx); //initiating the function (below) that is calling on the function that checks each column
        if(winner) break;// if winner is present then the program stops running 
      } return winner;
    }
    function checkColumn (columnIdx){  //check to see if we have a winner 
      let winner = null; // no winner is null 
      for (let rowIdx=0; rowIdx < board[columnIdx].length; rowIdx++){
        winner = checkUp(columnIdx, rowIdx) || checkRight(columnIdx, rowIdx);
      if (winner) break; 
      }
      return winner; 
    }
    function checkUp(columnIdx, rowIdx) { // checking vertically 
      if (rowIdx > 2) return null; //if row index is larger than 3 run the program 
      const columnArr = board[columnIdx];
      return ( Math.abs(columnArr[rowIdx] + columnArr[rowIdx + 1] + columnArr[rowIdx + 2] + columnArr[rowIdx + 3]) === 4 ) ? columnArr[rowIdx] : null; 
      //using tertriary equation to check if there is a match. 
    }
    function checkRight (columnIdx, rowIdx){ //checking horizontally 
      if(columnIdx>3) return null;// if the column has more than 3 chips than we run the return function 
      return ( Math.abs(board[columnIdx][rowIdx] + board[columnIdx + 1][rowIdx] + board[columnIdx + 2][rowIdx] + board[columnIdx + 3][rowIdx]) === 4 ) ? board[columnIdx][rowIdx] : null;
    }
});
    
// $(() => {
//   var turn = 0;
//   const rows = 7;
//   const columns = 6;

//   const player1 = [];
//   const player2 = [];

//   const $container = $('<div>').addClass('container');
//   $('body').append($container);

//   for (let col = 0; col < columns; col++) {
//       const $col = $('<div>').addClass('col ');
//       for (let row = 0; row < rows; row++) {
//           const $row = $(`<div id= "c${col}r${row}"></div>`).addClass('empty').css('background-color', 'white');
//           // .attr('id', col)
//           // .attr('id', row);
//           //const $row = $(`<div id= "c${col}r${row}"></div>`)
//           $col.append($row);
//       }
//       $container.append($col);
//   }

//   /// Event Handler for Moves//

//   function turns() {
//       console.log(event);
//       if (turn % 2 === 0) {
//           // alert('player1');// how to create turns for each player?
//           let currentDivsInCol = $(event.target).parent().find('div');
//           let current = currentDivsInCol.length;
//           for (let i = 0; i < currentDivsInCol.length; i++) {
//               if ($(currentDivsInCol[i]).hasClass('yellow') || $(currentDivsInCol[i]).hasClass('red')) {
//                   current = i - 1;
//                   break;
//               }
//               current = i;
//           }

//           $(currentDivsInCol).eq(current).css('background-color', 'yellow').addClass('yellow');
//           player1.push($(event.target).attr('id'));
//           // $(event.target).off('click');
//           player1.sort();
//       } else {
//           let currentDivsInCol = $(event.target).parent().find('div');
//           let current = currentDivsInCol.length;
//           for (let i = 0; i < currentDivsInCol.length; i++) {
//               if ($(currentDivsInCol[i]).hasClass('yellow') || $(currentDivsInCol[i]).hasClass('red')) {
//                   current = i - 1;
//                   break;
//               }
//               current = i;
//           }

//           $(currentDivsInCol).eq(current).css('background-color', 'red').addClass('red');
//           player2.push($(event.target).attr('id'));
//           // $(event.target).off('click');
//           player2.sort();
//       }
//       turn++;
//       // console.log(player1);
//       // console.log(player2);
//   }
//   $('.empty').on('click', turns); //how to make sure that the class doesnt get reassignes and player is unable to click the play that was clicked. Also how to assign each one of the id divs to a matrix of array play

//   // var currentPlayer =1;
//   // var currentChip = playerColor1;

//   // function playersTurn(rowIdx, colIdx, color) {
//   //     return $container.eq(rowIdx).find('.col').eq(colIdx).find('#row').css('background-color', color).addClass("clicked");
//   //   }
//   //   playersTurn();

//   // function colorDiv(rowIdx, colIdx) {
//   //     return $container.eq(rowIdx).find('.col').eq(colIdx).find('#row').css('background-color');
//   // }

//   // function checkPositioning (colIdx){
//   //     let colors = colorDiv(5, colIdx);
//   //     for(var row=5; row>=0; row--){
//   //         colors = colorDiv(row, colIndex);
//   //         if(colors==='rgb(237, 45, 73)'){
//   //             return row;
//   //         }
//   //         checkPositioning();
//   //     }

//   // }
//   // $('empty').on('click', function(){
//   //     var col = $(this).closest('div').index();
//   //     var checkposition=checkPositioning(col);
//   //     playersTurn(checkposition,col,currentChip);
//   // })

//   // }
//   // players();
// });
