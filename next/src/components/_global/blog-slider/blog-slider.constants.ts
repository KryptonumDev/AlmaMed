export interface Props {
  title: string;
  text: string;
  posts: Array<{
    name: string;
    brief: string;
    slug: {
      current: string;
    };
    categories: Array<{
      name: string;
      slug: {
        current: string;
      };
    }>;
    thumbnail: {
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
