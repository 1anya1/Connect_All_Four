$(() => {
        
   
    var turn= 0;
    const rows=7;
    const columns=6

    const $container=$('<wrapper>').addClass('container');
    $('body').append($container);
    
    for (let col = 0; col < columns ; col++) {
    const $col = $('<section>').addClass('col '+col)
    for (let row = 0; row < rows; row++) {
      const $row = $(`<div id= "c${col}r${row}"></div>`)
        .addClass('empty')
        // .attr('id', col)
        // .attr('id', row);
      $col.append($row);
    }
    $container.append($col);
  };

    /// Event Handler for Moves//

    function players (player1, player2) {
         player1 = prompt("Player 1, what's your name? ")
         player2 = prompt("Player 2, what's your name?")
    }
    players();
    // function turns () {
    // if(turn%2===0){
    //     // alert('player1');// how to create turns for each player?
    // $(event.target).css('background-color', 'yellow').addClass('yellow');
    // player1.cells.push($(event.target).attr('id'));
    // $(event.target).off('click');
    // // player1.push($(event.target).attr('id'));
    // player1.cells.sort();
    // } else {
    // $(event.target).css('background-color', 'red').addClass('red');
    // player2.cells.push($(event.target).attr('id'));
    // $(event.target).off('click');
    // player2.cells.sort();
    // }
    // turn++;
    // console.log(player1)
    // console.log(player2)

// }
    // $('.empty').on('click', turns ); //how to make sure that the class doesnt get reassignes and player is unable to click the play that was clicked. Also how to assign each one of the id divs to a matrix of array play
    
//     function bottomCell () {
//     var $columnMarker=$('section').children();
//     if($columnMarker.class('empty')!==true) {

//    }
//     console.log($columnMarker);
//     // console.log($myDivs);
// }
// bottomCell();
function switchPlayer(rowIndex, colIndex, color) {
    return $container.eq(rowIndex).find('section').eq(colIndex).find('div').css('background-color', color).addClass("clicked");
  }

console.log(switchPlayer);

});


