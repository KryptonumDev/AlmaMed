import styles from './article.module.scss';
import Link from 'next/link';
import { PortableText, toPlainText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import { slugify } from '../../../utils/slugify';
import Image from '@/components/ui/image';
import ImageColumn from './image-column';
import Links from './links';

export const ImageRenderer = ({
  value: {
    asset: { _ref },
    altText,
  },
  sizes,
}) => {
  const builder = imageUrlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-11-21',
  });
  const data = {
    asset: {
      altText: altText || '',
      url: builder.image(_ref).url(),
      metadata: {
        dimensions: getImageDimensions(_ref),
      },
    },
  };
  return (
    <Image
      data={data}
      {...(sizes && { sizes })}
    />
  );
};

const components = {
  types: {
    image: (data) => (
      <ImageRenderer
        {...data}
        sizes='(max-width: 1099px) 66vw, 100vw'
      />
    ),
    ImageColumn: ({ value: { list } }) => <ImageColumn list={list} />,
    Cta: ({ value: { links } }) => <Links links={links} />,
  },
  block: {
    h2: ({ children, value }) => (
      <h2
        className='h5'
        id={slugify(toPlainText(value))}
      >
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3
        className='h6'
        id={slugify(toPlainText(value))}
      >
        {children}
      </h3>
    ),
    blockquote: ({ children }) => <blockquote><p>{children}</p></blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className='unorderedList'>{children}</ul>,
    number: ({ children }) => <ol className='orderedList'>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li>
        <ListBullet />
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    link: ({ value: { href }, children }) => {
      const isExternal = href && (href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:'));
      const Element = isExternal ? 'a' : Link;
      return (
        <Element
          href={href}
          className='link'
          {...(isExternal && { target: '_blank', rel: 'noopener' })}
        >
          {children}
        </Element>
      );
    },
  },
};

const PortableTextComponent = ({ data }) => {
  return (
    <div className={styles.portableText}>
      <PortableText
        value={data}
        components={components}
      />
    </div>
  );
};

export default PortableTextComponent;

const ListBullet = () => (
  <svg
    width='33'
    height='33'
    viewBox='0 0 33 33'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M23.5013 10.254C23.5013 9.70168 23.0536 9.25397 22.5013 9.25397C21.949 9.25397 21.5013 9.70168 21.5013 10.254V11.9207H19.8346C19.2824 11.9207 18.8346 12.3684 18.8346 12.9207C18.8346 13.4729 19.2824 13.9207 19.8346 13.9207L21.5013 13.9207V15.5873C21.5013 16.1396 21.949 16.5873 22.5013 16.5873C23.0536 16.5873 23.5013 16.1396 23.5013 15.5873V13.9207H25.168C25.7203 13.9207 26.168 13.4729 26.168 12.9207C26.168 12.3684 25.7203 11.9207 25.168 11.9207H23.5013V10.254Z'
      fill='#0376BE'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M30.8346 13.3439C30.8346 8.91007 28.8581 5.60019 25.7825 4.39589C22.9349 3.28088 19.5171 4.11512 16.5013 6.9382C13.4855 4.11512 10.0677 3.28088 7.2201 4.3959C4.14452 5.6002 2.16797 8.91009 2.16797 13.344C2.16797 16.1678 3.67518 18.9468 5.55102 21.3392C7.44615 23.7563 9.83025 25.9205 11.8202 27.5353L11.999 27.6806C13.5998 28.9815 14.7554 29.9206 16.5013 29.9206C18.2472 29.9206 19.4028 28.9815 21.0036 27.6806L21.1825 27.5353C23.1724 25.9206 25.5565 23.7563 27.4516 21.3393C29.3274 18.9468 30.8346 16.1678 30.8346 13.3439ZM17.2317 9.03577C20.0475 6.02434 22.9667 5.4412 25.0533 6.25821C27.1444 7.07703 28.8346 9.47113 28.8346 13.3439C28.8346 15.4925 27.6622 17.8292 25.8777 20.1052C24.1124 22.3566 21.8554 24.4136 19.9222 25.9823C18.0655 27.4891 17.4651 27.9206 16.5013 27.9206C15.5375 27.9206 14.9371 27.489 13.0804 25.9823C11.1472 24.4136 8.89018 22.3566 7.12492 20.1052C5.34038 17.8292 4.16797 15.4925 4.16797 13.344C4.16797 9.47115 5.85819 7.07704 7.94933 6.25822C10.0359 5.4412 12.9552 6.02434 15.7709 9.03577C15.96 9.238 16.2244 9.35279 16.5013 9.35279C16.7782 9.35279 17.0427 9.238 17.2317 9.03577Z'
      fill='#0376BE'
    />
  </svg>
);
