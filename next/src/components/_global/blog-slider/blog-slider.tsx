import styles from './blog-slider.module.scss';
import { Props } from './blog-slider.constants';
import Markdown from '../../ui/markdown';
import Card from './blog-slider-card';
import ButtonBig from '../../ui/button-big';

export default function BlogSlider({ title, text, posts }: Props) {
  if (!posts?.length) return null;
  return (
    <section className={`${styles.wrapper} container`}>
      <Markdown.h2
        className={`h3 ${styles.title}`}
        children={title}
      />
      <Markdown.p
        children={text}
        className={styles.text}
      />
      <div className={styles.grid}>
        {posts?.map((el, index) => (
          <Card
            key={el.name + index}
            image={el.thumbnail}
            title={el.name}
            slug={el.slug.current}
            date={el._updatedAt}
          />
        ))}
        <ButtonBig
          ctaLink={{ url: '/blog', title: 'Dowiedz się więcej' }}
          type={'tertiary'}
        />
      </div>
    </section>
  );
}
