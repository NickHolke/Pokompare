import React from 'react';
import styles from './Abilities.module.scss';
import Ability from './Ability';

function Abilities({ data }) {
  return (
    <div className={styles.container}>
      <h2>Abilities</h2>
      <div>
        {data.map(({ ability }) => (
          <Ability name={ability['name']} url={ability['url']} />
        ))}
      </div>
    </div>
  );
}

export default Abilities;
