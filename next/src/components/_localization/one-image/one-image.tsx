import styles from './one-image.module.scss';
import { Props } from './one-image.constants';
import Markdown from '@/components/ui/markdown';
import Image from '@/components/ui/image';

export default function OneImage({ title, text, image }: Props) {
  return (
    <section className={`${styles.wrapper} container`}>
      <Markdown.h2
        children={title}
        className={`${styles.title} h3`}
      />
      <Markdown.p
        children={text}
        className={`${styles.text}`}
      />
      <Image data={image}/>
    </section>
  );
}
