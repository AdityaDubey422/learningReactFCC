export default function Dice({ diceNumber, isHeld, hold, id }) {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };
  return (
    <button
      style={styles}
      className="dice"
      onClick={() => hold(id)}
      aria-label={`Dice with value ${diceNumber}, ${
        isHeld ? "held" : "not held"
      }`}
      aria-pressed={isHeld}
    >
      {diceNumber}
    </button>
  );
}
