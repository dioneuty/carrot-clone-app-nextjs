import React, {useState} from "react";

// todo less code
// todo better validation
// todo error (set, clear, display)
// todo have control over inputs
// todo deal with events
// todo easier inputs

export default function Forms() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const [emailError, setEmailError] = useState("");


  const onUsernameChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {currentTarget: {value},} = e;
    setUsername(value);
  }
  const onEmailChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {currentTarget: {value},} = e;
    setEmailError('');
    setEmail(value);
  }
  const onPasswordChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {currentTarget: {value},} = e;
    setPassword(value);
  }

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(username === '' || email === '' || password === ''){
      setFormErrors('All fields are required');
    }
    if(!email.includes('@')){
      setEmailError('@ is required');
    }

    console.log(username, email, password);
  }




  return (
    <form onSubmit={onSubmit}>
      {formErrors}
      {emailError}

      <input value={username} onChange={onUsernameChange} type="text" placeholder='Username' required />
      <input value={email} onChange={onEmailChange} type="email" placeholder='Email' required />
      <input value={password} onChange={onPasswordChange} type="password" placeholder='Password' required />
      <input type="submit" value="Create Account" />
    </form>
  );
}