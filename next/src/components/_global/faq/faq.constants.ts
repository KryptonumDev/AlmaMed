export interface Props {
  title: string;
  text: string;
  cta: {
    text: string;
    href: string;
  };
  list: Array<{
    question: string;
    answer: string;
  }>;
}

export interface FaqProps {
  list: Array<{
    question: string;
    answer: string;
  }>;
}
