export interface Props {
  title: string;
  text?: string;
  comments: Array<{
    text: string;
    name: string;
    rating: number;
  }>;
}

export interface CardProps {
  text: string;
  name: string;
  rating: number;
  long: string;
}
