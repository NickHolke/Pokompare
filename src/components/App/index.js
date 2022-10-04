import styles from './App.module.scss';
import React, { useState, useCallback } from 'react';
import SearchBar from '../SearchBar';
import Details from '../Details';
import axios from 'axios';
import formatData from '../../helpers/formatData';
import Roster from '../Roster';

function App() {
  const [pokemon, updatePokemon] = useState({ 1: null, 2: null });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [roster, setRoster] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addToRoster = () => {
    const pokemonToAdd = pokemon['1'];
    if (pokemonToAdd === null) return;
    setRoster(oldRoster => {
      oldRoster.push({
        name: pokemonToAdd['name'],
        imgUrl: pokemonToAdd['imgUrl']
      });
      return oldRoster;
    });
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

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
      <button onClick={addToRoster}>Add pokemon</button>
      <button onClick={() => setDrawerOpen(true)}>Open Roster</button>
      <SearchBar getPokemon={getPokemon} detailId={1} />
      {pokemon[1] !== null && <Details pokemon={pokemon[1]} />}
      <Roster list={roster} isOpen={drawerOpen} closeDrawer={closeDrawer} />
    </div>
  );
}

export default App;
