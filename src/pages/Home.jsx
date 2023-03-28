import { Box } from '@chakra-ui/react';
import { HomeLink, HomeSubTitle, HomeTitle } from './PageStyles/Home.styled';

const Home = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      pt={4}
      w="100%"
      minH="calc(100vh - 70px)"
      bg="thirdBg"
    >
      <HomeTitle>Hello</HomeTitle>
      <HomeSubTitle>
        This application allows you to store your phone contacts
      </HomeSubTitle>
      <HomeSubTitle>to use this application</HomeSubTitle>
      <HomeLink to="/login">Log In</HomeLink>
      <HomeSubTitle>or</HomeSubTitle>
      <HomeLink to="/registration">Sign Up</HomeLink>
    </Box>
  );
};

export default Home;
