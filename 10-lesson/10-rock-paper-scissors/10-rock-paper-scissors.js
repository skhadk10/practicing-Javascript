
        let score = JSON.parse(localStorage.getItem("score")) || {
          wins: 0,
          losses: 0,
          ties: 0,
        };

        updateScoreElement();

        document.querySelector(".js-result").innerHTML = result;

        document.querySelector(
          ".js-moves"
        ).innerHTML = `You ${playerMove}- ${computerMove} Computer`;

        // when the score is remove from localStorage
        // then score will be null so we do this
        /*  if (!score) {
          score = {
            wins: 0,
            losses: 0,
            ties: 0,
          };
        }*/

        function playGame(playerMove) {
          const computerMove = pickComputerMove();

          let result = "";
          if (playerMove === "scissors") {
            // comparing the computer move to get a result
            if (computerMove === "rock") {
              result = "You lose";
            } else if (computerMove === "paper") {
              result = "You win";
            } else if (computerMove === "scissors") {
              result = "Tie";
            }
          } else if (playerMove === "paper") {
            // comparing the computer move to get a result
            if (computerMove === "rock") {
              result = "You win";
            } else if (computerMove === "paper") {
              result = "Tie";
            } else if (computerMove === "scissors") {
              result = "You lose";
            }
          } else if (playerMove === "rock") {
            // comparing the computer move to get a result
            if (computerMove === "rock") {
              result = "Tie";
            } else if (computerMove === "paper") {
              result = "You lose";
            } else if (computerMove === "scissors") {
              result = "You win";
            }
          }
          if (result === "You win") {
            score.wins += 1;
          } else if (result === "You lose") {
            score.losses += 1;
          } else if (result === "Tie") {
            score.ties += 1;
          }
          //   store the score data in localstorage in JSON format
          localStorage.setItem("score", JSON.stringify(score));

          updateScoreElement();

          document.querySelector(".js-result").innerHTML = result;

          document.querySelector(".js-moves").innerHTML = ` You
        <img src="images/${playerMove}.png" alt="" class="move-icon">
        <img src="images/${computerMove}.png" alt="" class="move-icon"> Computer`;
        }

        function updateScoreElement() {
          //   update the score in webpage
          document.querySelector(
            ".js-score"
          ).innerHTML = `Wins: ${score.wins}, Loose: ${score.losses},ties: ${score.ties}`;
        }
        function pickComputerMove() {
          // when we click rock then computer generate a random no. and selects a move
          const randomNumber = Math.random();
          let computerMove = "";
          if (randomNumber >= 0 && randomNumber < 1 / 3) {
            computerMove = "rock";
          } else if (randomNumber >= 1 / 2 && randomNumber < 2 / 3) {
            computerMove = "paper";
          } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            computerMove = "scissors";
          }
          return computerMove;
        }
