'use client';
import styles from './newsletter.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs, regex } from './newsletter.constants';
import Input from '../../ui/input';
import Button from '../../ui/button';
import CheckBox from '../../ui/check-box';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Form({
  id,
  successTitle,
  successText,
}: {
  id: string;
  successTitle: string;
  successText: string;
}) {
  const [status, setStatus] = useState<{ sending: boolean; success: boolean | undefined }>({
    sending: false,
    success: undefined,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'all' });

  const onSubmit: SubmitHandler<Inputs> = ({ name, email }) => {
    setStatus({ sending: true, success: undefined });

    let data = {
      email: email,
      groups: [id],
      fields: { name },
    };

    fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          setStatus(() => ({ sending: false, success: true }));
          reset();
        } else {
          setStatus(() => ({ sending: false, success: false }));
        }
      })
      .catch(() => {
        setStatus(() => ({ sending: false, success: false }));
      });
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        register={register('name', {
          required: { value: true, message: 'To pole jest wymagane' },
          minLength: { value: 3, message: 'To pole jest wymagane' },
        })}
        label='Imię i nazwisko'
        errors={errors}
      />
      <Input
        register={register('email', {
          required: { value: true, message: 'To pole jest wymagane' },
          pattern: { value: regex.email, message: 'Proszę wpisać poprawny E-mail' },
        })}
        label='Twój adres e-mail'
        errors={errors}
      />
      <CheckBox
        register={register('agreement', { required: true })}
        label='Akceptuję <a class="anim-link" href="/polityka-prywatnosci">politykę prywatności</a>'
        errors={errors}
      />
      <Button
        arrow={true}
        title='Zapisuje się'
        type='primary'
      />
      <AnimatePresence mode='wait'>
        {status.success && (
          <motion.div
            className={styles.success}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
          >
            <h2
              className='h3'
              dangerouslySetInnerHTML={{ __html: successTitle }}
            />
            <p>{successText}</p>
            <Button
              onClick={() => setStatus({ sending: false, success: undefined })}
              title='Wypełnij ponownie'
              arrow={true}
              type='primary'
              buttonType='button'
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        {status.success === false && (
          <motion.div
            className={styles.failed}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
          >
            <h2 className='h3'>
              Niestety coś poszło <strong>nie tak</strong>
            </h2>
            <p>Proszę spróbować jeszcze raz lub skontaktować się z nami telefonicznie.</p>
            <Button
              onClick={() => setStatus({ sending: false, success: undefined })}
              title='Spróbuj ponownie'
              arrow={true}
              type='primary'
              buttonType='button'
            />
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
