import styles from './Graph.module.scss';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

function Graph({ stats, name }) {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: name,
        font: {
          size: 30
        }
      }
    }
  };
  const data = {
    labels: stats.labels,
    datasets: [
      {
        data: stats.values,
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
}

export default Graph;
