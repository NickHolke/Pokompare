import styles from './App.module.scss';
import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import Details from '../Details';
import axios from 'axios';

function App() {
  const [pokemon, updatePokemon] = useState({ 1: null, 2: null });
  const getPokemon = (url, detailId) => {
    axios
      .get(url)
      .then(res => {
        updatePokemon(prevPokemon => {
          const rawPokemon = res.data;
          rawPokemon['imgUrl'] =
            rawPokemon['sprites']['other']['official-artwork']['front_default'];
          rawPokemon['stats'] = rawPokemon['stats'].map(statObj => {
            statObj['name'] = statObj['stat']['name'];
            return statObj;
          });
          return { ...prevPokemon, [detailId]: rawPokemon };
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
