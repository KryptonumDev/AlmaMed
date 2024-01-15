import styles from './article.module.scss';
import { ImageRenderer } from './portable-text';
export default function ImageColumn({ list }: { list: any[] }) {
  return (
    <div className={styles.imageColumns}>
      {list.map((item: any, index: number) => (
        <ImageRenderer
          key={index}
          value={item}
          sizes='(max-width: 1099px) 66vw, 100vw'
        />
      ))}
    </div>
  );
}
