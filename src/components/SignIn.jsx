import React, { useState } from 'react';

export default function SignIn({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFetching, setFetching] = useState(false);

  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);
  const handleSubmit = async event => {
    event.preventDefault();
    setFetching(true);

    await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    onSuccess();
    setFetching(false);
  };

  return (
    <div className="signIn">
      <h1>Sign In</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          onChange={handleEmailChange}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <button type="submit">
          {isFetching ? 'Authenticating...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
