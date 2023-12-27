import React from "react";
import styles from "./button.module.scss";
import { Props } from "./button.constants";
import Link from "next/link";
import { ArrowRight } from "./button.icons";

export default function Button({ title, url, onClick, type, arrow = false, ...props }: Props) {
  if (url)
    return (
      <Link {...props} className={styles[type]} href={url}>
        {title}{arrow && <ArrowRight />}
      </Link>
    )

  return (
    <button {...props} onClick={onClick} className={styles[type]}>
      {title}{arrow && <ArrowRight />}
    </button>
  )
}