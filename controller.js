function newGame() {
    // Lage random nytt brett: 
    const bombsArray = Array(bombAmount).fill('bomb'); // lag et array med antall bomber
    const emptyArray = Array(width*width - bombAmount).fill('valid'); // lag et array med tomme minus ant. bomber
    const gameArray = emptyArray.concat(bombsArray); // slå sammen de to arrayene over
    shuffledArray = gameArray.sort(() => Math.random() -0.5); // randomize rekkefølge
   
       // nummer generator
       for (let i = 0; i < board.length; i++) {
        let total = 0; //skal sendes til "value" i hver div/rute
        const isLeftSide = (i % width === 0);
        const isRightSide = (i % width === width -1);
        
        
            if (board[i].classList.contains('valid')) {
                console.log('kjører')
                if (i > 0 && !isLeftSide && board[i -1].classList.contains('bomb')) total++;
                if (i > 9 && !isRightSide && board[i +1 -width].classList.contains('bomb')) total++;
                if (i > 10 && board[i - width].classList.contains('bomb')) total++;
                if (i > 11 && !isLeftSide && board[i -1 -width].classList.contains('bomb')) total++;
                if (i < 98 && !isRightSide && board[i +1].classList.contains('bomb')) total++;
                if (i < 90 && !isLeftSide && board[i -1 +width].classList.contains('bomb')) total++;
                if (i < 88 && !isRightSide && board[i +1 +width].classList.contains('bomb')) total++;
                if (i < 89 && board[i +width].classList.contains('bomb')) total++;
               
                board[i].setAttribute('data', total)
                board[i].innerhtml = total;
            
            }
       }
    
    

    gameOver = false;
    show();
}

//tile = this fra onclick. 
function trykk(tile, i) {
console.log(tile)
let Id = tile.id;
// console.log(i)
if (gameOver == true) return
if (tile.classList.contains('checked') || tile.classList.contains('flag')) return
    if (tile.classList.contains('bomb')) {
        gameOver = true;
        console.log("GAME OVER")

    } if (tile.classList.contains('valid')) {
        tile.classList.add('checked');
        
        checkSweep(tile, Id);
      }
}        

function checkSweep() {

}




function flag() {
    console.log("flag")
}