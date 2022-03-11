import { body } from 'express-validator';

const updateProfileValidator = () => [
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
    .withMessage('Last name required')
    .bail()

    .isString()
    .withMessage('Invalid last name.')
    .bail()

    .custom((value) => /^[A-Za-z ]+$/.test(value))
    .withMessage('Invalid last name.'),
];

export default updateProfileValidator;
