import { verifyJWT } from '../utils/jsonwebtoken';

export const initialSessionVerify = (req, res, next) => {
  const { SESSION_TOKEN } = req.cookies;

  if (!SESSION_TOKEN) {
    return res.status(200).json({ success: true, auth: false });
  }

  try {
    verifyJWT(SESSION_TOKEN);

    res.status(200).json({ success: true, auth: true });
  } catch (error) {
    res.status(401).json({ success: false, auth: false });
  }
};

export const sessionVerify = (req, res, next) => {
  try {
    const { SESSION_TOKEN } = req.cookies;

    const payload = verifyJWT(SESSION_TOKEN);
    req.user = payload;

    next();
  } catch (error) {
    res.status(401).json({ success: false, auth: false });
  }
};
