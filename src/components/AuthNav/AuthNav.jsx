import { NavigationLink } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <>
      <NavigationLink to="/login">Login</NavigationLink>
      <NavigationLink to="/registration">Registration</NavigationLink>
    </>
  );
};
