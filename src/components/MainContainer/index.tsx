import React, { FC, ReactElement, useState } from 'react';
import { IData } from '../../interfaces';
import { colorDataSet } from '../../util';
import { IChartData } from '../InputContainer/interface';
import { Box, Typography } from '@mui/material';
import ChartsContainer from '../ChartsContainer';
import InputContainer from '../InputContainer';
import { useStyles } from './styles';

const MainContainer: FC = (): ReactElement => {
  const [mainState, setMainState] = useState<IData | null>(null);
  const classes = useStyles();

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
    <Box
      className={classes.wrapper}
      sx={{
        backgroundColor: 'primary.dark',
      }}>
      <InputContainer addData={addDataHandler} />

      {mainState?.datasets.length ? (
        <ChartsContainer data={mainState} />
      ) : (
        <Typography color="textSecondary">Please enter data</Typography>
      )}
    </Box>
  );
};

export default MainContainer;
