import Markdown from '@/components/ui/markdown';
import styles from './intro.module.scss';

interface Props {
  title?: string;
  text?: string;
}

export default function Intro({ title, text }: Props) {
  if (!title && !text) return null;

  return (
    <section className={`${styles.wrapper} container`}>
      {title && (
        <Markdown.h2 className='h3'>
          {title}
        </Markdown.h2>
      )}
      {text && (
        <Markdown.p className={styles.text}>
          {text}
        </Markdown.p>
      )}
    </section>
  );
}
