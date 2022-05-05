import { Color } from '../colors';

// add backgroundColor and borderColor to chart
export const colorDataSet = (length: any) => ({
  backgroundColor: [...Color.backgroundColor].splice(0, length),
  borderColor: [...Color.borderColor].splice(0, length),
  borderWidth: 1,
});
