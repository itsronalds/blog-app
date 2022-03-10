import { Children, cloneElement, isValidElement } from 'react';

const RadioGroup = ({ className, style, label, value, register, children }) => {
  const classes = ` ${className}`;

  const elements = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const props = { name: value, register };

      return cloneElement(child, props);
    }

    return child;
  });

  return (
    <div className={classes} style={style}>
      <label className="text-gray-900 text-sm">{label}:</label>

      <div className="flex mt-3">{elements}</div>
    </div>
  );
};

export default RadioGroup;
