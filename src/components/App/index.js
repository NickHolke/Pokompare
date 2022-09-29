import styles from './App.module.scss';
import React, { useState, useCallback } from 'react';
import SearchBar from '../SearchBar';
import Details from '../Details';
import axios from 'axios';
import formatData from '../../helpers/formatData';

function App() {
  const [pokemon, updatePokemon] = useState({ 1: null, 2: null });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getPokemon = useCallback(async (url, detailId) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      updatePokemon(prevPokemon => {
        return { ...prevPokemon, [detailId]: formatData(data) };
      });
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  }, []);

  return (
    <div className={styles.App}>
      {isLoading && <div>loading spinner</div>}
      <SearchBar getPokemon={getPokemon} detailId={1} />
      {pokemon[1] !== null && <Details pokemon={pokemon[1]} />}
    </div>
  );
}

export default App;
