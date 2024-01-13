import styles from './two-image.module.scss';
import { Props } from './two-image.constants';
import Markdown from '@/components/ui/markdown';
import Image from '@/components/ui/image';

export default function OneImage({ title, text, firstImage, secondImage }: Props) {
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
      <div className={styles.grid}>
        <Image data={firstImage} />
        <Image data={secondImage} />
      </div>
    </section>
  );
}
