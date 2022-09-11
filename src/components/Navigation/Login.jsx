import { useState, useEffect } from 'react';
import { login } from 'redux/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const isLoggedin = useSelector(state => state.user.isLoggedin);

  useEffect(() => {
    isLoggedin && navigate('/phonebook');
  }, [isLoggedin]);

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          email
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </label>
        <label>
          password
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
