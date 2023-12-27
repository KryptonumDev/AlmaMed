import React from "react";
import styles from './newsletter.module.scss';
import Button from "../ui/button";
import Form from "./newsletter-form";

export default function Newsletter() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        PHONE
        <div>
          <p className="h4">Masz pytanie lub potrzebujesz pomocy? Skontaktuj się z nami – nasi specjaliści pomogą Ci najszybciej, jak to możliwe.</p>
          <Button arrow={true} title="Skontaktuj się z nami" url="#" type="primary" />
        </div>
      </div>
      <div className={styles.right}>
        <h2 className="h3">Bądź na bieżąco ze zdrowiem – Newsletter</h2>
        <div>
          <p>
            Chcesz być na bieżąco z aktualnościami z centrum medycznego Alma Med?
          </p>
          <p>
            Zapisz się do naszego newslettera, aby nie przegapić informacji o zdrowiu!
          </p>
        </div>
        <Form />
      </div>
    </section>
  )
}