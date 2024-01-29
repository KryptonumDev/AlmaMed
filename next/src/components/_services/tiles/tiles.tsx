import styles from './tiles.module.scss';
import { Props } from './tiles.constants';
import Markdown from '../../ui/markdown';
import Tile from '../../ui/tile';

export default function Tiles({ title, text, tiles, altColors = false }: Props) {
  console.log(tiles);
  return (
    <section className={`${styles.wrapper} container`}>
      <div>
        <Markdown.h2
          className={`${styles.title} h3`}
          children={title}
        />
        <Markdown.p
          className={`${styles.text}`}
          children={text}
        />
      </div>
      <div className={styles.grid}>
        {tiles.map((tile, i) => (
          <Tile
            altLink={tile.link_to_description}
            key={tile.name + i}
            className={styles.item}
            title={tile.name}
            color={(() => {
              switch (i) {
                case 0:
                case 4:
                  return 'blue';
                case 1:
                case altColors ? null : 2:
                case 5:
                case 6:
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
      </div>
    </section>
  );
}
