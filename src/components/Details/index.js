import styles from './Details.module.scss';
import React from 'react';
import Graph from '../Graph';

function Details({ pokemon }) {
  return (
    <div>
      <div className={styles.topSection}>
        <div className={styles.imgContainer}>
          <img src={pokemon['imgUrl']} alt={pokemon['name']} />
        </div>
        <div className={styles.graphContainer}>
          <Graph stats={pokemon['stats']} />
        </div>
      </div>
    </div>
  );
}

export default Details;
