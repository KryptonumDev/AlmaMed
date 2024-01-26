import styles from './price.module.scss';
import { Props } from './price.constants';
import Markdown from '@/components/ui/markdown';
import { Wallet } from '@/components/_services/tests/tests.icons';

export default function Price({ price, title }: Props) {
  return (
    <section id='pozostale-uslugi' className={`${styles.wrapper} container`}>
      <Markdown.h2
        children={title}
        className={`${styles.subTitle} ${styles.left} h3`}
      />
      <div className={styles.price}>
        {price?.map((item, i) => (
          <div
            key={item + i}
            className={`${styles.item}`}
          >
            <Wallet />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
