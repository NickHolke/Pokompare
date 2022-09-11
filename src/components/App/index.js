import styles from './App.module.scss';
import { pokemon } from './pokemon-list';
import Fuse from 'fuse.js';
import React, { useState, useRef } from 'react';

function App() {
  const [query, updateQuery] = useState('');
  const [hasFocus, updateHasFocus] = useState(false);

  const ref = useRef(null);

  const getList = query => {
    const options = {
      keys: ['name']
    };
    const fuse = new Fuse(pokemon, options);
    return fuse.search(query, { limit: 5 });
  };

  return (
    <div className={styles.App}>
      <div
        className={styles.searchWrapper}
        ref={ref}
        onBlur={e => {
          if (e.relatedTarget === null) {
            updateHasFocus(false);
          }
        }}
        onFocus={e => {
          if (!hasFocus) updateHasFocus(true);
        }}
      >
        <input value={query} onChange={e => updateQuery(e.target.value)} />
        {query !== '' && hasFocus && (
          <ul className={styles.resultsWrapper}>
            {getList(query).map(({ item, refIndex }) => (
              <li tabIndex="0" className={styles.result} key={refIndex}>
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
