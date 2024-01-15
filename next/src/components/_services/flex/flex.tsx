import styles from './flex.module.scss';
import { Props } from './flex.constants';
import Markdown from '../../ui/markdown';
import Image from '../../ui/image';
import Button from '../../ui/button';

export default function Flex({ title, list }: Props) {
  return (
    <section className={`${styles.wrapper} container`}>
      <Markdown.h2
        className={`${styles.title} h3`}
        children={title}
      />
      <div className={styles.grid}>
        {list.map((el, index) => (
          <div
            className={styles.item}
            key={index}
          >
            <div className={styles.image}>
              <Image data={el.title.image} />
            </div>
            <div className={styles.content}>
              <Markdown.h3
                className={`${styles.itemTitle} h4`}
                children={el.title.name + '&nbsp;–'}
              />
              <Markdown.p
                className={`${styles.itemText}`}
                children={el.paragraph}
              />
              {el.link_to_specialist && (
                <Button
                  arrow={true}
                  url={`/specialist/${el.title.slug.current}`}
                  title={'Poznaj mnie'}
                  type='primary'
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
