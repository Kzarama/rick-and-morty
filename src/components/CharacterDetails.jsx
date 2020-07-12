import React from "react";
import ReactDOM from "react-dom";

import "./styles/characterDetails.css";

function CharacterDetails(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Detail">
      <div className="Detail_container">
        <img
          className="img-character"
          src={props.character.image}
          alt={props.character.name}
        />

        <div className="detail_properties">
          <h1>{props.character.name}</h1>

          {props.character.status === "Alive" ? (
            <h2>
              Status: <span class="dot-alive"></span> Alive
            </h2>
          ) : props.character.status === "Dead" ? (
            <h2>
              Status: <span class="dot-dead"></span> Dead
            </h2>
          ) : (
            <h2>
              Status: <span class="dot-unknown"></span> Unknown
            </h2>
          )}

          <h2>
            Specie: {props.character.species}
            {props.character.type !== "" ? " - " + props.character.type : ""}
          </h2>

          <h2>Gender: {props.character.gender}</h2>

          <h2>Origin: {props.character.origin.name}</h2>

          <h2>Last known location: {props.character.location.name}</h2>

          <button onClick={props.onClose} className="Detail_close-button">
            CLOSE
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("details")
  );
}

export default CharacterDetails;
