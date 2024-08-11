interface Data {
  id: number;
  title: string;
  img: string;
  link: string;
  description: string;
}

export interface InitialState {
  isLoading: boolean;
  isError: boolean;
  data?: Data[];
}


export interface FeedbackPropType {
  name: string;
  email: string;
  message: string;
}