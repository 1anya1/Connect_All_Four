$(() => {
    var turn = 0;
    const rows = 7;
    const columns = 6;

    const player1 = [];
    const player2 = [];

    const $container = $('<div>').addClass('container');
    $('body').append($container);

    for (let col = 0; col < columns; col++) {
        const $col = $('<div>').addClass('col ');
        for (let row = 0; row < rows; row++) {
            const $row = $(`<div id= "c${col}r${row}"></div>`).addClass('empty').css('background-color', 'white');
            // .attr('id', col)
            // .attr('id', row);
            //const $row = $(`<div id= "c${col}r${row}"></div>`)
            $col.append($row);
        }
        $container.append($col);
    }

    /// Event Handler for Moves//

    function turns() {
        console.log(event);
        if (turn % 2 === 0) {
            // alert('player1');// how to create turns for each player?
            let currentDivsInCol = $(event.target).parent().find('div');
            let current = currentDivsInCol.length;
            for (let i = 0; i < currentDivsInCol.length; i++) {
                if ($(currentDivsInCol[i]).hasClass('yellow') || $(currentDivsInCol[i]).hasClass('red')) {
                    current = i - 1;
                    break;
                }
                current = i;
            }

            $(currentDivsInCol).eq(current).css('background-color', 'yellow').addClass('yellow');
            player1.push($(event.target).attr('id'));
            // $(event.target).off('click');
            player1.sort();
        } else {
            let currentDivsInCol = $(event.target).parent().find('div');
            let current = currentDivsInCol.length;
            for (let i = 0; i < currentDivsInCol.length; i++) {
                if ($(currentDivsInCol[i]).hasClass('yellow') || $(currentDivsInCol[i]).hasClass('red')) {
                    current = i - 1;
                    break;
                }
                current = i;
            }

            $(currentDivsInCol).eq(current).css('background-color', 'red').addClass('red');
            player2.push($(event.target).attr('id'));
            // $(event.target).off('click');
            player2.sort();
        }
        turn++;
         console.log(player1);
         console.log(player2);
    }
    $('.empty').on('click', turns); //how to make sure that the class doesnt get reassignes and player is unable to click the play that was clicked. Also how to assign each one of the id divs to a matrix of array play

    
});