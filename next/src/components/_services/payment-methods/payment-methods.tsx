
import styles from './payment-methods.module.scss';
import { Props } from './payment-methods.constants';
import Markdown from '../../ui/markdown';
import Image from '../../ui/image';

export default function PaymentMethods({ title, text, image }: Props) {
  return (
    <section className={`${styles.wrapper} container`}>
      <div>
        <Markdown.h2
          className={`h3 ${styles.title}`}
          children={title}
        />
        <Markdown.p
          className={`${styles.text}`}
          children={text}
        />
      </div>
      <Image data={image}/>
    </section>
  );
}
