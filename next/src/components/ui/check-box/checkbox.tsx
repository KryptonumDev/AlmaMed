import React from 'react';
import styles from './checkbox.module.scss';
import { Props } from './checkbox.constants';

export default function Checkbox({ register, label, errors, ...props }: Props) {
  return (
    <label className={styles.wrapper}>
      <input
        className={styles.input}
        name={register.name}
        type='checkbox'
        {...register}
        {...props}
      />
      <span className={styles.checkMark} />
      <p
        className={styles.label}
        dangerouslySetInnerHTML={{ __html: label }}
      />
      {errors[register.name] && <span role='alert'>{errors[register.name]?.message || `Zgoda jest wymagana`}</span>}
    </label>
  );
}
