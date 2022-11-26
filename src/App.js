import "./App.css";
import { useState } from "react";

function App() {
  const targetNumber = Math.floor(Math.random() * 10);
  const [target, setTarget] = useState(targetNumber);
  const [guessNum, setGuessNum] = useState("");
  const [counter, setCounter] = useState(0);

  const inputTextHandler = (e) => {
    const result = e.target.value;
    if (result <= 0 || result > 10) {
      alert("Please enter a number between 1 to 10!");
      return;
    }
    setGuessNum(result);
  };
  const compareHandler = (e) => {
    setCounter(counter + 1);
    e.preventDefault();
    if (document.getElementById("win").style.display === "block") {
      alert("You Win! Please click on R button!");
      return;
    }
    if (counter >= 3) {
      alert("Time Over! Please click on R button!");
    } else {
      setCounter(counter + 1);
    }
    if (guessNum == target) {
      document.getElementById("win").style.display = "block";
      document.getElementById("try").style.display = "none";
    } else {
      document.getElementById("try").style.display = "block";
    }
  };

  return (
    <div className="container">
      <form className="form">
        <input
          id="input-1"
          value={guessNum}
          type="number"
          onChange={inputTextHandler}
          placeholder="Guess number..."
        />
        <input
          className="input-2"
          type="submit"
          value="submit"
          onClick={compareHandler}
        />
        <p id="win" hidden={true}>
          You Win!!!
        </p>
        <p id="try" hidden={true}>
          Please Try again!!!
          <br /> You have just <span>{3 - counter >= 0 ? 3 - counter : 0 } </span>
          attempts
        </p>
        <button title="Reset Game!" onClick={() => window.location.reload()}>
          R
        </button>
      </form>
    </div>
  );
}

export default App;
