// import image from '../../assets/images/image.jpg';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

const Post = ({ IDPost, title, image, description, userName, userLastName, createdAt }) => {
  return (
    <Link
      to={`/post/${IDPost}`}
      className="bg-white w-80 shadow rounded transition-all hover:scale-95 cursor-pointer"
    >
      {/* IMG */}
      <div className="h-72 flex">
        <img className="w-full object-cover rounded" src={image} alt="" />
      </div>

      <div className="pb-3 px-3">
        {/* TITLE */}
        <h3 className="my-3 text-2xl font-bold">{title}</h3>

        {/* DESCRIPTION */}
        <p>{description.length > 25 ? description.slice(0, 25) + '...' : description}</p>

        <hr className="my-3 border-gray-200" />

        <div className="flex items-center justify-between">
          <div>
            <img className="w-7 h-7 rounded-full" src={image} alt="" />

            <small className="ml-3">
              {userName} {userLastName}
            </small>
          </div>

          <small>{format(createdAt)}</small>
        </div>
      </div>
    </Link>
  );
};

export default Post;
