import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'components/hooks';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRout } from './PrivateRoute';
import { refreshUser, logOut } from 'redux/auth/operations';
import { Progress } from '@chakra-ui/react';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const LogIn = lazy(() => import('pages/LogIn'));
const Registration = lazy(() => import('pages/Registration'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isRememberUser } = useAuth();

  useEffect(() => {
    if (!isRememberUser && isRefreshing) {
      dispatch(logOut());
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
          element={<PrivateRout component={Contacts} redirectTo="/" />}
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
