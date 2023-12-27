export interface Props {
  title: string;
  text: string;
  icons: Array<{
    icon: string;
    text: string;
  }>;
  links: Array<{
    text: string;
    href: string;
  }>;
}
