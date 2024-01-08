
import styles from './radial-chart.module.scss';
import { Props } from './radial-chart.constants';

export default function RadialChart({ percentTakenCalls, big = false }: Props) {
  return (
    <div className={`${styles.wrapper} ${big ? styles.big : ''}`}>
      <div
        className={styles.outerCircle}
        // @ts-ignore
        style={{ '--percent': `${percentTakenCalls}` }}
      >
        <div className={styles.innerCircle}>
          <span className='h3'>{percentTakenCalls}%</span>
        </div>
      </div>
    </div>
  );
}
