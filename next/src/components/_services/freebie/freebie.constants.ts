export interface Props {
  title: string;
  text: string;
  id: string;
  image: {
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
  };
}
