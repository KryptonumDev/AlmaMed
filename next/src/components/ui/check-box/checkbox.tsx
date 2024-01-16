import styles from './checkbox.module.scss';
import { Props } from './checkbox.constants';
import { AnimatePresence, motion } from 'framer-motion';

export default function Checkbox({ register, label, errors, ...props }: Props) {
  return (
    <label className={`${styles.wrapper} ${errors[register.name] ? styles.errored : ''}`}>
      <input
        className={styles.input}
        name={register.name}
        type='checkbox'
        {...register}
        {...props}
      />
      <span className={styles.checkMark}>
        <svg
          width='22'
          height='18'
          viewBox='0 0 22 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M21.3156 0.918048C20.4527 0.0551029 19.0535 0.0551034 18.1906 0.918049L7.25265 11.856L4.12718 8.73053C3.26424 7.86758 1.86513 7.86758 1.00218 8.73053C0.139236 9.59347 0.139235 10.9926 1.00218 11.8555L5.68969 16.543C6.10189 16.9552 6.63643 17.1705 7.17644 17.189C7.76722 17.2093 8.36461 16.994 8.81558 16.5431L21.3156 4.04305C22.1785 3.18011 22.1785 1.78099 21.3156 0.918048Z'
            fill='white'
          />
        </svg>
      </span>
      <p
        className={styles.label}
        dangerouslySetInnerHTML={{ __html: label }}
      />
      <AnimatePresence mode='wait'>
        {errors[register.name] && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.785, 0.135, 0.15, 0.86] }}
            className={styles.error}
            role='alert'
          >
            {errors[register.name]?.message || `Zgoda jest wymagana`}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}
