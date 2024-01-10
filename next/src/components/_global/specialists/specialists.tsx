import styles from './specialists.module.scss';
import { Props } from './specialists.constants';
import Card from '@/components/ui/specialist-card/specialists-card';


export default function Specialists({ specialists }: Props) {
  return (
    <section className={styles.wrapper}>
      {specialists.map((specialist, index) => (
        <Card
          key={specialist.name + index}
          name={specialist.name}
          image={specialist.image}
          slug={specialist.slug?.current}
          profession={specialist.profession}
        />
      ))}
    </section>
  );
}
