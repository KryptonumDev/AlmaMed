export interface Props {
  page: number;
  total: number;
  urlBasis: string;
  posts: Array<{
    _updatedAt: string;
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
  categories: Array<{
    name: string;
    slug: {
      current: string;
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
  brief: string;
  categories: Array<{
    name: string;
    slug: {
      current: string;
    };
  }>;
}


export interface PaginationProps {
  currentPage: number;
  itemCount: number;
  urlBasis: string;
}