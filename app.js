
$(()=>{ ///on load function
    // constants
    const playersColors = {  // this is an object that will hold all of the players color plays. Our object Literal  look up datastructure
      '0': 'white',
      '1': 'yellow',
      '-1': 'red'
    }
    //variables
    let board; 
    let turn;
    let winner

    // element ref
    const messageElement = document.getElementById('message'); // global variable for message finds id of message
    
    //event listners
    // adding event listner on the column selector 
    document.querySelector('section.columnSelector') //this returns the DOM element
    .addEventListener('click',handleClick );// creating event listner for the specific event
    
    //functions
    initGame(); ///calling on the function since its a function declaration, init also calls the render that renders the board 
    function initGame(){
      board = [
        [0,0,0,0,0,0], //column 1 starts with bottom left (c0r0) foing all the way up tp (cor6)
        [0,0,0,0,0,0], // column 2
        [0,0,0,0,0,0], // column 3
        [0,0,0,0,0,0], // column 4
        [0,0,0,0,0,0], // column 5
        [0,0,0,0,0,0], // column 6
        [0,0,0,0,0,0]  // column 7
      ];
      turn = 1;
      winner = null; //1 -1 null and T for the tie for potential values 
      renderBoard(); //calling on function render 
    }
    
    function renderBoard () {  /// from state to dom transfer , render the board for each nested column render the board 
      board.forEach(function(columnArr, columnIdx){
      // hide or show columns marker depending if there are zeros or not ( if the column is full disable the triangle)
      const marker = document.getElementById(`column${columnIdx}`)
      if(columnArr.indexOf(0)=== -1){ // this represents a full column.. eek column is full 
        marker.style.visibility = 'hidden'; // this hides the column triangle if it is full 
      } else{
        marker.style.visibility = 'visible';
      }
      //looping through the arrays in the board, using two parameters colmn array and extracting the index of the column array 
      columnArr.forEach(function(cellVal, rowIndex ){
        //going through each column at a time and checking each one of the cell values. 
        const div = document.getElementById(`c${columnIdx}r${rowIndex}`); //getting the id's 
        // console.log(div);
        div.style.backgroundColor = playersColors[cellVal]; // this renders the board 
        });
      
    });
        //rendering message on the scereen
    if(winner){
      if(winner === 'T'){ /// need to implement finction for this !
        messageElement.textContent = "it's a tie"
    }
    else {
      messageElement.textContent = `${playersColors[winner].toUpperCase()}'s Wins`;//calling on the object of Players Colors  using square bracket notation // need to uppercase this 
        }
    }else {
      // messageElement.textContent = `${turn}'s Turn`;//calling on the turn of player 1 or -1;
      messageElement.textContent = `${playersColors[turn].toUpperCase()}'s Turn`;//calling on the object of Players Colors  using square bracket notation // need to uppercase this 
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
    function checkColumn (columnIdx){
      let winner = null;
      for (let rowIdx=0; rowIdx < board[columnIdx].length; rowIdx++){
        winner = checkUp(columnIdx, rowIdx) || checkRight(columnIdx, rowIdx);
      if (winner) break; 
      }
      return winner; 
    }
    function checkUp(columnIdx, rowIdx) {
      if (rowIdx > 2) return null; //if row index is larger than 3 run the program 
      const columnArr = board[columnIdx];
      return ( Math.abs(columnArr[rowIdx] + columnArr[rowIdx + 1] + columnArr[rowIdx + 2] + columnArr[rowIdx + 3]) === 4 ) ? columnArr[rowIdx] : null; 
      //using tertriary equation to check if there is a match. 
    }
    function checkRight (columnIdx, rowIdx){
      if(columnIdx>3) return null;// if the column has more than 3 chips than we run the return function 
      return ( Math.abs(board[columnIdx][rowIdx] + board[columnIdx + 1][rowIdx] + board[columnIdx + 2][rowIdx] + board[columnIdx + 3][rowIdx]) === 4 ) ? board[columnIdx][rowIdx] : null;
    }
});
    