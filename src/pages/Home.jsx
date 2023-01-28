import { Box } from '@chakra-ui/react';
import { HomeLink, HomeSubTitle, HomeTitle } from './PageStyles/Home.styled';

export const Home = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      pt={4}
      w="100vw"
      h="90vh"
      bg="thirdBg"
    >
      <HomeTitle>Hello</HomeTitle>
      <HomeSubTitle>to use this application</HomeSubTitle>
      <HomeLink to="/login">Login</HomeLink>
      <HomeSubTitle>or</HomeSubTitle>
      <HomeLink to="/registration">Register</HomeLink>
    </Box>
  );
};
