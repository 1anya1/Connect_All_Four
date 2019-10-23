$(() => {
    // my constants
    const player1=[];
    const player2=[];
    var turn= 0;
  
    /// Event Handler for Moves//
    function turns () {
    if(turn%2===0){
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
$('.empty').on('click', turns );


});
