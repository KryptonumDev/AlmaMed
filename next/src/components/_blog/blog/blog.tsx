import styles from './blog.module.scss';
import { Props } from './blog.constants';
import Button from '../../ui/button';
import Card from './blog-card';

export default function Blog({ posts, categories }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.categories}>
        <h1>Blog</h1>
        <p className='h4'>Kategorie</p>
        <ul>
          {categories.map((el, index) => (
            <li key={index}>
              <Button
                type='secondary'
                url={`/blog/kategoria/${el.slug.current}`}
                title={el.name}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.grid}>
        {posts.map((el, index) => (
          <Card
            key={index + el.name}
            image={el.thumbnail}
            title={el.name}
            date={el._updatedAt}
            brief={el.brief}
            categories={el.categories}
            slug={el.slug.current}
          />
        ))}
      </div>
    </section>
  );
}
