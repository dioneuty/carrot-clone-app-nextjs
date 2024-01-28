import React, {useState} from "react";

export default function Forms() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {currentTarget: {value},} = e;
    setUsername(value);
  }
  const onEmailChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {currentTarget: {value},} = e;
    setEmail(value);
  }
  const onPasswordChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {currentTarget: {value},} = e;
    setPassword(value);
  }

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username, email, password);
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={username} onChange={onUsernameChange} type="text" placeholder='Username' required />
      <input value={email} onChange={onEmailChange} type="email" placeholder='Email' required />
      <input value={password} onChange={onPasswordChange} type="password" placeholder='Password' required />
      <input type="submit" value="Create Account" />
    </form>
  );
}