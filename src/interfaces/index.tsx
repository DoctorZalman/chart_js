import { IChartData } from '../components/InputContainer/interface';

interface IDataSetArray {
  data: string[];
}

export interface IData {
  labels: string[];
  datasets: IDataSetArray[];
}

export interface IInputProps {
  addData: (value: IChartData) => void;
}

export interface IFilterProps {
  onChange: (value: string) => void;
  filter: string;
}
//
// export interface ISwitchChange {
//   onChange: () => void;
//   darkMode: string;
// }
