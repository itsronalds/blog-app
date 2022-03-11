import dbQuery from '../config/db';
import { encryptPassword, decryptPassword } from '../utils/bcrypt';

export const getUserProfileController = async (req, res) => {
  const { id: IDUser } = req.user;

  try {
    const user = await dbQuery('SELECT userName, userLastName FROM users WHERE IDUser = ?', IDUser);

    res.status(200).json({ success: true, user: user[0] });
  } catch (error) {
    console.error(error);
  }
};

export const updateUserProfileController = async (req, res) => {
  const { userName, userLastName, userPassword } = req.body;
  const { id: IDUser } = req.user;

  const update = {
    userName,
    userLastName,
  };

  if (userPassword !== '') {
    update.userPassword = await encryptPassword(userPassword);
  }

  try {
    await dbQuery('UPDATE users SET ? WHERE IDUser = ?', [update, IDUser]);

    res.status(200).json({ success: true, data: { userName, userLastName } });
  } catch (error) {
    console.error(error);
  }
};
