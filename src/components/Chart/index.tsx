import React, { useState } from 'react';
import { Box, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { IInput } from './interface';
import { useStyles } from './styles';

const Index = () => {
  const [input, setInput] = useState<IInput>({ x_axis: '', y_axis: '' });
  const classes = useStyles();
  const onChange1 = (e: any): void => {
    const { name, value } = e.target;

    if (e.key === 'Enter' || e.type === 'blur') {
      setInput({
        ...input,
        [name]: value,
      });
    }
  };

  console.log(input);

  return (
    <Box className={classes.wrapper}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="component-outlined">X axis</InputLabel>
          <OutlinedInput
            id="component-outlined"
            label="x_axis"
            name="x_axis"
            onKeyPress={onChange1}
            onBlur={onChange1}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Y axis</InputLabel>
          <OutlinedInput
            id="component-outlined"
            label="y_axis"
            name="y_axis"
            onKeyPress={onChange1}
            onBlur={onChange1}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Index;
