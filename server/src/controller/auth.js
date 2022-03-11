import dbQuery from '../config/db';
import cloudinary from '../config/cloudinary';

import { toBase64 } from '../utils/image';
import { createJWT } from '../utils/jsonwebtoken';
import { encryptPassword, decryptPassword } from '../utils/bcrypt';

export const signUpController = async (req, res) => {
  const { userName, userLastName, userGender, userEmail, userPassword } = req.body;
  const { userPhoto } = req.files;

  try {
    const uploaded = await cloudinary.uploader.upload(toBase64(userPhoto), {
      folder: 'blog/users',
    });

    const user = {
      userName,
      userLastName,
      userGender: userGender === 'male' ? 'M' : userGender === 'female' ? 'F' : 'O',
      userEmail,
      userPassword: await encryptPassword(userPassword),
      userPhoto: uploaded.secure_url,
    };

    await dbQuery('INSERT INTO users SET ?', user);

    res.status(200).json({ success: true, message: '¡Successful registration!' });
  } catch (error) {
    console.log(error);
  }
};

export const logInController = async (req, res) => {
  const { userEmail } = req.body;

  try {
    const user = await dbQuery('SELECT IDUser FROM users WHERE userEmail = ?', userEmail);
    const { IDUser } = user[0];

    const JWT = createJWT(IDUser);

    if (JWT) {
      console.log('Hola');
      res.status(200).cookie('SESSION_TOKEN', JWT).json({ success: true, auth: true });
    }
  } catch (error) {
    console.log(error);
  }
};

export const logOutController = async (_req, res) => {
  res.status(200).clearCookie('SESSION_TOKEN').json({
    success: true,
    auth: false,
  });
};
