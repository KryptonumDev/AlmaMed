export interface Props {
  title: string;
  text: string;
  tiles: Array<{
    name: string;
    color: 'yellow' | 'blue' | 'green';
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
