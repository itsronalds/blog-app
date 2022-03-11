import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

import Header from '../components/header';
import SignUp from '../routes/signup';
import LogIn from '../routes/login';

const Public = () => {
  const { isAuth } = useAuthContext();

  if (isAuth) {
    return window.location('/home');
  }

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<LogIn />} />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default Public;
