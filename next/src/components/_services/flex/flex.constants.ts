export interface Props {
  title: string;
  list: Array<{
    paragraph: string;
    link_to_specialist: boolean;
    title: {
      name: string;
      slug: {
        current: string;
      };
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
  }>;
}
