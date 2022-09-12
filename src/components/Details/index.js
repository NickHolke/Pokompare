import styles from './Details.module.scss';
import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Details({ pokemon }) {
  const options = { responsive: true };
  const data = {
    labels: [
      'hp',
      'attack',
      'defense',
      'special-attack',
      'special-defense',
      'speed'
    ],
    datasets: [
      {
        data: [25, 30, 12, 15, 17, 18]
      }
    ]
  };
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
        <div className={styles.graphContainer}>
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
}

export default Details;
