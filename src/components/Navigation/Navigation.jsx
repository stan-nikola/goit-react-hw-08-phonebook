import { NavigationLink } from './Navigation.styled';

import { useAuth } from 'components/hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </>
  );
};
