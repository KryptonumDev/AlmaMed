import styles from './comments.module.scss';
import { Props } from './comments.constants';
import Markdown from '../../ui/markdown';
import Card from './comments-card';

export default function Comments({ title, text, comments }: Props) {
  return (
    <section className={`${styles.wrapper} container`}>
      <Markdown.h2
        className={`${styles.title} h3`}
        children={title}
      />
      {text && (
        <Markdown.p
          className={styles.text}
          children={text}
        />
      )}
      <div className={styles.grid}>
        {comments.map((comment, index) => (
          <Card
            long={`comment-${index+1}`}
            text={comment.text}
            name={comment.name}
            rating={comment.rating}
            key={comment.name + index}
          />
        ))}
      </div>
    </section>
  );
}
