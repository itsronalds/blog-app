const Photo = ({ name, placeholder, register }) => {
  return (
    <div className="relative p-2.5 w-full border-2 border-gray-100 rounded flex items-center">
      <span className="text-gray-500 text-sm">{placeholder}</span>
      <input
        className="absolute inset-0 opacity-0"
        type="file"
        name={name}
        {...(register && register(name))}
      />
    </div>
  );
};

export default Photo;
