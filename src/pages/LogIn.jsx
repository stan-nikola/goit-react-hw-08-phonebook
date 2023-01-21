import { Formik, Form, Field, ErrorMessage } from 'formik';
import { logInSchema } from 'constants/schema';
import { FiAlertTriangle } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { logIn } from './../redux/auth/operations';

export const LogIn = () => {
  const initialValues1 = { email: '', password: '' };
  const dispatch = useDispatch();

  const handleSubmit = (e, { resetForm }) => {
    dispatch(logIn(e));
  };

  return (
    <Formik
      initialValues={initialValues1}
      onSubmit={handleSubmit}
      validationSchema={logInSchema}
    >
      <Form>
        <h2>Log In</h2>
        <label>
          <span>E-mail</span>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="p">
            {message => (
              <div>
                {<FiAlertTriangle />}
                {message}
              </div>
            )}
          </ErrorMessage>
        </label>
        <label>
          <span>Password</span>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div">
            {message => (
              <div>
                {<FiAlertTriangle />}
                {message}
              </div>
            )}
          </ErrorMessage>
        </label>

        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
