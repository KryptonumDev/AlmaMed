'use client';

import styles from './newsletter.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs } from './newsletter.constants';
import Input from '../../ui/input';
import Button from '../../ui/button';
import CheckBox from '../../ui/check-box';
import { useState } from 'react';

export default function Form() {
  const [status, setStatus] = useState({ sending: false });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ name, email }) => {
    setStatus({ sending: true });

    let data = {
      email: email,
      groups: ['110453455895660047'],
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
          setStatus((prevStatus) => ({ ...prevStatus, success: true }));
          reset();
        } else {
          setStatus((prevStatus) => ({ ...prevStatus, success: false }));
        }
      })
      .catch(() => {
        setStatus((prevStatus) => ({ ...prevStatus, success: false }));
      });
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        register={register('name', { required: true })}
        label='Imię i nazwisko'
        errors={errors}
      />
      <Input
        register={register('email', { required: true })}
        label='Twój adres e-mail'
        errors={errors}
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
      />
    </form>
  );
}
