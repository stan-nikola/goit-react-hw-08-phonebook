import { Formik, Field } from 'formik';
import { mailFormat, registerSchema } from 'constants/schema';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from 'components/hooks';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  InputRightElement,
  InputGroup,
  Checkbox,
} from '@chakra-ui/react';
import {
  ErrorMessage,
  RegistrationTitle,
  RememberMeText,
} from './PageStyles/UserAuthForm.styled';
import { rememberUser, authError } from 'redux/auth/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import { toastOptionsMain } from 'settings/toastOptions';
import { FiAlertTriangle } from 'react-icons/fi';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { authErrorCode, isAuthLoading } = useAuth();
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    rememberMe: 'true',
  };

  const ref = useRef(null);

  useEffect(() => {
    if (authErrorCode === 400) {
      toast.error(
        `User with ${ref.current?.values.email} already exist, please choose another email address`,
        toastOptionsMain
      );
      dispatch(authError(null));
    }
  }, [dispatch, authErrorCode]);

  const handleSubmit = ({
    name,
    email,
    password,
    rememberMe: isRememberMe,
  }) => {
    dispatch(register({ name, email, password }));
    dispatch(rememberUser(isRememberMe));
  };

  return (
    <Box
      pt={4}
      w="100%"
      minH="calc(100vh - 70px)"
      bg="thirdBg"
      textAlign="center"
    >
      <RegistrationTitle>Sign Up</RegistrationTitle>
      <Box display="flex" justifyContent="center">
        <Formik
          innerRef={ref}
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
                          let error;
                          if (value.length < 7) {
                            error = errors.password;
                          }
                          return error;
                        }}
                      />
                      <InputRightElement w={10}>
                        {ref.current?.values.password.length > 0 && (
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
                  isDisabled={isAuthLoading}
                  isLoading={isAuthLoading}
                  loadingText="Working..."
                  borderRadius="none"
                  type="submit"
                  colorScheme="teal"
                  width="248px"
                >
                  Sign Up
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
