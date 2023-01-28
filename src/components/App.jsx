import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { LogIn } from 'pages/LogIn';
import { Registration } from 'pages/Registration';
import { refreshUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'components/hooks';
import { useEffect } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRout } from './PrivateRoute';
import { logOut } from './../redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isRememberUser } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (!isRememberUser) {
      dispatch(logOut());
    }
  }, [dispatch, isRememberUser]);

  return isRefreshing ? (
    <div>Refreshing</div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
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
    </Routes>
  );
};
