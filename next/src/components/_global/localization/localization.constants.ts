export interface Props {
  title: string;
  cards: Array<{
    name: string;
    address: string;
    phone: string;
    email: string;
    map: string;
  }>;
  ctaTitle?: string;
  ctaLink?: {
    href: string;
    text: string;
  };
}