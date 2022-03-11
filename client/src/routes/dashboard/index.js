import Layout from '../../components/ui/layout';
import Post from '../../components/post';
import Menu from '../../components/postsMenu/PostsMenu';

import { useState, useEffect } from 'react';
import axios from '../../utils/axios';

const Dashboard = () => {
  const [posts, setPost] = useState([]);

  const getPosts = async () => {
    try {
      const request = await axios.get('/post/get-all');
      const { success, posts } = request.data;

      if (success) {
        setPost(posts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getPosts(), []);

  return (
    <Layout className="bg-gray-50">
      <div className="container p-3">
        <Menu>
          {posts.map(
            ({
              IDPost,
              postTitle,
              postDescription,
              postImage,
              userName,
              userLastName,
              createdAt,
            }) => (
              <Post
                key={IDPost}
                IDPost={IDPost}
                title={postTitle}
                description={postDescription}
                image={postImage}
                userName={userName}
                userLastName={userLastName}
                createdAt={createdAt}
              />
            )
          )}
        </Menu>
      </div>
    </Layout>
  );
};

export default Dashboard;
