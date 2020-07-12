import React from "react";
import logo from "../img/logo.png";
import "./styles/App.css";
import Characters from "../components/Characters";
import CharacterDetails from "../components/CharacterDetails";

class App extends React.Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    detailIsOpen: false,
    characterSelected: null,
    data: {
      results: [],
    },
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
        nextPage: this.state.nextPage + 1,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  handleCloseDetail = (e) => {
    this.setState({ detailIsOpen: false });
  };

  handleOpenDetail = (e, character) => {
    this.setState({ detailIsOpen: true, characterSelected: character });
  };

  render() {
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }

    return (
      <React.Fragment>
        <header>
          <img className="img" src={logo} alt="logo" />
        </header>

        <div className="container">
          <ul className="row">
            {this.state.data.results.map((character) => (
              <li className="col-6 col-md-3" key={character.id}>
                <Characters
                  onOpen={this.handleOpenDetail}
                  character={character}
                />
              </li>
            ))}
          </ul>

          <CharacterDetails
            onClose={this.handleCloseDetail}
            onOpen={this.handleOpenDetail}
            isOpen={this.state.detailIsOpen}
            character={this.state.characterSelected}
          />

          <div className="div_button">
            {this.state.loading && <div>loading</div>}
            {!this.state.loading && (
              <button
                className="load_more_button"
                onClick={() => this.fetchCharacters()}
              >
                LOAD MORE
              </button>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
