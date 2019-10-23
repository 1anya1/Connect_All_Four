$(() => {

    let turn=0; 
    $('div').on('click',(event)=>{
    if(turn%2===0){
    $(event.target).css('background-color', 'yellow')
    } else {
    $(event.target).css('background-color', 'red')
    }
    turn++

})
/*------------Constants------------*/
// My object of colors --  what colors are my divs going to be with each play? White if they are empty, yellow with player one move and red with player 2 move 
const playPieceColor= {
    '0': 'white',
    '1':'yellow',
    '-1':'red'
};

/*----------My Variables------------*/

let winner;
/*------------Reference------------*/

/*------------Event Listners-----------*/

/*------------Functions-----------*/
// init();
// function init () {
    // Created an ampty board where the turns will be replacing the array. Note that each one og the arrays are vertial meaning column starting with row zero. So imagine someone dropping the token and it has to go all the way down the column. 
//     board = [
//             [0,0,0,0,0,0], //column1 
//             [0,0,0,0,0,0], //column2 
//             [0,0,0,0,0,0], //column3 
//             [0,0,0,0,0,0], //colum4 
//             [0,0,0,0,0,0], //column5 
//             [0,0,0,0,0,0], //column6 
//             [0,0,0,0,0,0], //column7 
    
//         ];
    
//     winner = null;  //1, -1 . Null (no winner
// }  

});