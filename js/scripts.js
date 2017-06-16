// Simple game: Rock - Paper - Scissors

var newGameBtn = document.getElementById('js-newGameButton');	//button New Game

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),    //buttons rock-paper-scissors
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() {playerPick('rock')});
pickPaper.addEventListener('click', function() {playerPick('paper')});
pickScissors.addEventListener('click', function() {playerPick('scissors')});

var gameState = 'notStarted', //the game's storage			//started //ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

var newGameElem = document.getElementById('js-newGameElement'),		
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {					//styles display - game states
    switch(gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
          break;
        case 'ended':
            newGameBtn.innerText = 'Play again';
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
    }
}
setGameElements(); 

var playerPointsElem = document.getElementById('js-playerPoints'),   
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
    player.name = prompt('Please enter your name', 'player name');
    playerNameElem.innerHTML = player.name;

    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();           
        setGamePoints();
    }
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {          		//player's pick 
    console.log(playerPick);
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
}

function getComputerPick() {							//computer's pick
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random() * 3)];
}    

function setGamePoints() {							//points
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function checkRoundWinner(playerPick, computerPick) {			//set a round
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; 
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {
        
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Winner!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Winner!";
        computer.score++;
    }
    setGamePoints();

    function gameIsOver() {                             //ended
        if (player.score == 10) {
            alert('You are the Winner!');
            gameState = 'ended';
            setGameElements();
        } else if (computer.score == 10) {
            alert('Computer is a winner! Try again!');
            gameState = 'ended';
            setGameElements();
        }
    }
    gameIsOver();
}