import { validationResult } from 'express-validator';

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const err = errors.array().map((err) => ({
    msg: err.msg,
  }));

  res.json({ errors: err });
};

export default validate;
