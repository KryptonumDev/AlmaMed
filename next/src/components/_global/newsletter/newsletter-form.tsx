'use client'
import React from "react";
import styles from './newsletter.module.scss';
import { useForm, SubmitHandler } from "react-hook-form"
import { Inputs } from "./newsletter.constants";
import Input from "../../ui/input";
import Button from "../../ui/button";
import CheckBox from "../../ui/check-box";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = () => {
    // console.log(data)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register("email", { required: true })}
        label="Twój adres e-mail"
        errors={errors}
      />
      <CheckBox
        register={register("agreement", { required: true })}
        label="Akceptuję politykę prywatności"
        errors={errors}
      />
      <Button arrow={true} title="Zapisuje się" type="primary" />
    </form>
  )
}