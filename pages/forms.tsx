import React from "react";
import {useForm} from "react-hook-form";

// less code
// better validation
// todo error (set, clear, display)
// todo have control over inputs
// todo deal with events
// easier inputs

export default function Forms() {

  const {register, watch, handleSubmit} = useForm();
  // console.log(register('name'));
  // console.log(watch());

  const onValid = () => {
    console.log('valid');
  }

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input {...register('username', {required: true})} type="text" placeholder='Username' />
      <input {...register('email', {required: true})} type="email" placeholder='Email' />
      <input {...register('password', {required: true})} type="password" placeholder='Password' />
      <input type="submit" value="Create Account" />
    </form>
  );
}