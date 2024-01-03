export interface Props {
  title: string;
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
  list: Array<{
    text: string;
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
  }>;
  links: Array<{
    text: string;
    href: string;
    theme: 'primary' | 'secondary';
  }>;
}
