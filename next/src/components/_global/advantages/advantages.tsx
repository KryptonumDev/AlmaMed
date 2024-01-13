
import styles from './advantages.module.scss';
import { Props } from './advantages.constants';
import { Certificate } from './advantages.icons';
import Markdown from '../../ui/markdown';

export default function Advantages({ title, text, advantages }: Props) {
  return (
    <section className={`${styles.wrapper} container`}>
      <div className={styles.flex}>
        <div className={styles.text}>
          <Markdown.h2
            className='h3'
            children={title}
          />
          <Markdown.p children={text} />
        </div>
        <div className={styles.certificate}>
          <Certificate />
          <p>
            Posiadamy <strong>Certyfikat Jakości Ministra Zdrowia</strong>
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        {advantages?.map((advantage) => (
          <div
            className={styles.item}
            key={advantage.title}
          >
            <h3 className='h5'>{advantage.title}</h3>
            <Markdown.p children={advantage.text} />
          </div>
        ))}
      </div>
    </section>
  );
}
