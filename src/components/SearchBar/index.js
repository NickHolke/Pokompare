import styles from './SearchBar.module.scss';
import { pokemon } from './pokemon-list';
import Fuse from 'fuse.js';
import React, { useState } from 'react';

function SearchBar({ getPokemon }) {
  const [query, updateQuery] = useState('');
  const [hasFocus, updateHasFocus] = useState(false);
  const [results, updateResults] = useState([]);

  const getResults = query => {
    const options = {
      keys: ['name']
    };
    const fuse = new Fuse(pokemon, options);
    return fuse.search(query, { limit: 5 });
  };

  const requestPokemon = item => {
    getPokemon(item.url);
    updateQuery(item.name);
    updateHasFocus(false);
  };

  const changeHandler = e => {
    const val = e.target.value;
    updateQuery(val);
    updateResults(val === '' ? [] : getResults(val));
  };

  const keyDownHandler = (e, item) => {
    if (e.key === 'Enter') {
      requestPokemon(item);
    }
  };

  const clickHandler = item => {
    requestPokemon(item);
  };

  return (
    <div
      className={styles.searchWrapper}
      onBlur={e => {
        if (e.relatedTarget === null) {
          updateHasFocus(false);
        }
      }}
      onFocus={e => {
        if (!hasFocus) updateHasFocus(true);
      }}
    >
      <input
        value={query}
        onChange={changeHandler}
        onKeyDown={e => {
          if (results.length) {
            keyDownHandler(e, results[0].item);
          }
        }}
      />
      {results.length > 0 && hasFocus && (
        <ul className={styles.resultsWrapper}>
          {results.map(({ item, refIndex }) => (
            <li
              tabIndex="0"
              className={styles.result}
              key={refIndex}
              onKeyDown={e => keyDownHandler(e, item)}
              onClick={e => clickHandler(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
