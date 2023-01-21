import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/registration">Registration</NavLink>
    </>
  );
};
