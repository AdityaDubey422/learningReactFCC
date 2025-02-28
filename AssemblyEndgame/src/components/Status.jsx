import { getFarewellText } from "../custom/utils";
import { languages } from "../custom/language";

export default function Status({
  isGameWon,
  isGameOver,
  userGuessArr,
  wrongGuessCount,
  currentWord,
  lastGuessedLetter
}) {
  function renderGameStatus() {
    if (isGameOver) {
      if (isGameWon) {
        return (
          <>
            <p>You win!</p>
            <p>Well done!🎉</p>
          </>
        );
      } else {
        return (
          <>
            <p>Game over!</p>
            <p>You lose! Better start learning Assembly 😭</p>
          </>
        );
      }
    }

    // Game is not over but user starts playing
    if (!isGameOver && userGuessArr.length !== 0) {
      return currentWord.includes(lastGuessedLetter) ? null : (
        <p>{getFarewellText(languages[wrongGuessCount - 1].name)}</p>
      );
    } else {
      return null;
    }
  }
  return (
    <>
      <div
        aria-live="polite"
        role="status"
        className="status"
        style={{
          backgroundColor: isGameOver
            ? isGameWon
              ? "#10a95b"
              : "#BA2A2A"
            : userGuessArr.length !== 0
            ? currentWord.includes(lastGuessedLetter)
              ? ""
              : "#7A5EA7"
            : "",
        }}
      >
        {renderGameStatus()}
      </div>
    </>
  );
}
