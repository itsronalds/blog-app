const PostsMenu = ({ children }) => {
  return (
    <div className="p-3 flex flex-col justify-center items-center gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};

export default PostsMenu;
