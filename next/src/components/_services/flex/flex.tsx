
import styles from './flex.module.scss';
import { Props } from './flex.constants';
import Image from '../../ui/image';
import Markdown from '../../ui/markdown';
import Button from '../../ui/button';

export default function Flex({ title, image, list, links }: Props) {
  return (
    <section className={styles.wrapper}>
      <div>
        <Markdown.h2
          className={`${styles.title} h3`}
          children={title}
        />
        <div className={styles.list}>
          {list.map((el, i) => (
            <div className={styles.item} key={el.text + i}>
              <Image data={el.icon} />
              <p>{el.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.links}>
          {links.map((el) => (
            <Button
              arrow={true}
              key={el.text}
              url={el.href}
              type={el.theme}
              title={el.text}
            />
          ))}
        </div>
      </div>
      <div className={styles.image}>
        <Image data={image} />
      </div>
    </section>
  );
}
