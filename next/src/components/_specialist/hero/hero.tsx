import styles from './hero.module.scss';
import { Props } from './hero.constants';
import Markdown from '@/components/ui/markdown';
import Image from '@/components/ui/image';

export default function Hero({ name, profession, image, education }: Props) {
  return (
    <section className={`${styles.wrapper} container`}>
      <div>
        <Markdown.h1
          className={`h3 ${styles.title}`}
          children={name + ' **–**'}
        />
        <Markdown.p
          className='h4'
          children={profession}
        />
        <Image
          className={styles.image}
          data={image}
        />
      </div>
      <div className={styles.list}>
        {education.map((item, index) => (
          <div
            className={styles.item}
            key={index}
          >
            <Image data={item.icon} />
            <Markdown.p children={item.text} />
          </div>
        ))}
      </div>
    </section>
  );
}
