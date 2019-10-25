$(() => {
        
   
    var turn= 0;
    const rows=7;
    const columns=6
    
    const player1 = [];
    const player2 = [];
    
    

    const $container=$('<div>').addClass('container');
    $('body').append($container);
    
    for (let col = 0; col < columns ; col++) {
    const $col = $('<div>').addClass('col ')
    for (let row = 0; row < rows; row++) {
      const $row = $(`<div id= "c${col}r${row}"></div>`).addClass('empty').css('background-color', 'white')
        // .attr('id', col)
        // .attr('id', row);
        //const $row = $(`<div id= "c${col}r${row}"></div>`)
      $col.append($row);
    }
    $container.append($col);
  };

    /// Event Handler for Moves//


   
    
    function turns () {
    if(turn%2===0){
        // alert('player1');// how to create turns for each player?
    $(event.target).css('background-color', 'yellow').addClass('yellow');
    player1.push($(event.target).attr('id'));
    $(event.target).off('click');
    player1.sort();
    } else {
    $(event.target).css('background-color', 'red').addClass('red');
    player2.push($(event.target).attr('id'));
    $(event.target).off('click');
    player2.sort();
    }
    turn++;
    console.log(player1)
    console.log(player2)

}
    $('.empty').on('click', turns ); //how to make sure that the class doesnt get reassignes and player is unable to click the play that was clicked. Also how to assign each one of the id divs to a matrix of array play
    
   

// var currentPlayer =1;
// var currentChip = playerColor1;

// function playersTurn(rowIdx, colIdx, color) {
//     return $container.eq(rowIdx).find('.col').eq(colIdx).find('#row').css('background-color', color).addClass("clicked");
//   }
//   playersTurn();

// function colorDiv(rowIdx, colIdx) {
//     return $container.eq(rowIdx).find('.col').eq(colIdx).find('#row').css('background-color');
// }

// function checkPositioning (colIdx){
//     let colors = colorDiv(5, colIdx);
//     for(var row=5; row>=0; row--){
//         colors = colorDiv(row, colIndex);
//         if(colors==='rgb(237, 45, 73)'){
//             return row; 
//         }
//         checkPositioning();
//     }
    
// }
// $('empty').on('click', function(){
//     var col = $(this).closest('div').index();
//     var checkposition=checkPositioning(col);
//     playersTurn(checkposition,col,currentChip);
// })

// }
// players();
    
});


