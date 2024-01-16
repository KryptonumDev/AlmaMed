'use client';

import styles from './styles.module.scss';
import { Lens } from './header.icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Search({ className }: { className?: string }) {
  const [search, setSearch] = useState('');

  // add enter listener only if search focused

  useEffect(() => {
    const enterListener = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && search.length > 0) {
        window.location.href = search.length > 0 ? `/wyszukiwarka?wyszukiwanie=${search}` : `/wyszukiwarka`;
      }
    };

    document.addEventListener('keydown', enterListener);

    return () => {
      document.removeEventListener('keydown', enterListener);
    };
  }, [search]);

  return (
    <label className={`${styles.search} ${className}`}>
      <input
        id='search'
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Szukaj'
      />
      <Link href={search.length > 0 ? `/wyszukiwarka?wyszukiwanie=${search}` : `/wyszukiwarka`}>
        <Lens />
      </Link>
    </label>
  );
}
