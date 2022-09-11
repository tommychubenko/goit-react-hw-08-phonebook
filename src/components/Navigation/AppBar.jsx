import { StyledLink } from './styledLink';

import { useSelector } from 'react-redux';
import { UserNav } from './UserNav';
import { NoUserNav } from './NoUserNav';

export const AppBar = () => {
  const user = useSelector(store => store.user);

  return (
    <div className="appBar">
      <StyledLink to={`/`}>Main page</StyledLink>

      {user.isLoggedin ? <UserNav /> : <NoUserNav />}
    </div>
  );
};
