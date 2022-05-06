import React, { MouseEvent, FC, ReactElement } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import { useStyles } from './styles';
import { StatusFilter } from './interfaces';
import { IFilterProps } from '../../interfaces';

const ToggleButtons: FC<IFilterProps> = ({ onChange, filter }): ReactElement => {
  const { DOUGHNUT_CHART, POLAR_AREA_CHART, PIE_CHART } = StatusFilter;
  const classes = useStyles();

  const handleChangeFilter = (event: MouseEvent<HTMLElement>, newAlignment: string): void => {
    onChange(newAlignment);
  };

  return (
    <ToggleButtonGroup
      className={classes.filterButton}
      color="primary"
      value={filter}
      exclusive
      onChange={handleChangeFilter}>
      <ToggleButton value={DOUGHNUT_CHART}>Doughnut Chart</ToggleButton>
      <ToggleButton value={POLAR_AREA_CHART}>Polar Area Chart</ToggleButton>
      <ToggleButton value={PIE_CHART}>Pie Chart</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleButtons;
