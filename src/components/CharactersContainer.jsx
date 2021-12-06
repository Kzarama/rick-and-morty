import React, {useState, useEffect} from 'react';
import './styles/CharactersContainer.css';
import Characters from '../components/Characters';
import CharacterDetails from './CharacterDetails';

function CharactersContainer(props) {
  
  const [characters, setCharacters] = useState([]);
  const [characterSelected, setCharacterSelected] = useState({});
  const [nextPage, setNextPage] = useState(1);
  const [detailIsOpen, setDetailIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${nextPage}`)
      .then((response) => response.json())
      .then((response) => setCharacters(response.results))
      .catch((error) => setError(error));
    setLoading(false);
  }, [searching]);

  const handleOpenDetail = (e, character) => {
    setDetailIsOpen(true);
    setCharacterSelected(character);
  };

  const handleCloseDetail = (e) => {
    setDetailIsOpen(false);
  };

  const fetchCharacters = async () => {
    setLoading(true);
    setNextPage(nextPage+1);
    fetch(`https://rickandmortyapi.com/api/character?page=${nextPage+1}`)
      .then((response) => response.json())
      .then((response) => setCharacters([].concat(characters, response.results)))
      .catch((error) => setError(error));
    setLoading(false);
  };

  const searchCharacter = async (e) => {
    let name = e.target.value;
    if (name !== '') {
      setLoading(true);
      setSearching(true);
      const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then((response) => response.json())
        .catch((error) => setError(error));
      if (data.error) {
        setLoading(false);
        setCharacters([]);
      } else {
        setLoading(false);
        setCharacters(data.results);
      }
    } else {
      setCharacters([]);
      setNextPage(1);
      setSearching(false);
    }
  }

  return (
    <div className="characters__container">
      <div className="searcher">
        <input placeholder="Search" onChange={(e) => searchCharacter(e)} autoFocus />
      </div>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Characters
              character={character}
              onOpen={(e, character) => handleOpenDetail(e, character)}
            />
          </li>
        ))}
      </ul>

      <CharacterDetails
        onClose={() => handleCloseDetail()}
        onOpen={() => handleOpenDetail()}
        isOpen={detailIsOpen}
        character={characterSelected}
      />

      <div className="spinner">
        {loading ? 
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        : ''}
      </div>

      <div className="div_button">
        {!loading ?
          <button
            className="load_more_button"
            onClick={() => fetchCharacters()}
          >
            LOAD MORE
          </button>
        : ''}
      </div>
    </div>
  );
}

export default CharactersContainer;
