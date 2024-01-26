export interface Props {
  title: string;
  text: string;
  altColors?: boolean;
  tiles: Array<{
    name: string;
    color: 'yellow' | 'blue' | 'green';
    have_page: boolean;
    link_to_description: string;
    slug?: {
      current?: string;
    };
    icon: {
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
