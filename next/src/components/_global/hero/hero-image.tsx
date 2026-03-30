import { ImageProps } from './hero.constants';

const CUTOUT_EXTENSIONS = ['.png', '.webp', '.svg'];

export const pickHeroImage = (
  imageOne: ImageProps['imageOne'],
  imageTwo?: ImageProps['imageTwo'],
) => {
  if (!imageOne?.asset?.url) return null;

  return Math.random() > 0.5 ? imageOne : imageTwo ?? imageOne;
};

export const getHeroImageMode = (
  image: ImageProps['imageOne'] | ImageProps['imageTwo'] | null,
) => {
  const url = image?.asset?.url?.toLowerCase().split('?')[0] ?? '';
  const hasAlpha = image?.asset?.metadata?.hasAlpha;
  const isOpaque = image?.asset?.metadata?.isOpaque;
  const isCutoutFormat = CUTOUT_EXTENSIONS.some((extension) => url.endsWith(extension));

  if (hasAlpha === false || isOpaque === true) return 'photo';
  if (hasAlpha === true || isOpaque === false) return 'cutout';

  return isCutoutFormat ? 'cutout' : 'photo';
};

export default function Images({ imageOne }: Pick<ImageProps, 'imageOne'>) {
  if (!imageOne?.asset?.url) return null;

  return (
    <image
      clipPath='url(#cp)'
      href={imageOne.asset.url}
      width={imageOne.asset.metadata.dimensions.width + 'px'}
      height={imageOne.asset.metadata.dimensions.height}
      x='55%'
      y='55%'
    />
  );
}
