
const game = ()=>
{
    let pScore = 0;
    let cScore = 0; 

    // Start the game
    const startGame = ( ) =>
    {
        const playBtn = document.queryselctor('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener("click", () =>{
            introScreen.classList("fadeOut")
            match.classLit.add("fadeIn");
        });
        // Play match 
        const playMatch = () =>
    {
            const options = document.querySelectorAll(".options button");
            const playerHand = document.querySelector(".player-hand");
            const computerHand = document.querySelector(".computer-hand");

        // Computer Options 
        const computerOptions = ['rock', 'paper', 'scissor'];
        options.forEach(option =>)
        {
            options.addEventListener("click", function() 
            {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumbers ]
            }
        }
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
                    return;
                }
                else 
                {
                    winner.textContent = "Computer Wins";
                    return; 
                }
            }
        }
    };
    startGame();
    playMatch();
};
    game()