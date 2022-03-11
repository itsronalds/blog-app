import { body } from 'express-validator';
import dbQuery from '../config/db';

const signupValidator = () => [
  body('userName')
    .notEmpty()
    .withMessage('Name required')
    .bail()

    .isString()
    .withMessage('Invalid name.')
    .bail()

    .custom((value) => /^[A-Za-z ]+$/.test(value))
    .withMessage('Invalid name.')
    .bail(),

  body('userLastName')
    .notEmpty()
    .withMessage('Name required')
    .bail()

    .isString()
    .withMessage('Invalid name.')
    .bail()

    .custom((value) => /^[A-Za-z ]+$/.test(value))
    .withMessage('Invalid name.')
    .bail(),

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

        if (findUser.length > 0) {
          return Promise.reject('User is already registered.');
        }

        return Promise.resolve();
      } catch (err) {
        return Promise.reject(err);
      }
    }),

  body('userPassword')
    .notEmpty()
    .withMessage('Password required.')
    .bail()

    .isString()
    .withMessage('Invalid password.')

    .isLength({ min: 8 })
    .withMessage('Invalid password, minimum 8 characters.'),

  body('userAvatar')
    .custom((value, { req }) => {
      if (req.files) {
        const { userPhoto } = req.files;

        return userPhoto.mimetype.startsWith('image/') === true ? true : false;
      }
    })
    .withMessage('Only images.'),
];

export default signupValidator;
