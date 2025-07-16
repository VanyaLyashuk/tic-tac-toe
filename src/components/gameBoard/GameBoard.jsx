import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard(props) {
  const { onSelectSquare, activePlayer } = props;

  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSquareSelect(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [
        ...prevGameBoard.map((innerArr) => [...innerArr]),
      ];

      updatedGameBoard[rowIndex][colIndex] = activePlayer;

      return updatedGameBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  type="button"
                  onClick={() => handleSquareSelect(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
