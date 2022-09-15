import styles from './Details.module.scss';
import React from 'react';
import Graph from '../Graph';
import TypeBadges from '../TypeBadges';

function Details({ pokemon }) {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.topSection}>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={pokemon['imgUrl']}
            alt={pokemon['name']}
          />
          <TypeBadges types={pokemon['types']} />
        </div>
        <div className={styles.graphContainer}>
          <Graph stats={pokemon['stats']} name={pokemon['name']} />
        </div>
      </div>
    </div>
  );
}

export default Details;
