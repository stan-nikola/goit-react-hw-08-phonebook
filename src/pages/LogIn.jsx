import { useState } from 'react';
import { Formik, Field } from 'formik';
import { logInSchema, mailFormat } from 'constants/schema';

import { useDispatch } from 'react-redux';
import { logIn } from './../redux/auth/operations';
import { rememberUser } from 'redux/auth/authSlice';
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
  ErrorIcon,
  ErrorMessage,
} from './PageStyles/UserAuthForm.styled';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

export const LogIn = () => {
  const initialValues = { email: '', password: '', rememberMe: true };
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [registerLoad, setRegisterLoad] = useState(false);
  const [passwordValue, setPasswordValue] = useState(0);

  const handleSubmit = (
    { email, password, rememberMe: isRememberMe },
    { resetForm }
  ) => {
    dispatch(logIn({ email, password }));
    setRegisterLoad(true);
    dispatch(rememberUser(isRememberMe));
    resetForm();
  };

  return (
    <Box pt={4} w="100vw" h="90vh" bg="thirdBg" textAlign="center">
      <RegistrationTitle>Log In</RegistrationTitle>
      <Box display="flex" justifyContent="center">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={logInSchema}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} display="flex" align="flex-start">
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
                          console.log('111111');
                          error = errors.email;
                        }

                        return error;
                      }}
                    />
                    <ErrorMessage>
                      {<ErrorIcon />}
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
                        pr={5}
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
                      <InputRightElement width="4.5rem">
                        <Button
                          size="sm"
                          borderRadius={50}
                          isDisabled={passwordValue < 1}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <BsEyeSlash /> : <BsEye />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>

                    <ErrorMessage>
                      {<ErrorIcon />}
                      {errors.password}
                    </ErrorMessage>
                  </FormControl>
                </InputGroup>
                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="purple"
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
                  Log In
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};
