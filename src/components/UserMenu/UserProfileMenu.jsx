import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logOut } from './../../redux/auth/operations';
import { useAuth } from 'components/hooks';
import { Box } from '@chakra-ui/react';
import { UserMenuButton, UserMenuText } from './UserProfileMenu.styled';

import { BiLogOut } from 'react-icons/bi';

export const UserProfileMenu = () => {
  const { user } = useAuth();
  const [logOutLoad, setLogOutLoad] = useState(false);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    setLogOutLoad(true);
    dispatch(logOut());
  };

  return (
    <Box display="flex" alignItems="flex-end" align-items="center">
      {logOutLoad ? (
        <UserMenuText>
          Bye <span>{user.name}</span>
        </UserMenuText>
      ) : (
        <UserMenuText>
          Welcome,<span>{user.name}</span>
        </UserMenuText>
      )}
      <UserMenuButton
        type="submit"
        onClick={handleLogOut}
        isLoading={logOutLoad}
        background="transparent"
        // spinnerPlacement="start"
      >
        <BiLogOut />
      </UserMenuButton>
    </Box>
  );
};
