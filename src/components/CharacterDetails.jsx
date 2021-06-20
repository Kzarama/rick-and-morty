import React from 'react';
import ReactDOM from 'react-dom';

import './styles/characterDetails.css';

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

        <button onClick={props.onClose} className="Detail_close_button">
          CLOSE
        </button>

        <div className="detail_properties">
          <h2>
            <span className="secondary_text">Name: </span>
            {props.character.name}
          </h2>

          {props.character.status === 'Alive' ? (
            <h2>
              <span className="secondary_text">Status: </span>
              <span class="dot-alive"></span> Alive
            </h2>
          ) : props.character.status === 'Dead' ? (
            <h2>
              <span className="secondary_text">Status: </span>
              <span class="dot-dead"></span> Dead
            </h2>
          ) : (
            <h2>
              <span className="secondary_text">Status: </span>
              <span class="dot-unknown"></span> Unknown
            </h2>
          )}

          <h2>
            <span className="secondary_text">Specie: </span>
            {props.character.species}
            {props.character.type !== '' ? ' - ' + props.character.type : ''}
          </h2>

          <h2>
            <span className="secondary_text">Gender: </span>
            {props.character.gender}
          </h2>

          <h2>
            <span className="secondary_text">Origin: </span>
            {props.character.origin.name}
          </h2>

          <h2>
            <span className="secondary_text">Last known location: </span>
            {props.character.location.name}
          </h2>
        </div>
      </div>
    </div>,
    document.getElementById('details')
  );
}

export default CharacterDetails;
