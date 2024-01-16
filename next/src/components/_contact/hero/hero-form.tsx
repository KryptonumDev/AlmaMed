'use client';
import { useState } from 'react';
import { Inputs, regex } from './hero.constants';
import styles from './hero.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import Select from '@/components/ui/select';
import Input from '@/components/ui/input';
import CheckBox from '@/components/ui/check-box';
import Button from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { removeMarkdownTags } from '../../../utils/remove-markdown';

export default function Form({
  formSubjects,
  localizations,
}: {
  formSubjects: string[];
  localizations: Array<{ name: string }>;
}) {
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
  } = useForm<Inputs>({ mode: 'all' });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setStatus({ sending: true, success: undefined });

    fetch('/api/contact', {
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
      <Select
        control={control}
        rules={{ required: { value: true, message: 'Proszę wybrać przychodnię' } }}
        errors={errors}
        name='office'
        label='Wybierz przychodnię'
        options={localizations.map((localization) => removeMarkdownTags(localization.name))}
        placeholder='Wybierz przychodnię'
      />
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
          pattern: { value: regex.phone, message: '' },
        })}
        label='nr. telefonu'
        errors={errors}
      />
      <Select
        control={control}
        rules={{ required: { value: true, message: 'Proszę wybrać temat rozmowy' } }}
        errors={errors}
        name='theme'
        label='Wybierz temat rozmowy'
        options={formSubjects}
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
        label='Akceptuję politykę prywatności'
        errors={errors}
      />
      <Button
        arrow={true}
        title='Zapisuje się'
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
              <strong>Dziękujemy</strong> za wiadomość!
            </h2>
            <p>Twoja wiadomość została wysłana.</p>
            <Button
              onClick={() => setStatus({ sending: false, success: undefined })}
              title='Wyślij ponownie'
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
              Niestety <strong>nie udało</strong> się wysłać Twojej wiadomości
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
