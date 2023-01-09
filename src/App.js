import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './Form'
import Table from './Table';

class App extends Component {

  state = {
    characters: [
      {
        name: 'Omar Ramirez',
        job: 'Cyber Security Specialist'
      }
    ],
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    });
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  }

  render() {
    const { characters } = this.state;

    return (
      <div>
        <hr/>
        <Form handleSubmit={this.handleSubmit}/>
        <hr/>
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
      </div>
    )
  }
}

export default App;
