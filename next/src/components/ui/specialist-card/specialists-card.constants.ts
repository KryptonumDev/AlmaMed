export interface CardProps {
  slug: string;
  profession: string;
  name: string;
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
}