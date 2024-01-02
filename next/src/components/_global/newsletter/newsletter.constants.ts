export interface Props {
  content: string;
  title: string;
  text: string;
  link: {
    href: string;
    text: string;
    theme: 'primary' | 'secondary';
  };
  icon: {
    asset: {
      url: string;
      altText: string;
      metadata: {
        lqip: string;
        dimensions: {
          aspectRatio: number;
          height: number;
          width: number;
        };
      };
    };
  };
}

export type Inputs = {
  email: string;
  agreement: boolean;
}