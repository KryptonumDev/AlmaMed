import styles from './not-found.module.scss';
import Button from '../../ui/button';
import { Green, Red, Yellow } from './not-found.icons';

export default function NotFound() {
  return (
    <section className={`${styles.wrapper} container`}>
      <h1>404</h1>
      <p className='h5'>Coś poszło nie tak!</p>
      <p className='h5'>Taka strona nie istnieje</p>
      <Button
        arrow={true}
        type='primary'
        title='Wróć na stronę główną'
        url='/'
      />

      <Red className={styles.red}/>
      <Green className={styles.green}/>
      <Yellow className={styles.yellow}/>
    </section>
  );
}
