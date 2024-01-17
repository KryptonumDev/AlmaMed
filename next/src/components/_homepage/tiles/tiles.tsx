import styles from './tiles.module.scss';
import { Props } from './tiles.constants';
import Markdown from '../../ui/markdown';
import Tile from '../../ui/tile';
import ButtonBig from '../../ui/button-big';

export default function Tiles({ title, text, tiles }: Props) {
  return (
    <section className={`${styles.wrapper} container`}>
      <Markdown.h2
        className={`${styles.title} h3`}
        children={title}
      />
      <Markdown.p
        className={`${styles.text}`}
        children={text}
      />

      <div className={styles.grid}>
        {tiles?.map((tile, i) => (
          <Tile
            key={tile.name + i}
            className={styles.item}
            title={tile.name}
            color={(() => {
              switch (i) {
                case 0:
                case 6:
                case 7:
                  return 'blue';
                case 1:
                case 3:
                  return 'green';
                default:
                  return 'yellow';
              }
            })()}
            icon={tile.icon}
            havePage={tile.have_page}
            slug={tile.slug}
          />
        ))}
        <ButtonBig
          ctaLink={{ url: '/uslugi', title: 'Dowiedz się więcej ' }}
          type={'primary'}
        />
      </div>
    </section>
  );
}
