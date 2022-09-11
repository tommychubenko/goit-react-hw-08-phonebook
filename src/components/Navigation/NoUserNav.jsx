import { StyledLink } from './styledLink';

export const NoUserNav = () => {
  return (
    <div>
      <StyledLink to={'register'}>Register</StyledLink>
      <StyledLink to={'login'}>Login</StyledLink>
    </div>
  );
};
