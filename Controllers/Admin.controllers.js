
import dotenv from 'dotenv'
dotenv.config();

export const loginAdmin = (req, res) => {
  const { username, password } = req.body;

  const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    return res.status(200).json({ username,message: 'Login successful' });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
};

 ;
