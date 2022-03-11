import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

import Header from '../components/header';
import Home from '../routes/dashboard';
import PostForm from '../routes/posts';
import PostPage from '../routes/post';
import ProfilePage from '../routes/profile';

const Private = () => {
  const { isAuth } = useAuthContext();

  if (!isAuth) {
    return window.location('/');
  }

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/post" element={<PostForm />} />

        <Route path="/post/:IDPost" element={<PostPage />} />

        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default Private;
