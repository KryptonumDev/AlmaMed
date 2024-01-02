export interface Props {
  title: string;
  text: string;
  cta: {
    text: string;
    href: string;
    theme: 'primary' | 'secondary';
  };
  metricsTitle: string;
  metricsNumber: number;
}
