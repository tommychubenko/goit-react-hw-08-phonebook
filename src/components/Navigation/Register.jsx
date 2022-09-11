import { useState, useEffect } from 'react';
import { register } from 'redux/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const isLoggedin = useSelector(state => state.user.isLoggedin);

  useEffect(() => {
    isLoggedin && navigate('/phonebook');
  }, [isLoggedin, navigate]);

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </label>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
