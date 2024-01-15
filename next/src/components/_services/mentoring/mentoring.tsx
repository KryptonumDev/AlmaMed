import styles from './mentoring.module.scss';
import { Props } from './mentoring.constants';
import Markdown from '../../ui/markdown';
import Image from '../../ui/image';

export default function Mentoring({ title, text, list, oversized = false }: Props) {
  return (
    <section className={`${styles.wrapper} container`}>
      <Markdown.h2
        className={`h3 ${styles.title}`}
        children={title}
      />
      <Markdown.p
        className={styles.text}
        children={text}
      />
      <div className={`${styles.grid} ${oversized ? styles.oversized : ''}`}>
        {list.map((el) => (
          <div
            key={el.text}
            className={styles.item}
          >
            <Image data={el.image} />
            <Markdown.p children={el.text} />
          </div>
        ))}
      </div>
    </section>
  );
}
