import styles from './Layout.module.css';

const Layout = ({ className, style, children }) => {
  const classes = `${styles.layout} ${className}`;

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default Layout;
