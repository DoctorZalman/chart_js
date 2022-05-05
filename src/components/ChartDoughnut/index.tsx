import React, { FC, ReactElement } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { IChartProps } from '../../interfaces/chart';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartDoughnut: FC<IChartProps> = ({ data }): ReactElement => {
  return <Doughnut data={data} />;
};

export default ChartDoughnut;
