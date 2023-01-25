import { Formik, Field } from 'formik';
import { mailFormat, registerSchema } from 'constants/schema';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import {
  ErrorIcon,
  ErrorMessage,
  RegistrationTitle,
} from './Registration.styled';

export const Registration = () => {
  const [show, setShow] = useState(false);
  const initialValues = { name: '', email: '', password: '' };
  const dispatch = useDispatch();
  const [registerLoad, setRegisterLoad] = useState(false);

  const handleSubmit = (e, { resetForm }) => {
    setRegisterLoad(true);
    dispatch(register(e));
    resetForm();
  };

  return (
    <Box pt={4} w="100vw" h="90vh" bg="thirdBg" textAlign="center">
      <RegistrationTitle>User registration</RegistrationTitle>
      <Box display="flex" justifyContent="center">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={registerSchema}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} display="flex" align="flex-start">
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
                      {<ErrorIcon />}
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
                        type={show ? 'text' : 'password'}
                        borderRadius="none"
                        pl={2}
                        pr={5}
                        w="248px"
                        validate={value => {
                          let error;

                          if (value.length < 7) {
                            error = errors.password;
                          }

                          return error;
                        }}
                      />
                      <InputRightElement width="4.5rem">
                        <Button
                          size="sm"
                          borderRadius={50}
                          onClick={() => setShow(!show)}
                        >
                          {show ? <BsEyeSlash /> : <BsEye />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>

                    <ErrorMessage>
                      {<ErrorIcon />}
                      {errors.password}
                    </ErrorMessage>
                  </FormControl>
                </InputGroup>
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
    </Box>
  );
};
