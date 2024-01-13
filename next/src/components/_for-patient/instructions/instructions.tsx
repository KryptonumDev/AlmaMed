import styles from './instructions.module.scss';
import { Props } from './instructions.constants';
import Markdown from '@/components/ui/markdown';
import Grid from './instructions-grid';

export default function Instructions({ title, text, list }: Props) {
  return (
    <section className={styles.wrapper}>
      <Markdown.h2
        className={`h3 ${styles.title}`}
        children={title}
      />
      <Markdown.p
        className={styles.text}
        children={text}
      />
      <p className={`${styles.subText} h5`}>
        Wybierz opcję poniżej, a przeprowadzimy Cię przez cały proces rejestracji!
      </p>
      <Grid list={list}/>
    </section>
  );
}
