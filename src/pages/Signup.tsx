import React, { useState } from 'react';
import {api} from '../api'; // import Axios instance

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/users', { username,  password });
      console.log('User signed up:', response.data);
      // redirect or do something after signup
    } catch (err) {
      setError('Signup failed!');
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Signup;
