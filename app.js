$(() => {
    // my constants
    const player1={  //objects that will hold all of the data for the data
        cells:[]
        
    };
    const player2={
        cells:[]
    };
    var turn= 0;
    const rows=7;
    const columns=6

    //render Board 
    const $container=$('<div>').addClass('container');
    $('body').append($container);
    
    // for (let row = 0; row < rows ; row++) {
    //     const $row = $('<div>')
    //       .addClass('row');
    //     for (let col = 0; col < columns; col++) {
    //       const $col = $(`<div id= "c${col}r${row}"></div>`)
    //         .addClass('col empty')
    //         // .attr('id', col)
    //         // .attr('id', row);
    //       $row.append($col);
    //     }
    //     $container.append($row);
    //   };

for (let col = 0; col < columns ; col++) {
    const $col = $('<div>')
      .addClass('col empty'+ col)
    for (let row = 0; row < rows; row++) {
      const $row = $(`<div id= "c${col}r${row}"></div>`)
        .addClass('row')
        // .attr('id', col)
        // .attr('id', row);
      $col.append($row);
    }
    $container.append($col);
  };

    /// Event Handler for Moves//
    function turns () {
    
    if(turn%2===0){
        // alert('player1');// how to create turns for each player?
    $(event.target).css('background-color', 'yellow').removeClass('empty').addClass('yellow');
    player1.cells.push($(event.target).attr('id'));
    $(event.target).off('click');
    // player1.push($(event.target).attr('id'));
    player1.cells.sort();
    } else {
    $(event.target).css('background-color', 'red').removeClass('empty').addClass('red');
    player2.cells.push($(event.target).attr('id'));
    $(event.target).off('click');
    player2.cells.sort();
    }
    turn++;
    console.log(player1)
    console.log(player2)

}
$('.row').on('click', turns ); //how to make sure that the class doesnt get reassignes and player is unable to click the play that was clicked. Also how to assign each one of the id divs to a matrix of array play


});


