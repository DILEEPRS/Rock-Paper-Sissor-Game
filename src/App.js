import "./App.css";
import { useState } from "react";

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState(null);

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerChoice = generateComputerChoice();
    setComputerChoice(computerChoice);
    const result = getResult(choice, computerChoice);
    setResult(result);
  };

  const generateComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const getResult = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return "Tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  };

  return (
    <>
      <h1 className="heading" style={{ textAlign: "center", padding: "50px" }}>
        Rock Paper Sissor Game
      </h1>

      <div className="layout">
        <div className="item" onClick={() => handlePlayerChoice("rock")}>
          <img
            alt="nothing"
            className="iteminner"
            src="https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg"
          />
        </div>
        <div className="item" onClick={() => handlePlayerChoice("paper")}>
          <img
            alt="nothing"
            className="iteminner"
            src="https://www.skillshare.com/blog/wp-content/uploads/2021/07/Wrinkle-Paper-Textures-2-Deeezy-4-1024x682.jpeg"
          />
        </div>
        <div className="item" onClick={() => handlePlayerChoice("sissor")}>
          <img
            alt="nothing"
            className="iteminner"
            src="https://www.shutterstock.com/image-photo/black-scissors-on-white-background-260nw-125710904.jpg"
          />
        </div>
      </div>
      <h1
        style={{ textAlign: "center" }}
      >{`Your Choice is ${playerChoice}`}</h1>
      <h1
        style={{ textAlign: "center" }}
      >{`Computer Choice is ${computerChoice}`}</h1>

      <h1 style={{ textAlign: "center" }}>{result}</h1>

      <button
        style={{
          marginLeft: "48%",

          background: "#28de89",
          padding: "10px 20px",
          borderRadius: "4px",
          border: "none",
        }}
        onClick={() => {
          window.location.reload();
        }}
      >
        reset
      </button>
    </>
  );
};

function App() {
  return <Game />;
}

export default App;
