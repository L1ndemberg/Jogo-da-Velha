document.addEventListener('DOMContentLoaded', ()=>{
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let postion = square.id;

     if (handleMove(postion)) {
    
      setTimeout(() => {
         alert ("O Jogo Acabou - O Vencedor foi " + playerTime);
        }, 20);
    
    };
    updateSquare();
 }

//  Voce pode fazer o update de um square so (Nao coloquei pq nao vi necessidade.)
function updateSquare() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
     let postion = square.id;
     let symbol = board[postion];
     
     if (symbol != '') {
          square.innerHTML = `<div class='${symbol}'></div>`
     }
        
    }) 
}
 
