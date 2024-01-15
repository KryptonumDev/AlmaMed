import styles from "./blog.module.scss";
import Image from "../../ui/image";
import { CardProps } from "./blog.constants";
import Button from "../../ui/button";
import Link from "next/link";
import { transformDateFormat } from "../../../utils/date-formatter";

export default function Card ({image, title, date, brief, categories, slug}: CardProps) {
  return (
    <div className={styles.card}>
      <Link href={`/blog/${slug}`} aria-label={title}/>
      <Image data={image}/>
      <p className="p">{transformDateFormat(date)}</p>
      <p className={styles.title}>{title}</p>
      <p className={`p ${styles.brief}`}>{brief}</p>
      <ul>
        {categories.map((el, index) => (
          <li key={index}>
            <Button 
              type='secondary'
              url={`/blog/kategoria/${el.slug.current}`}
              title={el.name}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}