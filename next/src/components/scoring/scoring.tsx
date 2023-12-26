import React from "react";
import styles from "./scoring.module.scss";
import { StarFace, StarPlaces } from "./scoring.icons";
import { Props } from "./scoring.constants";

export default function Scoring({ patients, averageRating, percentTakenCalls }: Props) {
  return (
    <section className={styles.wrapper}>
      <div>
        <StarFace />
        <span className="h3">{patients}</span>
        <p className="h4">Pacjentów objętych opieką koordynowaną</p>
      </div>
      <div>
        <StarPlaces />
        <span className="h3">{averageRating}</span>
        <p className="h4">Średnia ocena usług</p>
      </div>
      <div>
        {/* @ts-ignore */}
        <div className={styles.outerCircle} style={{ '--percent': `${percentTakenCalls}` }}>
          <div className={styles.innerCircle}>
            <span className="h3">{percentTakenCalls}%</span>
          </div>
        </div>
        <p className="h4">Procent odebranych połączeń</p>
      </div>
    </section>
  )
}