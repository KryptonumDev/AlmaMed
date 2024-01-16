export interface Props {
  title: string;
  url?: string;
  onClick?: () => void;
  type: 'primary' | 'secondary';
  arrow?: boolean;
  buttonType?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
