import React, { FC, ReactElement } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { IChartProps } from '../../interfaces/chart';

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const ChartPie: FC<IChartProps> = ({ data }): ReactElement => {
  return <Pie data={data} />;
};
