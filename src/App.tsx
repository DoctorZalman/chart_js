import React, { FC, ReactElement, useEffect, useState } from 'react';
import Container from './components/Container';
import { IChartData } from './components/Container/interface';
// import { ChartBar } from './components/ChartBar';
import { colorDataSet } from './util';
import { IData } from './interfaces';
import { useStyles } from './styles/styles';
import { Box } from '@mui/material';
// import { ChartLine } from './components/ChartLine';
// import ChartDoughnut from './components/ChartDoughnut';
// import { ChartPie } from './components/ChartPie';
import ToggleButtons from './components/ToggleButtons';
import { StatusFilter } from './components/ToggleButtons/interfaces';

const App: FC = (): ReactElement => {
  const classes = useStyles();
  const [mainState, setMainState] = useState<IData | null>(null);
  const [filter, setFilter] = useState<string>('');

  console.log(mainState);

  useEffect(() => {}, []);

  const handleChangeFilter = (filterValue: string) => {
    setFilter(filterValue);
  };

  const createDataSet = (data: any, filterValue: string) => {
    const splitValueData = data.split(',');
    const chartColor = colorDataSet(data.length);
    return [
      {
        data: splitValueData,
        ...chartColor,
      },
    ];
  };

  const addDataHandler = ({ valueLabels, valueData }: IChartData) => {
    const splitValueLabels = valueLabels.split(',');
    const newCircleData: IData = {
      labels: splitValueLabels,
      datasets: createDataSet(valueData, filter),
    };

    setMainState(newCircleData);
  };
  const constructorCharts: any = {
    [StatusFilter.PIE_CHART]: StatusFilter.PIE_CHART, // <ChartBar data={mainState}
    [StatusFilter.BAR_CHART]: StatusFilter.BAR_CHART,
    [StatusFilter.LINE_CHART]: StatusFilter.LINE_CHART,
  };
  return (
    <Box className={classes.wrapper}>
      <Container addData={addDataHandler} />

      <ToggleButtons onChange={handleChangeFilter} filter={filter} />
      {constructorCharts[filter]}

      {/*{mainState && <ChartBar data={mainState} />}*/}
      {/*{mainState && <ChartLine data={mainState} />}*/}
      {/*{mainState && <ChartDoughnut data={mainState} />}*/}
      {/*{mainState && <ChartPie data={mainState} />}*/}
    </Box>
  );
};

export default App;
