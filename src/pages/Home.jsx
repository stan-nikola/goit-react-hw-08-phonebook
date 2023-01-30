import { Box } from '@chakra-ui/react';
import { HomeLink, HomeSubTitle, HomeTitle } from './PageStyles/Home.styled';

const Home = () => {
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
      <HomeLink to="/login">Log In</HomeLink>
      <HomeSubTitle>or</HomeSubTitle>
      <HomeLink to="/registration">Sign In</HomeLink>
    </Box>
  );
};

export default Home;
