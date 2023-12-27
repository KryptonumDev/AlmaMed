import React from "react";
import styles from "./styles.module.scss";
import { Props } from "./tile.constants";
// import Image from "../image";

export default function Tile({ color }: Props) {
  return (
    <div className={`${styles.wrapper} ${styles[color]}`}>
      {/* <Image src={icon} alt={title} /> */}
    </div>
  )
}