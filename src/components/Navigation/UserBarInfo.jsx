import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/authOperations';
import { useNavigate } from 'react-router';

export const UserBarInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  let navigate = useNavigate();

  return (
    user.isLoggedin === true && (
      <p>
        Wellcome, {user.user.name}{' '}
        <button
          onClick={() => {
            dispatch(logout());
            navigate('/');
          }}
        >
          Logout
        </button>{' '}
      </p>
    )
  );
};
