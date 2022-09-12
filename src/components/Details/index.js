import styles from './Details.module.scss';
import React, { useState } from 'react';

function Details({ pokemon }) {
  console.log(pokemon);
  return (
    <div>
      <div className={styles.topSection}>
        <div className={styles.imgContainer}>
          <img
            src={
              pokemon['sprites']['other']['official-artwork']['front_default']
            }
          />
        </div>
        <div className={styles.graphContainer}></div>
      </div>
    </div>
  );
}

export default Details;
