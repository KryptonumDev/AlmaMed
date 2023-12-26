import React from "react";
import styles from "./button.module.scss";
import { Props } from "./button.constants";
import Link from "next/link";
import { ArrowRight } from "./button.icons";

export default function Button({ title, url, onClick, type }: Props) {
  if (url)
    return (
      <Link className={styles[type]} href={url}>
        {title}<ArrowRight />
      </Link>
    )

  return (
    <button onClick={onClick} className={styles[type]}>
      {title}<ArrowRight />
    </button>
  )
}