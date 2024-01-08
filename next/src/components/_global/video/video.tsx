
import styles from './video.module.scss';
import { Props } from './video.constants';
import Markdown from '../../ui/markdown';

export default function Video({ title, text, video, steps }: Props) {
  return (
    <section className={styles.wrapper}>
      <Markdown.h2
        className={`${styles.title} h3`}
        children={title}
      />
      <Markdown.p className={styles.text} children={text} />
      <div className={styles.grid}>
        <iframe
          className={styles.video}
          src={video}
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
        <div className={styles.list}>
          {steps.map((el) => (
            <Markdown.p
              key={el}
              className={`${styles.step} p`}
              children={el}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
