'use client';

import { ImageProps } from './hero.constants';

export default function Images({ imageOne, imageTwo }: ImageProps) {
  // chose randomly one of the images
  const image = Math.random() > 0.5 ? imageOne : imageTwo;

  return (
    <image
      clipPath='url(#cp)'
      href={image.asset.url}
      width={image.asset.metadata.dimensions.width + 'px'}
      height={image.asset.metadata.dimensions.height}
      x='55%'
      y='55%'
    />
  );
}
