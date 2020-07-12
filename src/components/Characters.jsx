import React from "react";
import "./styles/characters.css";

function Characters(props) {
  return (
    <div
      className="character"
      style={{ backgroundImage: `url(${props.character.image})` }}
      onClick={(e) => props.onOpen(e, props.character)}
    >
      <div className="name_container">
        <span>{props.character.name}</span>
      </div>
    </div>
  );
}

export default Characters;
