import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from 'antd';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple authentication logic
    if (username === 'surya' && password === '542003') {
      setIsAuthenticated(true);
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input.Password
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;
