import { useState, useEffect, useRef } from "react";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

function App() {
  function generateArr() {
    return Array.from({ length: 10 }, () => ({
      diceNumber: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }
  const { width, height } = useWindowSize();
  const [diceArr, setDiceArr] = useState(() => generateArr());
  let gameWon;

  // checking condition that all dices are held and number on all dices are equal
  if (
    diceArr.every((dice) => dice.isHeld) &&
    diceArr.every((dice) => dice.diceNumber === diceArr[0].diceNumber)
  ) {
    gameWon = true;
  }
  function rollDice() {
    if (gameWon) {
      setDiceArr(() => generateArr());
    } else {
      setDiceArr((prevDiceArr) =>
        prevDiceArr.map((prevDice) =>
          prevDice.isHeld
            ? prevDice
            : { ...prevDice, diceNumber: Math.ceil(Math.random() * 6) } 
        )
      );
    }
  }

  function hold(id) {
    setDiceArr((prevDiceArr) =>
      prevDiceArr.map((prevDice) =>
        prevDice.id === id
          ? { ...prevDice, isHeld: !prevDice.isHeld }
          : prevDice
      )
    );
  }

  let rollButton = useRef(null);
  useEffect(() => {
    if (gameWon) {
      rollButton.current.focus();
    }
  }, [gameWon]);


  return (
    <>
      <main>
        <h2>Tenzies</h2>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">
          {diceArr.map((dice) => (
            <Dice
              key={dice.id}
              diceNumber={dice.diceNumber}
              isHeld={dice.isHeld}
              hold={hold}
              id={dice.id}
            />
          ))}
        </div>
        <button className="roll-button" onClick={rollDice} ref={rollButton}>
          {gameWon ? "New Game" : "Roll"}
        </button>
        {gameWon && <Confetti width={width - 5} height={height - 5} />}
        <div aria-live="polite" className="sr-only">
          {gameWon && (
            <p>
              Congratulations You won the game Press "New Game" to start again
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;