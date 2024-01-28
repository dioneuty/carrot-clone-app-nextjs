import React from "react";
import {useForm} from "react-hook-form";

// less code
// todo better validation
// todo error (set, clear, display)
// todo have control over inputs
// todo deal with events
// easier inputs

export default function Forms() {

  const {register, watch} = useForm();
  // console.log(register('name'));
  // console.log(watch());

  return (
    <form>
      <input {...register('username')} type="text" placeholder='Username' required />
      <input {...register('email')} type="email" placeholder='Email' required />
      <input {...register('password')} type="password" placeholder='Password' required />
      <input type="submit" value="Create Account" />
    </form>
  );
}