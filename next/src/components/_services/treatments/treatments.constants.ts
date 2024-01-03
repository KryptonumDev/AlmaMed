export interface Props {
  title: string;
  text: string;
  list: Array<{
    title: string;
    paragraph: string;
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
    sub_title: string;
    price: Array<string>;
    benefits: Array<string>;
    list: Array<string>;
  }>;
}

export interface PartProps {
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
