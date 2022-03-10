const Input = ({ className, style, type, name, placeholder, register }) => {
  const classes = `w-full p-2.5 outline-0 rounded border-2 border-gray-100 text-sm transition-all focus:border-blue-500 ${className}`;

  return (
    <input
      className={classes}
      style={style}
      type={type}
      name={name}
      placeholder={placeholder}
      {...(register && register(name))}
    />
  );
};

export default Input;
