export interface Props {
  title: string;
  text: string;
  list: Array<{
    title: string;
    steps: Array<{
      text: string;
      image: {
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
    }>;
  }>;
}
