
const game = () =>
{
    let pScore = 0;
    let cScore = 0; 

    // Start the game
    const startGame = ( ) =>
    {
        const playBtn = document.querySelctor(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () =>
        {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
        // Play match 
        const playMatch = () =>
    {
            const options = document.querySelectorAll(".options button");
            const playerHand = document.querySelector(".player-hand");
            const computerHand = document.querySelector(".computer-hand");
            const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>
        {
            hand.addEventListener("animationed", function () 
            {
                    this.style.animation = "";
            });
        });

        // Computer Options 
        const computerOptions = ['rock', 'paper', 'scissors'];
        options.forEach(option =>
        {
            options.addEventListener("click", function() 
            {
                const  computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumbers];

                // Update Images 
                setTimeout(() => 
                {
                    compareHands(this.textContent,Computerchoice);
                    playerHand.src = './assets/$/this.textContent}.png';
                    computerHand.src = './assets/$/this.ComputerChoice},png';

                }, 2000);
                // Animation 
                playerHand.style.animation = "shakePlayer's 2 ease";
                computerHand.style.animation = "shakeComputer's 2 ease";
            });
        });
    };  
    

    const updateScore = ( ) => 
    {
        const playerScore = document.querySelector(".player-score p")
        const computerScore = document.querySelctor(".computer-score p")
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

        const compareHands = (playerChoice, computerChoice) => 
        {
            const winner = document.querySelector('.winner');

            if(playerChoice === computerChoice)
            {
                winner.textContent = "It is a tie";
                return;
            }
            if(playerChoice === 'rock')
            {
                if(computerChoice === 'scissors')
                {
                    winner.textContent = "Player Wins"
                    pScore++;
                    updateScore();
                    return;
                }
                else 
                {
                    winner.textContent = "Computer Wins";
                    cScore++;
                    updateScore();
                    return; 
                }
            }
            // Check for paper 
            if(playerChoice === 'paper')
            {
                if(computerChoice === 'scissors')
                {
                    winner.textContent = "Computer  Wins"
                    cScore++;
                    updateScore();
                    return;
                }
                else 
                {
                    winner.textContent = "Player  Wins";
                    pScore++;
                    updateScore();
                    return; 
                }
            }
            if(playerChoice === 'scissors')
            {
                if(computerChoice === 'rock')
                {
                    winner.textContent = "Computer  Wins"
                    cScore ++;
                    updateScore();
                    return;
                }
                else 
                {
                    winner.textContent = "Player  Wins";
                    pScore++;
                    updateScore();
                    return; 
                 }
            };

    startGame();
    playMatch();
};
    game();