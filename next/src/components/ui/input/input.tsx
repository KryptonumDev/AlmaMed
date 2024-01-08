
import styles from './input.module.scss';
import { Props } from "./input.constants";

export default function Input({ register, label, errors, textarea = false, ...props }: Props) {
  return (
    <label className={styles.wrapper}>
      <p className={styles.label} dangerouslySetInnerHTML={{ __html: label }} />
      {textarea ? (
        <textarea
          data-lenis-prevent
          {...register}
          name={register.name}
          {...props}
        />
      ) : (
        <input
          {...register}
          name={register.name}
          {...props}
        />
      )}
      {errors[register.name] && (
        <span role="alert">{errors[register.name]?.message || `Proszę poprawnie uzupełnić to pole`}</span>
      )}
    </label>
  )
}