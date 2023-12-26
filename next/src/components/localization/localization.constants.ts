export interface Props {
  title: string;
  cards: Array<{
    title: string;
    address: string;
    phone: string;
    email: string;
  }>;
  ctaTitle: string;
  ctaLink: object;
}