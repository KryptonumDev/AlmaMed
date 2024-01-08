
import styles from './blog-slider.module.scss';
import { Props } from './blog-slider.constants';
import Markdown from '../../ui/markdown';

export default function BlogSlider({ title, text, posts }: Props) {
  return (
    <section className={styles.wrapper}>
      <Markdown.h2
        className={`h3 ${styles.title}`}
        children={title}
      />
      <Markdown.p children={text} />
      <div className={styles.grid}>
        {posts.map((el, index) => (
          <div key={index}> 
            {/* image */}
            {/* date */}
            {/* title */}
          </div>
        ))}
      </div>
    </section>
  );
}
