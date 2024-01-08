'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

interface Props {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: Props) => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return children;
};

export default SmoothScroll;
