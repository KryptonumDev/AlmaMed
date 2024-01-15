import styles from './article.module.scss';
import { Props } from './article.constants';
import Image from '@/components/ui/image';
import Link from 'next/link';
import { slugify } from '../../../utils/slugify';
import Markdown from '@/components/ui/markdown';
import PortableTextComponent from './portable-text';

export default function Article({ brief, name, content, thumbnail }: Props) {
  const titles = content
    .filter((item: any) => item._type === 'block' && item.style === 'h2')
    .map((el: any) => el.children[0].text);

  return (
    <section className={`${styles.wrapper} container`}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image data={thumbnail} />
        </div>
        <Markdown.h1
          className='h3'
          children={name}
        />
        <p>{brief}</p>
        <PortableTextComponent data={content} />
      </div>
      <div className={styles.quickLinks}>
        <div className={styles.quickLinksHeading}>
          <p className='p'>Spis treści:</p>
        </div>
        <div className={styles.quickLinksList}>
          {titles?.map((title: string, index: number) => (
            <Link
              key={title + index}
              href={`#${slugify(title)}`}
              className={`p`}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
