export interface Props {
  title: string;
  text: string;
  list: Array<{
    title: string;
    steps: Array<{
      title: string;
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

export interface GridProps {
  list: Array<{
    title: string;
    steps: Array<{
      text: string;
      title: string;
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
