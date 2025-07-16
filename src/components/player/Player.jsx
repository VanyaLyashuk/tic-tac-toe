import { useState } from "react";

export default function Player(props) {
  const { initialName, symbol } = props;

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleInputChange(e) {
    setPlayerName(e.target.value);
  }

  function handleEditClick() {
    setIsEditing((prevState) => !prevState);
  }

  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            placeholder="Player name"
            value={playerName}
            onChange={handleInputChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button type="button" onClick={handleEditClick}>
        {!isEditing ? "Edit" : "Save"}
      </button>
    </li>
  );
}
