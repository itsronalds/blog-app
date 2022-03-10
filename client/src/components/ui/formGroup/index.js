const FormGroup = ({ className, style, label, children }) => {
  const classes = `text-sm ${className}`;

  return (
    <div className={classes} style={style}>
      <label>{label}:</label>

      <div className="mt-3">{children}</div>
    </div>
  );
};

export default FormGroup;
