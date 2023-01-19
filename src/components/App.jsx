import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { LogIn } from 'pages/LogIn';
import { Registration } from 'pages/Registration';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/registration" element={<Registration />} />
      </Route>
    </Routes>
  );
};
