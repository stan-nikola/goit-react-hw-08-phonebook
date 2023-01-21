import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsOnLogOut,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isLogOutLoad = useSelector(selectIsOnLogOut);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isLogOutLoad,
  };
};
