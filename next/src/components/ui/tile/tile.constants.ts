export interface Props {
  title: string;
  color: 'blue' | 'green' | 'yellow';
  className?: string;
  havePage: boolean;
  slug?: {
    current?: string;
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
