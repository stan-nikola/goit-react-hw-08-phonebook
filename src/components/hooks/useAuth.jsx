import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsOnLogOut,
  selectIsRememberUser,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isLogOutLoad = useSelector(selectIsOnLogOut);
  const isRememberUser = useSelector(selectIsRememberUser);
  return {
    isLoggedIn,
    isRefreshing,
    user,
    isLogOutLoad,
    isRememberUser,
  };
};
