// $(() => {
//     const player1=[];
//     const player2=[];
//     var turn= 1;

//     const nextTurn= () => {  
//     if (turn === 2) { 
//       turn = 1;              
//     } else if (turn === 1) { 
//       turn = 2;
//     }
//     };

//     nextTurn();
//     $('div').css('background-color', 'white');

    
//     $('div').on('click',(event)=>{
//     if(turn===1){
//     $(event.target).css('background-color', 'yellow')
//     // player1.push(parseInt($(event.target).attr('id')));
//     player1.push($(event.target).attr('id'));
//     } else {
//     $(event.target).css('background-color', 'red')
//     player2.push($(event.target).attr('id'));
//     }

// console.log(player1)
// console.log(player2)
// })

// // function render() {
// //     
// //     }) 
// //     render();
// //     console.log(div);
// // }
// // render();
// /*------------Constants------------*/
// // My object of colors --  what colors are my divs going to be with each play? White if they are empty, yellow with player one move and red with player 2 move 
// const playPieceColor= {
//     '0': 'white',
//     '1':'yellow',
//     '-1':'red'
// };

// /*----------My Variables------------*/

// let winner;
// /*------------Reference------------*/

// /*------------Event Listners-----------*/

// /*------------Functions-----------*/
// init();
// function init () {
//     // Created an ampty board where the turns will be replacing the array. Note that each one og the arrays are vertial meaning column starting with row zero. So imagine someone dropping the token and it has to go all the way down the column. 
//     board = [
//             [0,0,0,0,0,0], //column1 
//             [0,0,0,0,0,0], //column2 
//             [0,0,0,0,0,0], //column3 
//             [0,0,0,0,0,0], //colum4 
//             [0,0,0,0,0,0], //column5 
//             [0,0,0,0,0,0], //column6 
//             [0,0,0,0,0,0], //column7 
    
//         ];
//     board.forEach (function(columnArray, columnIndex){
//                columnArray.forEach(function(cellValue, rowIndex){
//                     (`c${columnIndex} r${rowIndex}`)
//                })
//             })
// }  
//  console.log(board);
// });

const playerColors= {
    '0': 'white',
    '1': 'red',
    '-1': 'yellow'
}; // this is out look up data structure 

const players = {
    '1': {
        name: '',
        score:0
    },
    '-1': {
        name: '',
        score: 0
    }
};

let board, turn, winner;




///functions////
init();
function init() {
    board = [
        [0,0,0,0,0,0],  // column 1
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0], // column 7
    ],

    turn=1;
    winner= null; // 1, -1,  null ( game is still in play) t (tie game)
};

