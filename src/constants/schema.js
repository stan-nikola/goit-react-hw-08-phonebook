import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup
    .string()
    .min(4, 'Name must be at least 4 letters long')
    .max(16, 'Name must be not longer than 16 letters')
    .required(
      "Please enter name. For example Adrian, Jacob Mercer, Charles de Batz, Castelmore d'Artagnan"
    ),
  email: yup
    .string()
    .email('Must be a valid email Example: my.mail@mail.com')
    .required('Please enter e-mail '),
  password: yup
    .string()
    .min(6, 'Password must contain at least 7 characters')
    .required('Please enter password'),
});

export const logInSchema = yup.object({
  email: yup
    .string()
    .email('Must be a valid email Example: my.mail@mail.com')
    .required('Please enter email'),
  password: yup.string().required('Please enter password'),
});

export const mailFormat = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
