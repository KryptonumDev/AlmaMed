'use client'
import React from "react";
import styles from './newsletter.module.scss';
import { useForm, SubmitHandler } from "react-hook-form"
import { Inputs } from "./newsletter.constants";
import Input from "../ui/input";


export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register("email", { required: true })}
        label="Twój adres e-mail"
        errors={errors}
      />
    </form>
  )
}