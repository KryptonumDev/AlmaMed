
import styles from './treatments.module.scss';
import { Props } from './treatments.constants';
import Markdown from '../../ui/markdown';
import { removeMarkdownTags } from '@/components/utils/remove-markdown';
import { TreatmentPart } from './treatments-part';
import { slugify } from '@/components/utils/slugify';

export default function Treatments({ title, text, list }: Props) {
  return (
    <>
      <section className={styles.wrapper}>
        <Markdown.h2
          children={title}
          className={`${styles.title} h3`}
        />
        <Markdown.p
          children={text}
          className={`${styles.text}`}
        />
        <div className={styles.grid}>
          {list.map((item, i) => (
            <a
              key={item.title + i}
              className={styles.item}
              href={`#${slugify(item.title)}`}
            >
              {removeMarkdownTags(item.title)}
            </a>
          ))}
        </div>
      </section>
      {list.map((item, i) => (
        <TreatmentPart
          key={item.title + i}
          title={item.title}
          text={item.paragraph}
          image={item.image}
          subTitle={item.sub_title}
          price={item.price}
          benefits={item.benefits}
          list={item.list}
        />
      ))}
    </>
  );
}
