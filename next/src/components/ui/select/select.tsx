import styles from './select.module.scss';
import { Props } from './select.constants';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Controller } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';

export default function Select({control, rules, errors, name, label, options, placeholder}: Props) {

  return (
    <label className={`${styles.wrapper}`}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value, ref } }) => (
          <Dropdown
            ref={ref}
            options={options}
            onChange={el => onChange(el)}
            value={options.find(el => el === value)}
            placeholder={placeholder}
            className={`select ${errors[name] ? 'errored' : ''}`}
          />
        )}
      />
      <AnimatePresence mode='wait'>
        {errors[name] && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .3, ease: [0.785, 0.135, 0.15, 0.86] }}
            className={styles.error}
            role='alert'
          >
            {errors[name]?.message || `Proszę poprawnie uzupełnić to pole`}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}
