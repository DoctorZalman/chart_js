import { IChartData } from '../components/Container/interface';

interface IDataSetArray {
  data: string[];
}
interface IDataSetObject {
  data: [number];
}

export interface IData {
  labels: string[];
  datasets: IDataSetArray[] | IDataSetObject[];
}

export interface IInputProps {
  addData: (value: IChartData) => void;
}

export interface IFilterProps {
  onChange: (value: string) => void;
  filter: string;
}
