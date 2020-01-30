import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super(); 

    this.state = {
      monsters: [],
      searchField: ''
    };

    this.handleChange = this.handleChange.bind(this);

  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => { 
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
    <div className='container'>
      <h1> Searching on A Roll </h1>
      <div className='App'>
        <SearchBox 
          placeHolder='Search Monsters'
          handleChange={ this.handleChange }
        />
        <CardList monsters = { filteredMonsters } />
      </div>
    </div>
    );
  }
  
}

export default App;
