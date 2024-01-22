import styles from './comments.module.scss';
import { Props } from './comments.constants';
import Markdown from '../../ui/markdown';
import Card from './comments-card';

export default function Comments({ title, text, comments }: Props) {
  return (
    <section className={`${styles.wrap}`}>
      <Blob />
      <div className={`${styles.wrapper} container`}>
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
              long={`comment-${index + 1}`}
              text={comment.text}
              name={comment.name}
              rating={comment.rating}
              key={comment.name + index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const Blob = () => (
  <svg
    width='1348'
    height='1153'
    viewBox='0 0 1348 1153'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M796.236 4.54771C936.297 -12.1094 1088.64 15.2572 1187.86 115.499C1286.75 215.404 1276.77 367.561 1293.7 507.107C1314.55 679.014 1403.37 870.979 1295.98 1006.83C1185.04 1147.17 970.523 1176.77 796.236 1136.41C646.001 1101.62 605.405 914.526 484.422 818.907C327.805 695.124 -1.10449 706.726 0.00278874 507.107C1.11208 307.125 318.74 305.493 487.862 198.748C594.652 131.345 670.835 19.4612 796.236 4.54771Z'
      fill='#EFEFEF'
    />
  </svg>
);
