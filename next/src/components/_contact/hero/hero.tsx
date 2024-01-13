import styles from './hero.module.scss';
import { Props } from './hero.constants';
import Markdown from '@/components/ui/markdown';
import Form from './hero-form';

export default function Hero({ title, text }: Props) {
  return (
    <section className={styles.wrapper}>
      <div>
        <Markdown.h1
          children={title}
          className={`h3 ${styles.title}`}
        />
        <Markdown.p
          children={text}
          className={`${styles.text}`}
        />
      </div>
      <Form />
      <Hearth className={styles.svg} />
    </section>
  );
}

const Hearth = ({ className }: { className: string }) => (
  <svg
    className={className}
    width='333'
    height='302'
    viewBox='0 0 333 302'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M133.869 234.352C140.734 232.465 148.086 234.097 153.512 238.703C160.986 245.057 171.123 253.668 179.542 260.819C184.316 264.873 190.785 266.318 196.833 264.68C202.88 263.042 207.736 258.528 209.804 252.613L221.259 219.943C223.591 213.275 229.052 208.179 235.861 206.307L277.249 194.926C301.036 188.385 315.015 163.802 308.476 140.02C300.549 111.193 289.743 71.8949 281.816 43.068C275.275 19.2815 250.692 5.30196 226.905 11.8427C177.564 25.4105 92.4097 48.826 43.0634 62.3951C19.2815 68.9345 5.30197 93.518 11.8427 117.305C19.7694 146.131 30.5756 185.43 38.5023 214.257C45.0418 238.038 69.6252 252.018 93.4071 245.478L133.869 234.352Z'
      fill='white'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M112.574 153.617L162.276 184.447C166.391 186.995 171.379 187.716 176.043 186.434C180.711 185.15 184.63 181.98 186.863 177.686L213.813 125.778C222.262 109.498 216.75 89.4535 201.161 79.7837L201.143 79.7735C193.46 75.008 184.139 73.6614 175.422 76.0584C166.705 78.4554 159.379 84.3796 155.213 92.4034L151.927 98.7332L145.867 94.9731C138.184 90.2076 128.863 88.861 120.146 91.258C111.429 93.655 104.103 99.5792 99.9367 107.603L99.9266 107.621C91.4778 123.901 96.9897 143.945 112.574 153.617Z'
      fill='#BE0303'
    />
  </svg>
);
