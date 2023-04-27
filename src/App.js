import React from 'react';
import Chat from './components/Chat';
import ContactList from './components/ContactList';
import ChatHistory from './components/ChatHistory';
import ContactHeaders from './components/ContactHeaders';
import ChatComposer from './components/ChatComposer';
import Notifications from './components/Notifications';
import Login from './components/Login';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import { useState } from 'react';
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <HomePage handleLogout={handleLogout} />
      ) : (
        <LoginForm handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
