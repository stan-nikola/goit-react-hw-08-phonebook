import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from 'constants/schema';
import { FiAlertTriangle } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { register } from './../redux/auth/operations';

export const Registration = () => {
  const initialValues = { name: '', email: '', password: '' };
  const dispatch = useDispatch();

  const handleSubmit = (e, { resetForm }) => {
    dispatch(register(e));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
    >
      <Form>
        <h2>Registration Form</h2>
        <label>
          <span>Name</span>
          <Field type="text" name="name" placeholder="Bruce Lee" />
          <ErrorMessage name="name" component="p">
            {message => (
              <div>
                {<FiAlertTriangle />}
                {message}
              </div>
            )}
          </ErrorMessage>
        </label>
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

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
