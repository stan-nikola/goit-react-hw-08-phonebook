import { Formik, Field } from 'formik';
import { mailFormat, registerSchema } from 'constants/schema';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import { useState, useEffect } from 'react';
import { useAuth } from 'components/hooks';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Checkbox,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import {
  ErrorMessage,
  RegistrationTitle,
} from './PageStyles/UserAuthForm.styled';
import { rememberUser, authError } from 'redux/auth/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import { toastOptionsMain } from 'settings/toastOptions';
import { FiAlertTriangle } from 'react-icons/fi';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    name: '',
    email: '',
    password: '',
    rememberMe: 'true',
  };
  const dispatch = useDispatch();
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

  const handleSubmit = ({
    name,
    email,
    password,
    rememberMe: isRememberMe,
  }) => {
    setRegisterLoad(true);
    dispatch(register({ name, email, password }));
    dispatch(rememberUser(isRememberMe));
  };

  return (
    <Box pt={4} w="100vw" h="100vh" bg="thirdBg" textAlign="center">
      <RegistrationTitle>User registration</RegistrationTitle>
      <Box display="flex" justifyContent="center">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={registerSchema}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={3} display="flex" align="flex-start">
                <InputGroup>
                  <FormControl isInvalid={!!errors.name && touched.name}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Field
                      autoComplete="off"
                      as={Input}
                      id="name"
                      name="name"
                      type="name"
                      variant="filled"
                      borderRadius="none"
                      w="248px"
                      pl={2}
                      validate={value => {
                        let error;

                        if (value.length >= 20 || value.length <= 3) {
                          error = errors.name;
                        }

                        return error;
                      }}
                    />
                    <ErrorMessage>
                      {<FiAlertTriangle />}
                      {errors.name}
                    </ErrorMessage>
                  </FormControl>
                </InputGroup>
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

                        if (value.match(mailFormat)) {
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

                          if (value.length < 7) {
                            error = errors.password;
                          }

                          return error;
                        }}
                      />
                      <InputRightElement w={10}>
                        <Button
                          size="sm"
                          w={5}
                          p={0}
                          borderRadius={50}
                          isDisabled={passwordValue < 1}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <BsEyeSlash /> : <BsEye />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <ErrorMessage>
                      {<FiAlertTriangle />}
                      {errors.password}
                    </ErrorMessage>
                  </FormControl>
                </InputGroup>
                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="teal"
                  defaultChecked={true}
                >
                  Remember me?
                </Field>

                <Button
                  isDisabled={registerLoad}
                  isLoading={registerLoad}
                  loadingText="Working..."
                  borderRadius="none"
                  type="submit"
                  colorScheme="teal"
                  width="248px"
                >
                  Register
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Registration;
