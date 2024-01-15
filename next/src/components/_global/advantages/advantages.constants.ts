export interface Props {
  title: string;
  text: string;
  small?: boolean;
  advantages: Array<{
    title: string;
    text: string;
  }>;
}