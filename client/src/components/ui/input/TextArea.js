const TextArea = ({ className, style, name, placeholder, register }) => {
  const classes = `w-full p-2.5 outline-0 rounded border-2 border-gray-100 text-sm transition-all focus:border-blue-500 ${className}`;

  return (
    <textarea
      className={classes}
      style={style}
      name={name}
      placeholder={placeholder}
      {...(register && register(name))}
      rows={8}
    />
  );
};

export default TextArea;
