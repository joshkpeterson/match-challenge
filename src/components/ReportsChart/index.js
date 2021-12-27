import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './ReportsChart.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const CHART_COLORS = [
  '#974fff',
  '#f0441c',
  '#ffb90b',
  '#598ca8',
];

export default function ReportsChart({ filteredData, totalAll }) {
  const [chartData, setChartData] = useState()

  useEffect(() => {
    const transformedData = filteredData.reduce((acc, val, i) => {
      acc.datasets[0].data.push(val.total);
      acc.datasets[0].backgroundColor.push(CHART_COLORS[i % 4]);
      acc.labels.push(val.name);
      return acc
    }, {
      labels: [],
      datasets: [
        {
          label: '% of transaction amounts',
          data: [],
          backgroundColor: [],
          borderWidth: 1,
        },
      ],
    }
  );

  setChartData(transformedData);
  console.log(transformedData)
  }, [filteredData])

  return (
    <div className={styles.reportsChart}>
      {chartData && <Doughnut data={chartData} />}
    </div>
  )
}