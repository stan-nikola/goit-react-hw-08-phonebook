import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsRememberUser,
  selectAuthErrorCode,
  selectToken,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isRememberUser = useSelector(selectIsRememberUser);
  const authErrorCode = useSelector(selectAuthErrorCode);
  const isToken = useSelector(selectToken);
  return {
    isLoggedIn,
    isRefreshing,
    user,

    isRememberUser,
    authErrorCode,
    isToken,
  };
};
