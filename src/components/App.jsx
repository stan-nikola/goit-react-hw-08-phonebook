import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'components/hooks';

import { RestrictedRoute } from './routes/RestrictedRoute';
import { PrivateRoute } from './routes/PrivateRoute';
import { refreshUser, logOut } from 'redux/auth/operations';
import { Progress } from '@chakra-ui/react';
import { contactsItems } from 'redux/contacts/contactsSlice';
import NotFound from 'pages/NotFound/NotFound';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const LogIn = lazy(() => import('pages/LogIn'));
const Registration = lazy(() => import('pages/Registration'));
// const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isRememberUser } = useAuth();

  useEffect(() => {
    if (!isRememberUser && isRefreshing) {
      dispatch(logOut());
      dispatch(contactsItems([]));
      return;
    }
  }, [dispatch, isRefreshing, isRememberUser]);

  useEffect(() => {
    if (isRememberUser) {
      dispatch(refreshUser());
    }
  }, [dispatch, isRememberUser]);

  return isRefreshing ? (
    <Progress size="xs" isIndeterminate />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          path="/"
          element={<RestrictedRoute component={Home} redirectTo="/contacts" />}
        />
        {/* <Route index path="/" element={<Home />} /> */}
        <Route
          path="/contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/" />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={LogIn} redirectTo="/contacts" />}
        />
        <Route
          path="/registration"
          element={
            <RestrictedRoute component={Registration} redirectTo="/contacts" />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
