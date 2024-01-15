import styles from './tests.module.scss';
import { Props } from './tests.constants';
import Markdown from '../../ui/markdown';
import Image from '../../ui/image';
import { Wallet } from './tests.icons';

export default function Tests({ title, text, image, benefits, subTitle, price, list }: Props) {
  return (
    <section className={`${styles.part} container`}>
      <Markdown.h2
        children={title}
        className={`h3 ${styles.title}`}
      />
      <Markdown.p
        children={text}
        className={`${styles.text}`}
      />
      <div className={styles.benefits}>
        {benefits.map((item, i) => (
          <Markdown.p
            key={item + i}
            children={item}
            className={`${styles.benefit}`}
          />
        ))}
      </div>
      <Image data={image} />
      {subTitle && (
        <Markdown.h3
          children={subTitle}
          className={`${styles.subTitle} h4`}
        />
      )}
      <div className={styles.list}>
        {list?.map((item, i) => (
          <div
            className={styles.item}
            key={item + i}
          >
            <span className='h5'>
              {i < 9 ? '0' : ''}
              {i + 1}
            </span>
            <p className='h5'>{item}</p>
          </div>
        ))}
      </div>
      <Markdown.h3
        children={'Cennik'}
        className={`${styles.subTitle} ${styles.left} h4`}
      />
      <div className={styles.price}>
        {price.map((item, i) => (
          <div
            key={item + i}
            className={`${styles.item}`}
          >
            <Wallet />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
