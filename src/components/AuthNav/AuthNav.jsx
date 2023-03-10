import { BiLogIn } from 'react-icons/bi';
import { AuthLink } from './AuthNav.styled';
import { Box } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Box as="div">
      <AuthLink to="/login">
        <span>Log In</span> <BiLogIn />
      </AuthLink>
    </Box>
  );
};
