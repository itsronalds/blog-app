const Radio = ({ name, value, isChecked = false, register, children }) => (
  <div className="mr-5">
    <input
      type="radio"
      name={name}
      value={value}
      defaultChecked={isChecked}
      {...(register && register(name))}
    />

    <span className="ml-1 text-gray-900 text-sm">{children}</span>
  </div>
);

export default Radio;
