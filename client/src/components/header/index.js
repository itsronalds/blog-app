import styles from './Header.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const { isAuth, setIsAuth } = useAuthContext();
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const mobileNavHandler = () => setOpenMobileNav(!openMobileNav);

  const logOut = async () => {
    try {
      const request = await axios.get('/auth/logout');
      const { success, auth } = request.data;

      if (success) {
        navigate('/');

        setIsAuth(auth);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="bg-blue-500 p-3 text-white">
      {/* container */}
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <span className="text-3xl font-bold">Blog</span>

        {/* Navbar */}
        <nav className={`${styles.nav} ${openMobileNav && styles.open} ${isAuth && styles.isAuth}`}>
          {!isAuth && (
            <>
              <li>
                <Link className="" to="/">
                  Log in
                </Link>
              </li>

              <li>
                <Link className="" to="/signup">
                  Sign up
                </Link>
              </li>
            </>
          )}

          {isAuth && (
            <>
              <li>
                <Link className="" to="/home">
                  Home
                </Link>
              </li>

              <li>
                <Link className="" to="/profile">
                  Profile
                </Link>
              </li>

              <li>
                <Link className="" to="/post">
                  Post
                </Link>
              </li>

              <li onClick={logOut}>
                <Link className="" to="/">
                  Log out
                </Link>
              </li>
            </>
          )}
        </nav>

        {/* RESPONSIVE NAV ICON */}
        <div className={styles.navIcon} onClick={mobileNavHandler}>
          <GiHamburgerMenu className="text-2xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
