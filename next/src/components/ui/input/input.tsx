import styles from './input.module.scss';
import { Props } from './input.constants';
import { AnimatePresence, motion } from 'framer-motion';

export default function Input({ register, label, errors, textarea = false, ...props }: Props) {
  return (
    <label className={`${styles.wrapper} ${errors[register.name] ? styles.errored : ''}`}>
      <p
        className={styles.label}
        dangerouslySetInnerHTML={{ __html: label }}
      />
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
      <AnimatePresence mode='wait'>
        {errors[register.name] && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .3, ease: [0.785, 0.135, 0.15, 0.86] }}
            className={styles.error}
            role='alert'
          >
            {errors[register.name]?.message || `Proszę poprawnie uzupełnić to pole`}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}
