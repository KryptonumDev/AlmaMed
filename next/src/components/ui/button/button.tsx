import styles from './button.module.scss';
import { Props } from './button.constants';
import Link from 'next/link';
import { ArrowRight } from './button.icons';

export default function Button({ title, url, onClick, type, arrow = false, buttonType, ...props }: Props) {
  if (url)
    return (
      <Link
        {...props}
        className={styles[type]}
        href={url}
      >
        {title}
        {arrow && <ArrowRight />}
      </Link>
    );

  return (
    <button
      type={buttonType ? buttonType : undefined}
      {...props}
      onClick={onClick}
      className={`${styles[type]} ${styles.button}`}
    >
      {title}
      {arrow && <ArrowRight />}
    </button>
  );
}
