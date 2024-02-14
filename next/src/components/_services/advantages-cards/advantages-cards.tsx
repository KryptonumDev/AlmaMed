import styles from './advantages-cards.module.scss';
import { Props } from './advantages-cards.constants';
import Markdown from '@/components/ui/markdown';
import Image from '@/components/ui/image';
import Button from '@/components/ui/button';

export default function AdvantagesCards({ title, advantages }: Props) {
  return (
    <section className={`${styles.wrapper} container`}>
      <Markdown.h2 className='h3'>{title}</Markdown.h2>
      <div className={styles.grid}>
        {advantages.map((el, index) => (
          <div
            key={index}
            className={styles.item}
          >
            <Image data={el.icon} />
            <p>{el.title}</p>
            {el.link && (
              <Button
                type='secondary'
                url={el.link}
                title='Dowiedz się więcej'
                arrow={true}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
