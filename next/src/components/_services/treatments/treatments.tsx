import styles from './treatments.module.scss';
import { Props } from './treatments.constants';
import Markdown from '../../ui/markdown';

export default function Treatments({ title, text, list, annotation }: Props) {
  return (
    <>
      <section className={`${styles.wrapper} container`}>
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
            <p
              key={item + i}
              className={styles.item}
            >
              {item}
            </p>
          ))}
        </div>
        <Markdown.p
          children={annotation}
          className={`${styles.annotation}`}
        />
      </section>
    </>
  );
}
