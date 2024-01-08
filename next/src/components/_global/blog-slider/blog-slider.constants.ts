export interface Props {
  title: string;
  text: string;
  posts: Array<{
    name: string;
    _updatedAt: string;
    slug: {
      current: string;
    };
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

export interface CardProps {
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
  slug: string;
  title: string;
  date: string;
}
