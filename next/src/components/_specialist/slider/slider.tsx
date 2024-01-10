import styles from './slider.module.scss';
import { Props } from './slider.constants';
import Markdown from '@/components/ui/markdown';
import Card from '@/components/ui/specialist-card/specialists-card';

export default function Slider({ title, specialists }: Props) {
  return (
    <section className={styles.wrapper}>
      <Markdown.h2
        className={`${styles.title} h3`}
        children={title}
      />
      <div className={styles.grid}>
        {specialists.map((specialist, index) => (
          <Card
            key={specialist.name + index}
            name={specialist.name}
            image={specialist.image}
            slug={specialist.slug?.current}
            profession={specialist.profession}
          />
        ))}
        {specialists.map((specialist, index) => (
          <Card
            key={specialist.name + index}
            name={specialist.name}
            image={specialist.image}
            slug={specialist.slug?.current}
            profession={specialist.profession}
          />
        ))}
        {specialists.map((specialist, index) => (
          <Card
            key={specialist.name + index}
            name={specialist.name}
            image={specialist.image}
            slug={specialist.slug?.current}
            profession={specialist.profession}
          />
        ))}
      </div>
    </section>
  );
}
