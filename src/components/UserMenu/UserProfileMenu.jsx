import { useAuth } from 'components/hooks';
import { useDispatch } from 'react-redux';
import { logOut } from './../../redux/auth/operations';

export const UserProfileMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <div>
      <p>Hello,{user.name}</p>
      <button type="submit" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
};
