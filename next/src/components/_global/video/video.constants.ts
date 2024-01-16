export interface Props {
  title: string;
  text: string;
  video: {
    asset: {
      url: string;
    };
  };
  steps: Array<string>;
}
