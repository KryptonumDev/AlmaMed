'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import Select from '@/components/ui/select';
import Input from '@/components/ui/input';
import CheckBox from '@/components/ui/check-box';
import Button from '@/components/ui/button';
import { CooperationFormInputs, CooperationFormProps, regex } from './form.constants';
import styles from './form.module.scss';

export default function CooperationForm({ subjects, targetEmail }: CooperationFormProps) {
  const [status, setStatus] = useState<{ sending: boolean; success: boolean | undefined }>({
    sending: false,
    success: undefined,
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<CooperationFormInputs>({
    mode: 'all',
    defaultValues: {
      targetEmail,
    },
  });

  const onSubmit: SubmitHandler<CooperationFormInputs> = async (data) => {
    setStatus({ sending: true, success: undefined });

    fetch('/api/cooperation', {
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
          reset({ targetEmail });
        } else {
          setStatus(() => ({ sending: false, success: false }));
        }
      })
      .catch(() => {
        setStatus(() => ({ sending: false, success: false }));
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input type='hidden' {...register('targetEmail')} value={targetEmail} />
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
        label='Adres email'
        errors={errors}
      />
      <Input
        register={register('phone', {
          required: { value: true, message: 'To pole jest wymagane' },
          pattern: { value: regex.phone, message: 'Proszę wpisać poprawny numer telefonu' },
        })}
        label='Nr. telefonu'
        errors={errors}
      />
      <Select
        control={control}
        rules={{ required: { value: true, message: 'Proszę wybrać temat rozmowy' } }}
        errors={errors}
        name='theme'
        label='Wybierz temat rozmowy'
        options={subjects}
        placeholder='Wybierz temat rozmowy'
      />
      <Input
        register={register('message', {
          required: { value: true, message: 'To pole jest wymagane' },
          minLength: { value: 3, message: 'To pole jest wymagane' },
        })}
        label='Treść wiadomości'
        errors={errors}
        textarea={true}
        rows={4}
      />
      <CheckBox
        register={register('agreement', { required: true })}
        label='Akceptuję <a class="anim-link" href="/polityka-prywatnosci" target="_blank" rel="noopener noreferrer">politykę prywatności</a>'
        errors={errors}
      />
      <Button
        arrow={true}
        title='Wyślij zgłoszenie'
        type='primary'
        disabled={status.sending}
      />

      <AnimatePresence mode='wait'>
        {status.success && (
          <motion.div
            className={styles.success}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
          >
            <h2 className='h3'>
              <strong>Dziękujemy</strong> za zgłoszenie!
            </h2>
            <p>Twoja wiadomość została wysłana. Skontaktujemy się z Tobą najszybciej jak to możliwe.</p>
            <Button
              onClick={() => setStatus({ sending: false, success: undefined })}
              title='Wyślij kolejne'
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
            className={styles.success}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
          >
            <h2 className='h3'>
              Niestety <strong>nie udało</strong> się wysłać zgłoszenia
            </h2>
            <p>Spróbuj ponownie za chwilę lub skontaktuj się z nami telefonicznie.</p>
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
