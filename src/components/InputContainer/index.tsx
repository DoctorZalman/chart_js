import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Box, FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import { IChartData } from './interface';
import { IInputProps } from '../../interfaces';

const InputContainer: FC<IInputProps> = ({ addData }): ReactElement => {
  const [data, setData] = useState<IChartData>({ valueLabels: '', valueData: '' });

  // add new data item to state and localStorage
  const onChangeValue = (e: any): void => {
    const { name, value } = e.target;
    const dataInput = {
      ...data,
      [name]: value,
    };

    if (e.key === 'Enter' || e.type === 'blur') {
      addData(dataInput);
      localStorage.setItem('data', JSON.stringify(dataInput));
    }

    setData(dataInput);
  };

  // get data from
  useEffect(() => {
    const dataItem: any = JSON.parse(localStorage.getItem('data') as string);

    if (dataItem?.length) {
      setData(dataItem);
    }
  }, []);

  return (
    <Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="component-outlined">Labels</InputLabel>
          <OutlinedInput
            value={data.valueLabels}
            color="primary"
            id="component-outlined"
            label="labels"
            name="valueLabels"
            onKeyPress={onChangeValue}
            onBlur={onChangeValue}
            onChange={onChangeValue}
            aria-describedby="component-error-text"
          />
          <FormHelperText id="component-helper-text">text,text,text</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Data</InputLabel>
          <OutlinedInput
            value={data.valueData}
            id="component-outlined"
            label="data"
            name="valueData"
            onKeyPress={onChangeValue}
            onBlur={onChangeValue}
            onChange={onChangeValue}
            aria-describedby="component-error-text"
          />
          <FormHelperText id="component-helper-text">12,18,33,45</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default InputContainer;
