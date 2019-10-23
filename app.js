$(() => {
    // my constants
    const player1=[];
    const player2=[];
    var turn= 0;
    const rows=7;
    const columns=6

    //render Board 
    const $container=$('<div>').addClass('container');
    $('body').append($container);
    
    for (let row = 0; row < rows ; row++) {
        const $row = $('<div>')
          .addClass('row');
        for (let col = 0; col < columns; col++) {
          const $col = $('<div>')
            .addClass('col empty')
            .attr('id', col)
            .attr('id', row);
          $row.append($col);
        }
        $container.append($row);
      };

    /// Event Handler for Moves//
    function turns () {
    if(turn%2===0){
        // alert('player1');// how to create turns for each player?
    $(event.target).css('background-color', 'yellow').removeClass('empty').addClass('yellow');
    // player1.push(parseInt($(event.target).attr('id')));
    player1.push($(event.target).attr('id'));
    player1.sort();
    } else {
    $(event.target).css('background-color', 'red').removeClass('empty').addClass('red');
    player2.push($(event.target).attr('id'));
    player1.sort();
    }
    turn++;
console.log(player1)
console.log(player2)

}
$('.empty').on('mouseover', turns ); //how to make sure that the class doesnt get reassignes and player is unable to click the play that was clicked. Also how to assign each one of the id divs to a matrix of array play


});
