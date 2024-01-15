import { useMemo } from 'react';
import styles from './blog.module.scss';
import { PaginationProps } from './blog.constants';
import Link from 'next/link';

export default function Pagination({ currentPage, itemCount, urlBasis }: PaginationProps) {
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
    <div className={styles.pagination}>
      <Link
        href={currentPage >= 3 ? `${urlBasis}/strona/${currentPage >= 3 ? currentPage - 1 : 1}` : `${urlBasis}`}
        aria-label='Poprzednia strona'
        className={`${styles.left} ${styles.arrow}`}
      >
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M19.9987 4.58331C11.4843 4.58331 4.58203 11.4856 4.58203 20C4.58203 28.5144 11.4843 35.4166 19.9987 35.4166C28.5131 35.4166 35.4154 28.5144 35.4154 20C35.4154 11.4856 28.5131 4.58331 19.9987 4.58331ZM2.08203 20C2.08203 10.1049 10.1036 2.08331 19.9987 2.08331C29.8938 2.08331 37.9154 10.1049 37.9154 20C37.9154 29.8951 29.8938 37.9166 19.9987 37.9166C10.1036 37.9166 2.08203 29.8951 2.08203 20ZM23.3826 14.1161C23.8707 14.6043 23.8707 15.3957 23.3826 15.8839L19.2665 20L23.3826 24.1161C23.8707 24.6043 23.8707 25.3957 23.3826 25.8839C22.8944 26.372 22.103 26.372 21.6148 25.8839L16.6148 20.8839C16.1267 20.3957 16.1267 19.6043 16.6148 19.1161L21.6148 14.1161C22.103 13.6279 22.8944 13.6279 23.3826 14.1161Z'
            fill='#202123'
          />
        </svg>
      </Link>
      <div className={styles.center}>
        {pagesCount < 6 ? (
          <>
            {buttons.map((el) => (
              <Link
                className={currentPage === el ? styles.active : ''}
                key={el}
                href={el === 1 ? `${urlBasis}` : `${urlBasis}/strona/${el}`}
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
                href={`${urlBasis}`}
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
                    href={el === 1 ? `${urlBasis}` : `${urlBasis}/strona/${el}`}
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
                    href={`${urlBasis}/strona/${el}`}
                  >
                    {el}
                  </Link>
                );
              }
              if (index >= currentPage - 3 && index <= currentPage + 1) {
                // all othher pages
                return (
                  <Link
                    href={`${urlBasis}/strona/${el}`}
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
                href={`${urlBasis}/strona/${pagesCount}`}
                className={currentPage === pagesCount ? styles.active : ''}
              >
                {pagesCount}
              </Link>
            )}
          </>
        )}
      </div>
      <Link
        href={`${urlBasis}/strona/${currentPage < pagesCount ? currentPage + 1 : pagesCount}`}
        aria-label='Następna strona'
        className={`${styles.right} ${styles.arrow}`}
      >
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M19.9987 4.58331C11.4843 4.58331 4.58203 11.4856 4.58203 20C4.58203 28.5144 11.4843 35.4166 19.9987 35.4166C28.5131 35.4166 35.4154 28.5144 35.4154 20C35.4154 11.4856 28.5131 4.58331 19.9987 4.58331ZM2.08203 20C2.08203 10.1049 10.1036 2.08331 19.9987 2.08331C29.8938 2.08331 37.9154 10.1049 37.9154 20C37.9154 29.8951 29.8938 37.9166 19.9987 37.9166C10.1036 37.9166 2.08203 29.8951 2.08203 20ZM16.6148 14.1161C17.103 13.6279 17.8944 13.6279 18.3826 14.1161L23.3826 19.1161C23.8707 19.6043 23.8707 20.3957 23.3826 20.8839L18.3826 25.8839C17.8944 26.372 17.103 26.372 16.6148 25.8839C16.1267 25.3957 16.1267 24.6043 16.6148 24.1161L20.7309 20L16.6148 15.8839C16.1267 15.3957 16.1267 14.6043 16.6148 14.1161Z'
            fill='#202123'
          />
        </svg>
      </Link>
    </div>
  );
}
