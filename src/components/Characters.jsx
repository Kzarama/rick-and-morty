import React from "react";
import "./styles/characters.css";

function Characters(props) {
  return (
    <div
      className="character"
      style={{ backgroundImage: `url(${props.character.image})` }}
    >
      <div className="name_container">
        <span>{props.character.name}</span>
      </div>
    </div>
  );
}

export default Characters;
