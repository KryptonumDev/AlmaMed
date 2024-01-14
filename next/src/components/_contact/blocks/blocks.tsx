import styles from './blocks.module.scss';
import { Props } from './blocks.constants';
import Markdown from '@/components/ui/markdown';
import Image from '@/components/ui/image';
import Link from 'next/link';

export default function Blocks({ title, text, blocks }: Props) {
  return (
    <section className={`${styles.wrapper} container`}>
      <Markdown.h2
        children={title}
        className={`${styles.title} h3`}
      />
      <Markdown.p
        children={text}
        className={styles.text}
      />
      <div className={styles.grid}>
        {blocks.map((el, index) => (
          <div
            key={index}
            className={styles.card}
          >
            {el.content.map((el, i) => {
              switch (el._type) {
                case 'paragraph':
                  return (
                    <Markdown.p
                      key={el.content + i}
                      children={el.content}
                    />
                  );
                case 'link':
                  return (
                    <div className={styles.link}>
                      <Image data={el.icon} />
                      <Link
                        key={el.href + i}
                        href={el.href}
                        className={`${styles.cardLink}`}
                      >
                        {el.content}
                      </Link>
                    </div>
                  );
                case 'list':
                  return (
                    <div className={styles.list}>
                      {el.list.map((el, i) => (
                        <p
                          className={styles.listItem}
                          key={el + i}
                        >
                          <CheckCircle />
                          <span className='h5'>{el}</span>
                        </p>
                      ))}
                    </div>
                  );
                case 'icon':
                  return <Image data={el.icon} />;
                default:
                  return null;
              }
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

const CheckCircle = () => (
  <svg
    width='34'
    height='35'
    viewBox='0 0 34 35'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M22.7093 14.6274C23.1242 14.2003 23.1242 13.5077 22.7093 13.0806C22.2944 12.6535 21.6216 12.6535 21.2067 13.0806L14.8747 19.5989L12.7926 17.4556C12.3777 17.0285 11.705 17.0285 11.29 17.4556C10.8751 17.8827 10.8751 18.5753 11.29 19.0024L14.1234 21.9191C14.5383 22.3462 15.211 22.3462 15.626 21.9191L22.7093 14.6274Z'
      fill='#03BE86'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.9997 1.82275C8.58884 1.82275 1.77051 8.84162 1.77051 17.4998C1.77051 26.1581 8.58884 33.1769 16.9997 33.1769C25.4105 33.1769 32.2288 26.1581 32.2288 17.4998C32.2288 8.84162 25.4105 1.82275 16.9997 1.82275ZM3.89551 17.4998C3.89551 10.0497 9.76244 4.01025 16.9997 4.01025C24.2369 4.01025 30.1038 10.0497 30.1038 17.4998C30.1038 24.9499 24.2369 30.9894 16.9997 30.9894C9.76244 30.9894 3.89551 24.9499 3.89551 17.4998Z'
      fill='#03BE86'
    />
  </svg>
);
