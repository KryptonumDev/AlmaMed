import NextImage from 'next/image';

interface Props {
  data: any;
  className?: string;
}

const defaultPlaceholder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/v7NfwAJigPTkfv+7gAAAABJRU5ErkJggg==';

export default function Image({ data, ...props }: Props) {
  return (
    <NextImage
      src={data?.asset.url}
      alt={data?.asset.altText}
      width={data?.asset.metadata?.dimensions?.width}
      height={data?.asset.metadata?.dimensions?.height}
      blurDataURL={data?.asset.metadata?.lqip || defaultPlaceholder}
      placeholder={
        data?.asset.metadata?.dimensions?.width < 40 && data?.asset.metadata?.dimensions?.height < 40
          ? undefined
          : 'blur'
      }
      {...props}
    />
  );
}
