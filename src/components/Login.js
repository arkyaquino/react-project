
import React, { useState } from 'react';
import LoginForm from './LoginForm';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="login">
      <LoginForm
        handleSubmit={handleSubmit}
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </div>
  );
}

export default Login;
