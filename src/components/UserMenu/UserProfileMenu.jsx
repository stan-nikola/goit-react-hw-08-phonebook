import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logOut } from './../../redux/auth/operations';
import { useAuth } from 'components/hooks';
import { Box } from '@chakra-ui/react';
import { UserMenuText } from './UserProfileMenu.styled';
import { Button } from '@chakra-ui/react';

export const UserProfileMenu = () => {
  const { user } = useAuth();
  const [logOutLoad, setLogOutLoad] = useState(false);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    setLogOutLoad(true);
    dispatch(logOut());
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      align-items="center"
    >
      <UserMenuText>
        Welcome,<span>{user.name}</span>
      </UserMenuText>
      <Button
        type="submit"
        onClick={handleLogOut}
        isLoading={logOutLoad}
        colorScheme="teal"
        variant="solid"
        loadingText="Bye:)"
        spinnerPlacement="start"
        width="100px"
        borderRadius="none"
      >
        LogOut
      </Button>
    </Box>
  );
};
