import React, { FC, ReactElement, useState } from 'react';
import { StatusFilter } from '../ToggleButtons/interfaces';
import ToggleButtons from '../ToggleButtons';
import { IChartProps } from '../../interfaces/chart';
import { Doughnut, Pie, PolarArea } from 'react-chartjs-2';
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  RadialLinearScale,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const ChartsContainer: FC<IChartProps> = ({ data }): ReactElement => {
  const [filter, setFilter] = useState<string>(StatusFilter.DOUGHNUT_CHART);

  const handleChangeFilter = (filterValue: string) => {
    setFilter(filterValue);
  };

  const constructorCharts: any = {
    [StatusFilter.DOUGHNUT_CHART]: <Doughnut data={data} />,
    [StatusFilter.POLAR_AREA_CHART]: <PolarArea data={data} />,
    [StatusFilter.PIE_CHART]: <Pie data={data} />,
  };

  return (
    <>
      <ToggleButtons onChange={handleChangeFilter} filter={filter} />
      {constructorCharts[filter]}
    </>
  );
};

export default ChartsContainer;
