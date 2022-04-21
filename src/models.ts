export interface IReview {
  name: string;
  comment: string;
  time: string;
};

export interface ICamp {
  img: string;
  title: string;
  desc: string;
  subBy?: string;
  reviews?: IReview[];
  cost?: string;
}

export interface Status {
  user: string,
  login: boolean
} 
