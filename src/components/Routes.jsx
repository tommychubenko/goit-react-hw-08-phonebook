import { Routes, Route } from 'react-router';
import { useEffect } from 'react';
import App from './App';
import { Home } from './Home';
import { AppBar } from './Navigation/AppBar';
import { Login } from './Navigation/Login';
import { Register } from './Navigation/Register';
import { refresh } from 'redux/authOperations';
import { useDispatch } from 'react-redux';

export const Ways = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <div className="container">
      <AppBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="phonebook" element={<App />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};
