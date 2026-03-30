import Markdown from '@/components/ui/markdown';
import styles from './groups.module.scss';

interface CooperationGroupItem {
  heading: string;
  content: string;
  img?: {
    asset?: {
      url?: string;
    };
  };
}

interface Props {
  groups?: CooperationGroupItem[];
}

export default function Groups({ groups = [] }: Props) {
  if (!groups.length) return null;

  return (
    <section className={styles.wrapper}>
      <div className='container'>
        <div className={styles.list}>
          {groups.map((group, index) => (
            <article
              key={`${group.heading}-${index}`}
              className={styles.item}
              data-tone={(index % 4) + 1}
            >
              <div className={styles.watermark}>{String(index + 1).padStart(2, '0')}</div>
              <div className={styles.content}>
                {group.img?.asset?.url && (
                  <div className={styles.icon}>
                    <img src={group.img.asset.url} alt='' aria-hidden='true' />
                  </div>
                )}
                <Markdown.h3 className='h4'>{group.heading}</Markdown.h3>
                <Markdown.p className={styles.text}>{group.content}</Markdown.p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
