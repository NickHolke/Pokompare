import styles from './App.module.scss';
import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import Details from '../Details';
import axios from 'axios';
import formatData from '../../helpers/formatData';

function App() {
  const [pokemon, updatePokemon] = useState({ 1: null, 2: null });
  const getPokemon = (url, detailId) => {
    axios
      .get(url)
      .then(res => {
        updatePokemon(prevPokemon => {
          return { ...prevPokemon, [detailId]: formatData(res.data) };
        });
      })
      .catch(err => console.log(err));
  };
  return (
    <div className={styles.App}>
      <SearchBar getPokemon={getPokemon} detailId={1} />
      {pokemon[1] !== null && <Details pokemon={pokemon[1]} />}
    </div>
  );
}

export default App;
