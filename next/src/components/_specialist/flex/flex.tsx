import styles from './flex.module.scss';
import { Props } from './flex.constants';
import Image from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';

export default function Flex({ content, image, reverse }: Props) {
  return (
    <section className={`${styles.wrapper} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.content}>
        <Markdown.p children={content} />
      </div>
      <div className={styles.image}>
        <Image data={image} />
      </div>
    </section>
  );
}
