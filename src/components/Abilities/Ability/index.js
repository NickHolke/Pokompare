import React, { useState, useEffect } from 'react';
import styles from './Ability.module.scss';
import axios from 'axios';

function Ability({ name, url }) {
  const [details, setDetails] = useState('');
  useEffect(() => {
    axios.get(url).then(res => {
      const detailObj = res.data['effect_entries'].find(
        effect => effect['language']['name'] === 'en'
      );
      setDetails(detailObj['short_effect']);
    });
  }, [url]);
  return (
    <div className={styles.abilityContainer}>
      <div className={styles.name}>{name}</div>
      <div className={styles.details}>{details}</div>
    </div>
  );
}

export default Ability;
