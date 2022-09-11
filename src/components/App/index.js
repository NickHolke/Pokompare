import styles from './App.module.scss';
import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import axios from 'axios';

function App() {
  const [pokemon, updatePokemon] = useState(null);
  const getPokemon = url => {
    axios
      .get(url)
      .then(res => updatePokemon(res.data))
      .catch(err => console.log(err));
  };
  return (
    <div className={styles.App}>
      <SearchBar getPokemon={getPokemon} />
    </div>
  );
}

export default App;
