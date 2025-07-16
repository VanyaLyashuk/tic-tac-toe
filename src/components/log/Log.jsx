export default function Log(props) {
  const { gameTurns } = props;

  return (
    <ol id="log">
      {gameTurns.map((gameTurn) => {
        const { row, col } = gameTurn.square;

        return (
          <li key={`${row}${col}`}>
            {gameTurn.player} selected {row}, {col}
          </li>
        );
      })}
    </ol>
  );
}
