import React from "react";
import {FieldErrors, useForm} from "react-hook-form";

// less code
// better validation
// error (set, clear, display)
// todo have control over inputs
// todo deal with events
// easier inputs


interface LoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Forms() {

  const {
    register,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginForm>({
    mode: "onChange",
  });
  // console.log(register('name'));
  // console.log(watch());

  const onValid = (data: LoginForm) => {
    console.log('valid');
  }

  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('username', {
          required: 'Username is required',
          minLength: {
            message: 'the username should be longer than 5 chars',
            value: 5,
          },
        })}
        type="text" placeholder='Username'
      />
      <input
        {...register('email', {
          required: 'email is required',
          validate: {
            notGmail: (value) => !value.includes('@gmail.com') || 'Gmail is not allowed',
          },
        })}
        type="email" placeholder='Email'
        className={`${Boolean(errors.email) ? 'border-red-500' : ''}`}
      />
      {errors.email?.message}
      <input
        {...register('password', {
          required: 'password is required',
        })}
        type="password" placeholder='Password'
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}