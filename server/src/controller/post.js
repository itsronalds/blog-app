import dbQuery from '../config/db';
import cloudinary from '../config/cloudinary';

import { toBase64 } from '../utils/image';

export const uploadPostController = async (req, res) => {
  const { postTitle, postDescription } = req.body;
  const { postImage } = req.files;
  const { id: IDUser } = req.user;

  try {
    const uploaded = await cloudinary.uploader.upload(toBase64(postImage), {
      folder: 'blog/posts',
    });

    const post = {
      IDUser,
      postTitle,
      postDescription,
      postImage: uploaded.secure_url,
    };

    await dbQuery('INSERT INTO posts SET ?', post);

    res.status(200).json({ success: true, message: '¡Successful!' });
  } catch (error) {
    console.log(error);
  }
};

export const getAllPostsController = async (req, res) => {
  try {
    const posts = await dbQuery(
      'SELECT posts.IDPost, posts.postTitle, posts.postDescription, posts.postImage, posts.createdAt, users.userName, users.userLastName, users.userPhoto FROM posts INNER JOIN users ON posts.IDUser = users.IDUser'
    );

    res.status(200).json({ success: true, posts });
  } catch (error) {
    console.log(error);
  }
};

export const getOnePost = async (req, res) => {
  const { IDPost } = req.params;

  try {
    const post = await dbQuery(
      'SELECT IDPost, postTitle, postDescription, postImage, createdAt  FROM posts WHERE IDPost = ?',
      IDPost
    );

    res.status(200).json({ success: true, post: post[0] });
  } catch (error) {
    console.error(error);
  }
};
