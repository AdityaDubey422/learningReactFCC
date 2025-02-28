import { useState } from "react";
import Status from "./components/Status";
import Language from "./components/Language";
import { languages } from "./custom/language";
import { getRandomWord } from "./custom/utils";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const alphabets = "abcdefghijklmnopqrstuvwxyz";
function App() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [userGuessArr, setUserGuessArr] = useState([]);
  const [keyboardKey, setKeyboardKey] = useState(
    Array.from(alphabets).map((alphabet) => ({
      alphabet: alphabet,
      backgroundColor: "#fcba29",
    }))
  );

  let wrongGuessCount = userGuessArr.filter(
    (userGuess) => !currentWord.includes(userGuess)
  ).length;
  let isGameLost = wrongGuessCount >= languages.length - 1 ? true : false;
  let isGameWon = Array.from(currentWord).every((alphabet) =>
    userGuessArr.includes(alphabet)
  );
  let isGameOver = isGameLost || isGameWon;
  let lastGuessedLetter = userGuessArr.at(-1);

  function handleClick(alphabet) {
    setUserGuessArr((prev) =>
      prev.includes(alphabet) ? prev : [...prev, alphabet]
    );
    setKeyboardKey((prev) =>
      prev.map((obj) =>
        obj.alphabet === alphabet
          ? currentWord.includes(alphabet)
            ? { ...obj, backgroundColor: "#10A95B" }
            : { ...obj, backgroundColor: "#EC5D49" }
          : obj
      )
    );
  }

  function resetGame() {
    setCurrentWord(() => getRandomWord());
    setUserGuessArr([]);
    setKeyboardKey(
      Array.from(alphabets).map((alphabet) => ({
        alphabet: alphabet,
        backgroundColor: "#fcba29",
      }))
    );
  }

  const wordElement = Array.from(currentWord).map((alphabet, index) => (
    <span
      key={index}
      className="alphabetElement"
      style={{
        color: userGuessArr.includes(alphabet)
          ? ""
          : isGameLost
          ? "#EC5D49"
          : "",
      }}
    >
      {userGuessArr.includes(alphabet)
        ? alphabet.toUpperCase()
        : isGameLost
        ? alphabet.toUpperCase()
        : ""}
    </span>
  ));

  const { width, height } = useWindowSize()
  const keyboardElement = keyboardKey.map(({ alphabet, backgroundColor }) => (
    <button
      style={{
        backgroundColor: backgroundColor,
      }}
      className="keyboardKey"
      key={alphabet}
      onClick={() => handleClick(alphabet)}
      disabled={isGameOver}
      aria-disabled={userGuessArr.includes(alphabet)}
      aria-label={`Letter ${alphabet}`}
    >
      {alphabet.toUpperCase()}
    </button>
  ));
  return (
    <div className="wrapper">
      <div className="top">
        <div className="gameGuide">
          <h2>Assembly: Endgame</h2>
          <p>
            Guess the word in under 8 attempts to keep the programming world
            safe from Assembly!
          </p>
        </div>

        <Status
          isGameWon={isGameWon}
          isGameLost={isGameLost}
          isGameOver={isGameOver}
          userGuessArr={userGuessArr}
          wrongGuessCount={wrongGuessCount}
          currentWord={currentWord}
          lastGuessedLetter={lastGuessedLetter}
        />
      </div>

      <Language wrongGuessCount={wrongGuessCount} />

      <div className="wordElementContainer">{wordElement}</div>

      {/* Combined visually-hidden aria-live region for status updates */}
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.includes(lastGuessedLetter)
            ? `Correct! The letter ${lastGuessedLetter} is in the word.`
            : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
          You have {10 - userGuessArr.length} attempts left.
        </p>
        <p>
          Current word:{" "}
          {Array.from(currentWord)
            .map((letter) =>
              userGuessArr.includes(letter) ? letter + "." : "blank."
            )
            .join(" ")}
        </p>
      </section>

      <div className="keyboardContainer">{keyboardElement}</div>

      {isGameOver ? (
        <button className="newGameBtn" onClick={resetGame}>
          New Game
        </button>
      ) : null}

      {isGameWon ?  <Confetti width={width -5} height={height -5} /> : null}

    </div>
  );
}

export default App;
