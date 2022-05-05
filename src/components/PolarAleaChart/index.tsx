import React, { FC, ReactElement } from 'react';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { IChartProps } from '../../interfaces/chart';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const PolarAreaChart: FC<IChartProps> = ({ data }): ReactElement => {
  return <PolarArea data={data} />;
};
