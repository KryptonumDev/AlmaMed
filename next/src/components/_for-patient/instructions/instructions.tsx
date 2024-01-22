import styles from './instructions.module.scss';
import { Props } from './instructions.constants';
import Markdown from '@/components/ui/markdown';
import Grid from './instructions-grid';

export default function Instructions({ title, text, list }: Props) {
  const formattedList = list.map((el) => ({
    title: el.title,
    steps: el.steps.map((step) => {
      return {
        title: step.title,
        text: <Markdown.p children={step.text} />,
        image: step.image,
      };
    }),
  }));

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
      <p className={`${styles.subText} h5`}>
        Wybierz opcję poniżej, a przeprowadzimy Cię przez cały proces rejestracji!
      </p>
      <Grid list={formattedList} />
    </section>
  );
}
