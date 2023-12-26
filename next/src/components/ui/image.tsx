import React from "react"
import NextImage from "next/image"

interface Props {
  data?: any;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const defaultPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/v7NfwAJigPTkfv+7gAAAABJRU5ErkJggg==";

export default function Image({
  data,
  src,
  alt = '',
  width,
  height,
  ...props
}: Props) {
  return (
    <NextImage
      src={data?.asset.url || src}
      alt={data?.asset.altText || alt}
      width={data?.asset.metadata?.dimensions?.width || data?.asset.metadata?.width || width}
      height={data?.asset.metadata?.dimensions?.height || data?.asset.metadata?.height || height}
      blurDataURL={data?.asset.metadata?.lqip || defaultPlaceholder}
      placeholder="blur"
      {...props}
    />
  )
}