import { useMemo } from 'react';
import styles from './blog.module.scss';
import { PaginationProps } from './blog.constants';
import Link from 'next/link';

export default function Pagination({ currentPage, itemCount }: PaginationProps) {
  const pagesCount = useMemo(() => {
    return Math.ceil(itemCount / 6);
  }, [itemCount]);

  const buttons = (() => {
    let arr = [];
    for (let i = 0; i < pagesCount; i++) {
      arr.push(i + 1);
    }
    return arr;
  })();

  if (itemCount < 7) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <Link
        href={`/blog/strona/${currentPage >= 3 ? currentPage - 1 : 1}`}
        aria-label='Poprzednia strona'
        className={`${styles.left} ${styles.arrow}`}
      />
      <div className={styles.center}>
        {pagesCount < 6 ? (
          <>
            {buttons.map((el) => (
              <Link
                className={currentPage === el ? styles.active : ''}
                key={el}
                href={`/blog/strona/${el}`}
              >
                {el}
              </Link>
            ))}
          </>
        ) : (
          <>
            {currentPage > 3 && (
              <Link
                className={currentPage === 1 ? styles.active : ''}
                href={`/blog/strona/1`}
              >
                {1}
              </Link>
            )}
            {currentPage > 4 && <div className={styles.not}>...</div>}

            {buttons.map((el, index) => {
              if (currentPage < 4 && index < 6) {
                // first 4 pages
                return (
                  <Link
                    className={currentPage === el ? styles.active : ''}
                    key={el}
                    href={`/blog/strona/${el}`}
                  >
                    {el}
                  </Link>
                );
              }
              if (currentPage > pagesCount - 3 && index > pagesCount - 7) {
                // last 4 pages
                return (
                  <Link
                    className={currentPage === el ? styles.active : ''}
                    key={el}
                    href={`/blog/strona/${el}`}
                  >
                    {el}
                  </Link>
                );
              }
              if (index >= currentPage - 3 && index <= currentPage + 1) {
                // all othher pages
                return (
                  <Link
                    href={`/blog/strona/${el}`}
                    className={currentPage === el ? styles.active : ''}
                    key={el}
                  >
                    {el}
                  </Link>
                );
              }
              return null;
            })}

            {(currentPage === 1 || pagesCount - currentPage > 3) && <div className={styles.not}>...</div>}
            {(currentPage === 1 || pagesCount - currentPage > 2) && (
              <Link
                href={`/blog/strona/${pagesCount}`}
                className={currentPage === pagesCount ? styles.active : ''}
              >
                {pagesCount}
              </Link>
            )}
          </>
        )}
      </div>
      <Link
        href={`/blog/strona/${currentPage < pagesCount ? currentPage + 1 : pagesCount}`}
        aria-label='Następna strona'
        className={`${styles.right} ${styles.arrow}`}
      />
    </div>
  );
}
