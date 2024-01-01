import React from 'react';
import styles from './prevention.module.scss';
import { Props } from './prevention.constants';
import Markdown from '../ui/markdown';
import Button from '../ui/button';
import RadialChart from '../ui/radial-chart';

export default function Prevention({ title, text, cta, metricsTitle, metricsNumber }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Markdown.h2
          className='h3'
          children={title}
        />
        <Markdown.p children={text} />
        <Button
          arrow={true}
          title={cta.text}
          url={cta.href}
          type={cta.theme}
        />
      </div>
      <div className={styles.metrics}>
        <Markdown.p children={metricsTitle} />
        <RadialChart big={true} percentTakenCalls={metricsNumber} />
      </div>
    </section>
  );
}
