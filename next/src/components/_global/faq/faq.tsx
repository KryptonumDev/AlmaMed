import styles from './faq.module.scss';
import { Props } from './faq.constants';
import Markdown from '../../ui/markdown';
import ButtonBig from '../../ui/button-big';
import List from './faq-list';

export default function Faq({ list, title, text, cta }: Props) {
  if (!list?.length) return null;

  const formattedList = list.map((item) => ({
    question: item.question,
    answer: <Markdown.p children={item.answer} />,
  }));

  return (
    <section className={`${styles.wrapper} container ${!text && !cta ? styles.fullWidth : ''}`}>
      <div className={styles.faq}>
        <Markdown.h2
          className={`${styles.title} h3`}
          children={title}
        />
        <List list={formattedList} />
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
