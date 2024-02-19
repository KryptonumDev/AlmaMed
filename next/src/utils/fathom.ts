'use client'
import { useEffect } from 'react'
import { load, trackPageview } from 'fathom-client'
import { usePathname } from 'next/navigation'

export default function Fathom() {
  const pathname = usePathname();
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      load('GNTXBHTX', {
        includedDomains: ['centrum-almamed.pl'],
        spa: 'auto',
      });
      trackPageview();
    }
  }, [pathname]);
  return null;
}