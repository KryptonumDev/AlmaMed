import styles from './faq.module.scss';
import { Props } from './faq.constants';
import Markdown from '../../ui/markdown';
import ButtonBig from '../../ui/button-big';
import List from './faq-list';

export default function Faq({ list, title, text, cta }: Props) {
  return (
    <section className={`${styles.wrapper} ${!text && !cta ? styles.fullWidth : ''}`}>
      <div className={styles.faq}>
        <Markdown.h2
          className={`${styles.title} h3`}
          children={title}
        />
        <List list={list} />
      </div>
      {text && cta && (
        <div className={styles.column}>
          <Markdown.p
            className={`${styles.text} h5`}
            children={text}
          />
          <ButtonBig
            ctaLink={{
              url: cta.href,
              title: cta.text,
            }}
            type='primary'
          />
        </div>
      )}
    </section>
  );
}
