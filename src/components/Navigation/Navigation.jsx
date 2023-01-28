import { NavigationLink } from './Navigation.styled';

import { useAuth } from 'components/hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <NavigationLink to="/contacts">Contacts</NavigationLink>
      ) : (
        <NavigationLink to="/">Home</NavigationLink>
      )}
    </>
  );
};
