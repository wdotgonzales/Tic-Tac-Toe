const playerTurnStatus = document.querySelector('.playerTurnStatus');
const box = document.querySelectorAll('.box');
const restartButton = document.querySelector('#restart');

// Box
const box1 = document.querySelector('.one');
const box2 = document.querySelector('.two');
const box3 = document.querySelector('.three');
const box4 = document.querySelector('.four');
const box5 = document.querySelector('.five');
const box6 = document.querySelector('.six');
const box7 = document.querySelector('.seven');
const box8 = document.querySelector('.eight');
const box9 = document.querySelector('.nine');




const gameboard = (function(){
    let board = ['X','O','X','O','X','O','X','O','X'];
    let storageBoard = [];


    const playerTurn = function(element){
        if(element.textContent == 'X'){
            playerTurnStatus.textContent = "Player O's Turn"
        } else if(element.textContent == 'O'){
            playerTurnStatus.textContent = "Player X's Turn"
        }
    }

    const displayBoard = function(element){

        if(element.textContent == 'X' || element.textContent == 'O'){
            return;
        } else {
            
            element.textContent = board[board.length - 1];
            storageBoard.push(board[board.length - 1]);
            board.pop();

            playerTurn(element);
            
            console.log('Board         : ' + board);
            console.log('Storage Board : ' + storageBoard);
        }
    }

    const restartGame = function(){
        for(let x = storageBoard.length - 1; x >= 0; x--){
            board.push(storageBoard[x])
        }
        storageBoard = [];
        playerTurnStatus.textContent = "Player X's Turn"
        
        console.log('-----------------------------------')
        console.log('Board         : ' + board);
        console.log('Storage Board : ' + storageBoard);
    }

    const declareWinnerOrDraw = function(){
        if(box1.textContent == 'X' && box2.textContent == 'X' && box3.textContent == 'X'){
            playerTurnStatus.textContent = 'Player X Won the Game!';
            board = [];
            storageBoard = ['X','O','X','O','X','O','X','O','X'];
        } else if(box1.textContent == 'O' && box2.textContent == 'O' && box3.textContent == 'O'){
            playerTurnStatus.textContent = 'Player O Won the Game!';
            board = [];
            storageBoard = ['X','O','X','O','X','O','X','O','X'];
        } else if(box4.textContent == 'X' && box5.textContent == 'X' && box6.textContent == 'X'){
            playerTurnStatus.textContent = 'Player X Won the Game!';
            board = [];
            storageBoard = ['X','O','X','O','X','O','X','O','X'];
        } else if(box4.textContent == 'O' && box5.textContent == 'O' && box6.textContent == 'O'){
            playerTurnStatus.textContent = 'Player O Won the Game!';
            board = [];
            storageBoard = ['X','O','X','O','X','O','X','O','X'];
        } else if(box7.textContent == 'X' && box8.textContent == 'X' && box9.textContent == 'X'){
            playerTurnStatus.textContent = 'Player X Won the Game!';
            board = [];
            storageBoard = ['X','O','X','O','X','O','X','O','X'];
        } else if(box7.textContent == 'O' && box8.textContent == 'O' && box9.textContent == 'O'){
            playerTurnStatus.textContent = 'Player O Won the Game!';
            board = [];
            storageBoard = ['X','O','X','O','X','O','X','O','X'];

        } else if(box1.textContent == 'X' && box4.textContent == 'X' && box7.textContent == 'X'){
            playerTurnStatus.textContent = 'Player X Won the Game!';
            board = [];
            storageBoard = ['X','O','X','O','X','O','X','O','X'];
        } else if(box1.textContent == 'O' && box4.textContent == 'O' && box7.textContent == 'O'){
            playerTurnStatus.textContent = 'Player O Won the Game!';
            board = [];
            storageBoard = ['X','O','X','O','X','O','X','O','X'];
        } else if(box2.textContent == 'X' && box5.textContent == 'X' && box8.textContent == 'X'){
            playerTurnStatus.textContent = 'Player X Won the Game!';
            board = [];
            storageBoard = ['X','O','X','O','X','O','X','O','X'];
        } else if(box2.textContent == 'O' && box5.textContent == 'O' && box8.textContent == 'O'){
            playerTurnStatus.textContent = 'Player O Won the Game!';
            board = [];
            storageBoard = ['X','O','X','O','X','O','X','O','X'];
        } else if(box3.textContent == 'X' && box6.textContent == 'X' && box9.textContent == 'X'){
            playerTurnStatus.textContent = 'Player X Won the Game!';
            board = [];
            storageBoard = ['X','O','X','O','X','O','X','O','X'];
        } else if(box3.textContent == 'O' && box6.textContent == 'O' && box9.textContent == 'O'){
            playerTurnStatus.textContent = 'Player O Won the Game!';
            board = [];
            storageBoard = ['X','O','X','O','X','O','X','O','X'];

        } else if(box1.textContent == 'X' && box5.textContent == 'X' && box9.textContent == 'X'){
            playerTurnStatus.textContent = 'Player X Won the Game!';
            board = [];
            storageBoard = ['X','O','X','O','X','O','X','O','X'];
        } else if(box1.textContent == 'O' && box5.textContent == 'O' && box9.textContent == 'O'){
            playerTurnStatus.textContent = 'Player O Won the Game!';
            board = [];
            storageBoard = ['X','O','X','O','X','O','X','O','X'];
        } else if(box3.textContent == 'X' && box5.textContent == 'X' && box7.textContent == 'X'){
            playerTurnStatus.textContent = 'Player X Won the Game!';
            board = [];
            storageBoard = ['X','O','X','O','X','O','X','O','X'];
        } else if(box3.textContent == 'O' && box5.textContent == 'O' && box7.textContent == 'O'){
            playerTurnStatus.textContent = 'Player O Won the Game!';
            board = [];
            storageBoard = ['X','O','X','O','X','O','X','O','X'];

        } else if(board.length == 0 && (playerTurnStatus.textContent == "Player X's Turn" || playerTurnStatus.textContent == "Player O's Turn")){
            playerTurnStatus.textContent = 'Draw';
            storageBoard = ['X','O','X','O','X','O','X','O','X'];
        }
    }

    return {
        displayBoard,restartGame,declareWinnerOrDraw
    }
})();


box.forEach(box => {
    box.addEventListener('click',() =>{
        box.classList.add('box-font');
        gameboard.displayBoard(box);
        gameboard.declareWinnerOrDraw();
    })
})


restartButton.addEventListener('click',() => {
    gameboard.restartGame(box);
    box.forEach(box => {
        box.textContent = ''
    })
})



