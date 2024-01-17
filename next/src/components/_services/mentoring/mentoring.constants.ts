export interface Props {
  title: string;
  text: string;
  oversized?: boolean;
  cta: {
    href: string;
    text: string;
    theme: 'primary' | 'secondary';
  }
  list: Array<{
    text: string;
    image: {
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
  }>;
}
