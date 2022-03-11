import { body } from 'express-validator';

const uploadPostValidator = () => [
  body('postTitle')
    .notEmpty()
    .withMessage('Title required')
    .bail()

    .isString()
    .withMessage('Invalid title.')
    .bail()

    .custom((value) => /^[A-Za-z ]+$/.test(value))
    .withMessage('Invalid title.')
    .bail(),

  body('postDescription')
    .notEmpty()
    .withMessage('Description required')
    .bail()

    .isString()
    .withMessage('Invalid description.')
    .bail(),

  body('postImage')
    .custom((value, { req }) => {
      if (req.files) {
        const { postImage } = req.files;

        return postImage.mimetype.startsWith('image/') === true ? true : false;
      }
    })
    .withMessage('Only images'),
];

export default uploadPostValidator;
