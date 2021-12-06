import React from 'react';
import logo from '../img/logo.png';
import './styles/App.css';
import CharactersContainer from '../components/CharactersContainer';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <header>
          <img className="img_header" src={logo} alt="logo" />
        </header>

        <CharactersContainer />
      </React.Fragment>
    );
  }
}

export default App;
