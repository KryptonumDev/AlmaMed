export interface Props {
  title: string;
  text: string;
  blocks: Array<{
    content: Array<{
      _type: 'list' | 'paragraph' | 'link' | 'icon';
      content: string;
      href: string;
      list: Array<string>;
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
  }>;
}