import styles from './TypeBadges.module.scss';
import React from 'react';

function TypeBadges({ types }) {
  return (
    <div className={styles.container}>
      {types.map(({ type }) => (
        <div key={type['name']} className={styles.badge}>
          {type['name']}
        </div>
      ))}
    </div>
  );
}

export default TypeBadges;
