export default function GameOver(props) {
  const { winner } = props;

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button type="button">Restart</button>
      </p>
    </div>
  );
}
