interface Data {
  id: number;
  title: string;
  img: string;
  description: string;
}

export interface InitialState {
  isLoading: boolean;
  isError: boolean;
  data?: Data[];
}
