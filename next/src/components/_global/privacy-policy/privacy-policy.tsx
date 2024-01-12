import styles from './privacy-policy.module.scss';
import { Props } from './privacy-policy.constants';
import Markdown from '../../ui/markdown';
import Link from 'next/link';
import { slugify } from '../../../utils/slugify';

export default function PrivacyPolicy({ title, text }: Props) {
  const titles = getTitles(text);

  return (
    <section className={styles.wrapper}>
      <Markdown.h1
        children={title}
        className={styles.heading}
      />
      <div className={styles.content}>
        <div className={styles.text}>
          <Markdown.p
            withAnchors={true}
            children={text}
          />
        </div>
        <div className={styles.quickLinks}>
          <div className={styles.quickLinksHeading}>
            <p className='p'>Spis treści:</p>
          </div>
          <div className={styles.quickLinksList}>
            {titles?.map((title, index) => (
              <Link
                key={title.text + index}
                href={`#${slugify(title.text)}`}
                className={`p`}
              >
                {title.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// get all titles from markdown string as array
const getTitles = (text: string) => {
  const titles = text.match(/(#+\s)(.*)/g);
  return titles?.map((title) => {
    const level = title.match(/#+/g)?.[0].length;
    const text = title.replace(/#+\s/g, '');
    return { level, text };
  });
};
