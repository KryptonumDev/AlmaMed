export interface Props {
  title: string;
  url?: string;
  onClick?: () => void;
  type: 'primary' | 'secondary';
}