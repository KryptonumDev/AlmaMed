export interface Props {
  title: string;
  specialists: Array<{
    name: string;
    slug: {
      current: string;
    };
    profession: string;
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
