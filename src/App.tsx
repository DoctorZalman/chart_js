import React, { FC, ReactElement, useState } from 'react';
import { IChartData } from './components/InputContainer/interface';
import { colorDataSet } from './util';
import { IData } from './interfaces';
import { useStyles } from './styles/styles';
import { Box } from '@mui/material';
import InputContainer from './components/InputContainer';
import ChartsContainer from './components/ChartsContainer';

const App: FC = (): ReactElement => {
  const classes = useStyles();
  const [mainState, setMainState] = useState<IData | null>(null);

  console.log(mainState);

  const createDataSet = (data: any) => {
    if (!data) return [];

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
      datasets: createDataSet(valueData),
    };

    setMainState(newCircleData);
  };

  return (
    <Box className={classes.wrapper}>
      <InputContainer addData={addDataHandler} />

      {mainState?.datasets.length ? <ChartsContainer data={mainState} /> : 'Please enter data'}
    </Box>
  );
};

export default App;
