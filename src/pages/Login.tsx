import React, { useState } from 'react';
import { User } from '../interfaces/User';

function Login() {
  const [user, setUser] = useState<User>({
    username: '',
    password: '',
  });

  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: keyof User
  ) => {
    setUser({ ...user, [key]: event.target.value });
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //TODO LOGIN API
    const token = '123';
    if (rememberMe) {
      localStorage.setItem('token', token);
    } else {
      sessionStorage.setItem('token', token);
    }
    //TODO LOGIN API
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={user.username}
            onChange={(e) => handleInputChange(e, 'username')}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => handleInputChange(e, 'password')}
          />
        </div>
        <div>
          <label>
            Remember Me
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
