export interface Props {
  title: string;
  text: string;
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
  subTitle: string;
  price: Array<string>;
  benefits: Array<string>;
  list: Array<string>;
}
