import { body } from 'express-validator';
import { decryptPassword } from '../utils/bcrypt';
import dbQuery from '../config/db';

const loginValidator = () => [
  body('userEmail')
    .notEmpty()
    .withMessage('Email required.')
    .bail()

    .isEmail()
    .withMessage('Invalid email.')
    .bail()

    .normalizeEmail()

    .custom(async (value) => {
      try {
        const findUser = await dbQuery('SELECT userEmail FROM users WHERE userEmail = ?', value);

        if (findUser.length < 1) {
          return Promise.reject('Wrong credentials');
        }

        return Promise.resolve();
      } catch (err) {
        return Promise.reject(err);
      }
    })
    .bail(),

  body('userPassword')
    .notEmpty()
    .withMessage('Password required.')
    .bail()

    .isString()
    .withMessage('Invalid password.')
    .bail()

    .isLength({ min: 8 })
    .withMessage('Invalid password, minimum 8 characters.')
    .bail()

    .custom(async (value, { req }) => {
      try {
        const { userEmail } = req.body;
        const user = await dbQuery('SELECT userPassword FROM users WHERE userEmail = ?', userEmail);

        if (user.length < 1) {
          return;
        }

        const isCorrectPassword = await decryptPassword(value, user[0].userPassword);

        if (isCorrectPassword === true) {
          return Promise.resolve();
        }

        return Promise.reject('Wrong credentials');
      } catch (err) {
        return console.log(err);
      }
    }),
];

export default loginValidator;
