import React from "react"
import styles from './styles.module.scss'

const { wrapper, annotation } = styles

export default function Header() {
  return (
    <header className={wrapper}>
      <div className={annotation}>
      </div>
    </header>
  )
}