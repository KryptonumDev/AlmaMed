export interface Props {
  categories: Array<{
    name: string;
    slug: {
      current: string;
    };
  }>;
  services: Array<{
    name: string;
    slug: {
      current: string;
    };
  }>;
  posts: Array<{
    name: string;
    slug: {
      current: string;
    };
  }>;
  specialists: Array<{
    name: string;
    slug: {
      current: string;
    };
  }>;
}
