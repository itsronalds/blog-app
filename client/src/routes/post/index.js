import styles from './Post.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../utils/axios';
import { format } from 'timeago.js';

const Post = () => {
  const params = useParams();
  const [data, setData] = useState({});

  const getPost = async () => {
    const { IDPost } = params;

    try {
      const request = await axios.get(`/post/${IDPost}`);
      const { success, post } = request.data;

      if (success) {
        setData(post);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getPost(), []);

  return (
    <div className={`container p-3 flex flex-col items-center ${styles.post}`}>
      {/* IMAGE */}
      <div className={`flex ${styles.postImage}`}>
        <img className="object-cover w-full rounded" src={data?.postImage} alt="" />
      </div>

      {/* POST TITLE */}
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="mt-3 text-3xl font-bold">{data?.postTitle}</h1>

          <small>{format(data?.createdAt)}</small>
        </div>

        <p className="mt-5">{data?.postDescription}</p>
      </div>

      {/* POST DESCRIPTION */}
    </div>
  );
};

export default Post;
