import styles from './Details.module.scss';
import React from 'react';
import Graph from '../Graph';
import TypeBadges from '../TypeBadges';
import Abilities from '../Abilities';
import Moves from '../Moves';

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
          <h1>{pokemon.name}</h1>
          <TypeBadges types={pokemon['types']} />
        </div>
        <div className={styles.graphContainer}>
          <Graph stats={pokemon['stats']} name={pokemon['name']} />
        </div>
      </div>
      <Abilities data={pokemon['abilities']} />
      <Moves
        movesList={pokemon['moves']['movesList']}
        movesVersions={pokemon['moves']['movesVersions']}
      />
    </div>
  );
}

export default Details;
