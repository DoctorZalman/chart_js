import React, { FC, ReactElement } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { IChartProps } from '../../interfaces/chart';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const ChartBar: FC<IChartProps> = ({ data }): ReactElement => {
  return (
    <>
      <Bar data={data} />
    </>
  );
};
