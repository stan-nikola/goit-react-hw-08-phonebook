import { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import { logInSchema, mailFormat } from 'constants/schema';
import { FiAlertTriangle } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { logIn } from './../redux/auth/operations';
import { authError, rememberUser } from 'redux/auth/authSlice';
import { useAuth } from 'components/hooks';
import {
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  VStack,
  InputRightElement,
  Button,
  Checkbox,
} from '@chakra-ui/react';
import {
  RegistrationTitle,
  ErrorMessage,
  RegisterLogInLink,
  RememberMeText,
} from './PageStyles/UserAuthForm.styled';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import { toastOptionsMain } from 'settings/toastOptions';

const LogIn = () => {
  const initialValues = { email: '', password: '', rememberMe: 'true' };
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [registerLoad, setRegisterLoad] = useState(false);
  const [passwordValue, setPasswordValue] = useState(0);
  const { isAuthError } = useAuth();

  useEffect(() => {
    if (isAuthError !== null) {
      toast.error(`Ups...${isAuthError}`, toastOptionsMain);
      dispatch(authError(null));
      setRegisterLoad(false);
    }
  }, [dispatch, isAuthError]);

  const handleSubmit = ({ email, password, rememberMe: isRememberMe }) => {
    setRegisterLoad(true);
    dispatch(rememberUser(isRememberMe));
    dispatch(logIn({ email, password }));
  };

  return (
    <Box pt={4} w="100%" h="100vh" bg="thirdBg" textAlign="center">
      <RegistrationTitle>Log In</RegistrationTitle>
      <Box display="flex" justifyContent="center">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={logInSchema}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={3} display="flex" align="flex-start">
                <InputGroup>
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor="email">E-mail</FormLabel>
                    <Field
                      autoComplete="off"
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                      borderRadius="none"
                      w="248px"
                      pl={2}
                      validate={value => {
                        let error;

                        if (value < 1) {
                          error = errors.email;
                        }

                        return error;
                      }}
                    />
                    <ErrorMessage>
                      {<FiAlertTriangle />}
                      {errors.email}
                    </ErrorMessage>
                  </FormControl>
                </InputGroup>
                <InputGroup>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <InputGroup size="md">
                      <Field
                        autoComplete="off"
                        as={Input}
                        id="password"
                        name="password"
                        variant="filled"
                        type={showPassword ? 'text' : 'password'}
                        borderRadius="none"
                        pl={2}
                        pr="40px"
                        w="248px"
                        validate={value => {
                          setPasswordValue(value);
                          let error;

                          if (value.match(mailFormat)) {
                            error = errors.email;
                          }

                          return error;
                        }}
                      />
                      <InputRightElement w={10}>
                        {passwordValue.length > 0 && (
                          <Button
                            size="sm"
                            w={5}
                            p={0}
                            borderRadius={50}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <BsEyeSlash /> : <BsEye />}
                          </Button>
                        )}
                      </InputRightElement>
                    </InputGroup>

                    <ErrorMessage>
                      {<FiAlertTriangle />}
                      {errors.password}
                    </ErrorMessage>
                  </FormControl>
                </InputGroup>
                <Box as="label" display="flex">
                  <Field
                    as={Checkbox}
                    id="rememberMe"
                    name="rememberMe"
                    colorScheme="teal"
                    defaultChecked={true}
                  />
                  <RememberMeText>Remember me?</RememberMeText>
                </Box>

                <Button
                  isDisabled={registerLoad}
                  isLoading={registerLoad}
                  loadingText="Working..."
                  borderRadius="none"
                  type="submit"
                  colorScheme="teal"
                  width="248px"
                >
                  Log In
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
      <Box as="p" mt={3}>
        or
        <RegisterLogInLink to="/registration">Sign Up</RegisterLogInLink>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default LogIn;
