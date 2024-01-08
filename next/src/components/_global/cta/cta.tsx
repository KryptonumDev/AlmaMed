
import styles from './cta.module.scss';
import { Props } from './cta.constants';
import ButtonBig from '../../ui/button-big';
import Markdown from '../../ui/markdown';

export default function Cta({ title, text, link }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Markdown.h2
          className='h3'
          children={title}
        />
        <Markdown.p children={text} />
      </div>
      <ButtonBig
        ctaLink={{
          url: link.href,
          title: link.text,
        }}
        type='primary'
      />
    </section>
  );
}
