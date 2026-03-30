'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

interface Props {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: Props) => {
  useEffect(() => {
    const lenis = new Lenis();
    let rafId = 0;

    const scrollToHash = (hash: string) => {
      if (!hash || hash === '#') return;
      const element = document.querySelector(hash);
      if (!element) return;
      lenis.scrollTo(element as HTMLElement, { offset: -90 });
      window.history.replaceState(null, '', hash);
    };

    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      if (href.startsWith('#')) {
        event.preventDefault();
        scrollToHash(href);
        return;
      }

      if (!href.includes('#')) return;

      const url = new URL(href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;

      event.preventDefault();
      scrollToHash(url.hash);
    };

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
    document.addEventListener('click', onAnchorClick);

    if (window.location.hash) {
      requestAnimationFrame(() => scrollToHash(window.location.hash));
    }

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', onAnchorClick);
      lenis.destroy();
    };
  }, []);
  return children;
};

export default SmoothScroll;
