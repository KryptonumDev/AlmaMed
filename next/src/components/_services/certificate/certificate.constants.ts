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
          width: number;
          height: number;
        };
      };
    };
  };
}
