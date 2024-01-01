import React from 'react';
import styles from './tiles.module.scss';
import { Props } from './tiles.constants';
import Markdown from '../ui/markdown';
import Tile from '../ui/tile';
import ButtonBig from '../ui/button-big';

export default function Tiles({ title, text, tiles }: Props) {
  return (
    <section className={styles.wrapper}>
      <Markdown
        className={`${styles.title} h3`}
        children={title}
      />
      <Markdown
        className={`${styles.text}`}
        children={text}
      />

      <div className={styles.grid}>
        {tiles.map((tile, i) => (
          <Tile
            key={tile.name + i}
            className={styles.item}
            title={tile.name}
            color={tile.color}
            icon={tile.icon}
          />
        ))}
        <ButtonBig
          ctaLink={{ url: '/', title: 'Dowiedz się więcej ' }}
          type={'primary'}
        />
      </div>
    </section>
  );
}
