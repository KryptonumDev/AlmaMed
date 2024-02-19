import styles from './video.module.scss';
import { Props } from './video.constants';
import Markdown from '../../ui/markdown';

export default function Video({ title, text, video, steps }: Props) {
  return (
    <section className={`${styles.wrap}`}>
      <div className={styles.background}>
      <Blob />
      <div className={`${styles.wrapper} container`}>
        <Markdown.h2
          className={`${styles.title} h3`}
          children={title}
          text={'jak-zrejestrowac-sie-w-aplikacji'}
        />
        <Markdown.p
          className={styles.text}
          children={text}
        />
        <div className={styles.grid}>
          <iframe
            className={styles.video}
            src={video.asset.url}
            allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            loading='lazy'
          />
          <div className={styles.list}>
            {steps.map((el) => (
              <Markdown.p
                key={el}
                className={`${styles.step} p`}
                children={el}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

const Blob = () => (
  <svg
    width='1393'
    height='764'
    viewBox='0 0 1393 764'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M933.727 16.4794C1055.23 68.65 1355.58 -58.9453 1390 62.5973C1425.93 189.496 978.433 432.175 906 532.597C834.269 632.046 734.572 757.509 603.059 762.395C488.635 766.646 374.698 751.528 271.842 690.837C160.393 625.077 55.0955 536.467 19.8675 418.283C-16.5442 296.128 -4.11976 152.105 88.2307 74.8531C173.144 3.82239 315.128 93.7255 429.941 75.2538C551.704 55.664 814.363 -34.7748 933.727 16.4794Z'
      fill='#FFFBF4'
    />
  </svg>
);
