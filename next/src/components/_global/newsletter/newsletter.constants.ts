export interface Props {
  content?: string;
  title: string;
  text: string;
  id: string;
  link?: {
    href: string;
    text: string;
    theme: 'primary' | 'secondary';
  };
  icon?: {
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
  post?: {
    _updatedAt: string;
    name: string;
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
  };
}

export type Inputs = {
  email: string;
  name: string;
  agreement: boolean;
};

export const regex = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phone: /^(?:\+(?:\d{1,3}))?(?:[ -]?\(?\d{1,4}\)?[ -]?\d{1,5}[ -]?\d{1,5}[ -]?\d{1,6})$/,
}