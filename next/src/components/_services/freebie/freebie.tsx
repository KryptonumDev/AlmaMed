import styles from './freebie.module.scss';
import { Props } from './freebie.constants';
import Image from '../../ui/image';
import Markdown from '../../ui/markdown';
import Form from '../../_global/newsletter/newsletter-form';

export default function Freebie({ title, text, image, id }: Props) {
  return (
    <section className={`${styles.wrapper} container`}>
      <div>
        <Markdown.h2
          className={`${styles.title} h3`}
          children={title}
        />
        <Markdown.p
          className={styles.text}
          children={text}
        />
        <Form id={id}/>
      </div>
      <Image data={image} />
    </section>
  );
}
