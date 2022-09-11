import { StyledLink } from './styledLink';
import { UserBarInfo } from './UserBarInfo';

export const UserNav = () => {
  return (
    <>
      <StyledLink to={`phonebook`}>My phonebook</StyledLink>
      <UserBarInfo />
    </>
  );
};
