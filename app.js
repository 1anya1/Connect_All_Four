// $(() => {
    
//     var turn = 0;
//     const rows = 7;
//     const columns = 6;

//     const player1 = [];
//     const player2 = [];

//     const $container = $('<div>').addClass('container');
//     $('body').append($container);

//     for (let col = 0; col < columns; col++) {
//         const $col = $('<div>').addClass('col ');
//         for (let row = 0; row < rows; row++) {
//             const $row = $(`<div id= "C${col}R${row}"></div>`).addClass('empty').css('background-color', 'white');
//             $col.append($row);
//         }
//         $container.append($col);
//     }

//     /// Event Handler for Moves//

//     function turns() {
//         // console.log(event);
//         if (turn % 2 === 0) {
//             let currentDivsInCol = $(event.target).parent().find('div');
//             let current = currentDivsInCol.length;
//             for (let i = 0; i < currentDivsInCol.length; i++) {
//                 if ($(currentDivsInCol[i]).hasClass('yellow') || $(currentDivsInCol[i]).hasClass('red')) {
//                     current = i - 1;
//                     break;
//                 }
//                 current = i;
                
//             }

//             $(currentDivsInCol).eq(current).css('background-color', 'yellow').addClass('yellow');
//             player1.push($(currentDivsInCol).eq(current));
//             // $(event.target).off('click');
//             player1.sort();
//         } else {
//             let currentDivsInCol = $(event.target).parent().find('div');
//             let current = currentDivsInCol.length;
//             for (let i = 0; i < currentDivsInCol.length; i++) {
//                 if ($(currentDivsInCol[i]).hasClass('yellow') || $(currentDivsInCol[i]).hasClass('red')) {
//                     current = i - 1;
//                     break;
//                 }
//                 current = i;
//             }

//             $(currentDivsInCol).eq(current).css('background-color', 'red').addClass('red');
//             player2.push($(current));
//             // $(event.target).off('click');
//             player2.sort();
//         }
//         turn++;
//         //  console.log(player1);
//         //  console.log(player2);
//     }
//     $('.empty').on('click', turns); 

// //     function checkForWinner (){
// //         if (player1.length >=4) { 
// //           for (i = 0; i < winArray.length; i++) { 
// //             for (j = 0; j < winArray[i].length; j++){ 
// //               for (k = 0; k < player1; k++) {
// //                 if (winCases[i] === player1[k]) {
// //                     alert('Player 1 Won!')
// //                 }
// //             }
// //         }
// //     }
// // }
// //     }
// console.log(player1);
// console.log(player2);

//     // checkForWinner();
    
//     // var winArrays = [  
//     //     [6,6,6,6],[5,5,5,5],[4,4,4,4],[3,3,3,3],[2,2,2,2],[1,1,1,1],[0,0,0,0],
//     //     [1,2,3,4],[2,3,4,5],[3,4,5,6]
//     // ];

//     //   console.log(winArrays);
//     // function returnColor(rowIndex,colIndex) {
//     //     const boardGame=$(event.target);
//     //     console.log(boardGame);
//     //     $(currentDivsInCol).eq(current).css('background-color')
//     //   }
//     // function colorMatchCheck(one,two,three,four){
//     //     return (one===two && one===three && one===four && one !== 'red');
//     //   }
//     //   function reportWin(rowNum,colNum) {
//     //     console.log("You won starting at this row,col");
//     //     console.log(rowNum);
//     //     console.log(colNum);
//     //   }
      
//     //   function horizontalWinCheck() {
//     //     for (var row = 0; row < 6; row++) {
//     //       for (var col = 0; col < 4; col++) {
//     //         if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
//     //           console.log('horiz');
//     //           reportWin(row,col);
//     //           return true;
//     //         }else {
//     //           continue;
//     //         }
//     //       }
//     //     }
//     //   }
//     //   horizontalWinCheck();
      
// });