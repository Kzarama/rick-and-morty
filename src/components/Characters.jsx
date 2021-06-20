import React from "react";
import "./styles/characters.css";

function Characters(props) {
  return (
    <div
      className="character"
      onClick={(e) => props.onOpen(e, props.character)}
    >
      <img src={props.character.image} alt="character" />
      <div className="name_container">
        <span>{props.character.name}</span>
      </div>
    </div>
  );
}

export default Characters;
