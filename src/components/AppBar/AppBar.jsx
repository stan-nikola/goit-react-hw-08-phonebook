import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks';

import { UserProfileMenu } from './../UserMenu/UserProfileMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserProfileMenu /> : <AuthNav />}
    </>
  );
};
