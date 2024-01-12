export interface Props {
  title: string;
  text: string;
  cards: Array<{
    title: string;
    isClosed: boolean;
    content: Array<{
      _type: 'list' | 'paragraph' | 'link';
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
