import styles from './Header.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const mobileNavHandler = () => setOpenMobileNav(!openMobileNav);

  return (
    <header className="bg-blue-500 p-3 text-white">
      {/* container */}
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <span className="text-3xl font-bold">Blog</span>

        {/* Navbar */}
        <nav className={`${styles.nav} ${openMobileNav && styles.open}`}>
          <li>
            <Link className="" to="/">
              Log in
            </Link>
          </li>

          <li>
            <Link className="" to="/">
              Sign up
            </Link>
          </li>
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
