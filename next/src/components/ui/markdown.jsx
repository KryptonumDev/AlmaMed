import NextImage from 'next/image';
import Link from 'next/link';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { slugify } from '../../utils/slugify';

const LinkRenderer = ({ href, children }) => {
  const isExternal = href && (href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:'));
  const LinkComponent = isExternal ? 'a' : Link;
  return (
    <LinkComponent
      className='link'
      href={href}
    >
      {children}
    </LinkComponent>
  );
};

const HeadingRenderer = ({ children }) => {
  var slug = slugify(children);
  return <h2 id={slug}>{children}</h2>;
};

const Markdown = ({ level, children, components, withAnchors, ...props }) => {
  const HeadingComponent = level;
  const updatedComponents = level
    ? {
        ...components,
        p: ({ children }) => <HeadingComponent {...props}>{children}</HeadingComponent>,
      }
    : components;

  return (
    <ReactMarkdown
      components={{
        h2: HeadingRenderer,
        a: LinkRenderer,
        li: ({ children, ordered }) => (
          <li>
            <span>{children}</span>
          </li>
        ),
        ol: ({ children }) => <ol className='orderedList'>{children}</ol>,
        ul: ({ children }) => <ul className='unorderedList'>{children}</ul>,
        img: ({ src, alt }) => {
          const { w, h } = Object.fromEntries(new URL(src).searchParams.entries());
          return (
            <NextImage
              src={src}
              alt={alt}
              width={w}
              height={h}
            />
          );
        },
        ...updatedComponents,
      }}
      rehypePlugins={[rehypeRaw]}
      {...props}
    >
      {children}
    </ReactMarkdown>
  );
};

Markdown.h1 = (props) => (
  <Markdown
    level='h1'
    {...props}
  />
);
Markdown.h2 = (props) => (
  <Markdown
    level='h2'
    {...props}
  />
);
Markdown.h3 = (props) => (
  <Markdown
    level='h3'
    {...props}
  />
);
Markdown.h4 = (props) => (
  <Markdown
    level='h4'
    {...props}
  />
);
Markdown.h5 = (props) => (
  <Markdown
    level='h5'
    {...props}
  />
);
Markdown.h6 = (props) => (
  <Markdown
    level='h6'
    {...props}
  />
);
Markdown.p = (props) => <Markdown {...props} />;

export default Markdown;