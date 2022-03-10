import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/header';
import SignUp from '../routes/signup';

const Public = () => (
  <Router>
    <Header />

    <Routes>
      <Route path="/" element={<div></div>} />

      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Router>
);

export default Public;
