import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks';

import { UserProfileMenu } from './../UserMenu/UserProfileMenu';
import { Box } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      as="nav"
      p={3}
      pr={3}
      display="flex"
      justifyContent="space-between"
      bg="primary"
    >
      <div>
        <Navigation />
      </div>
      <div>{isLoggedIn ? <UserProfileMenu /> : <AuthNav />}</div>
    </Box>
  );
};
