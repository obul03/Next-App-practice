'use client';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    labels: ['bank 1', 'bank 2', 'bank 3'],
    datasets: [
      {
        label: 'banks',
        data: [55, 23, 96], // You can use `accounts` data here if needed
        backgroundColor: ['red', 'blue', 'green'],
        borderWidth: 1,
      },
    ],
  };

    return <Doughnut
        data={data}
         options={{
          plugins: {
            legend: {
              display: false
            }
          }
        }}
    />;
};

export default DoughnutChart;
