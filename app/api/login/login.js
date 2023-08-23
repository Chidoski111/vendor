import Cookies from 'cookies';
import clientPromise from '../../../lib/mongodb';
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing
import jwt from 'jsonwebtoken'; // Import jsonwebtoken for JWT generation

// Secret key for signing JWTs
const secretKey = 'gMqwKDOuNHsI52U9RJ3YSIaFqD82pfdAxilj6pr6iAQ'; // Replace with your actual secret key

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: 'Please provide all fields!' });
      }

      const client = await clientPromise;
      const db = client.db('Users');
      const users = await db
        .collection('Profiles')
        .find({ email })
        .toArray();

      if (users.length === 0) {
        return res
          .status(400)
          .json({ error: "User doesn't exist!" });
      }

      const user = users[0];

      // Hash the provided password and compare it to the stored hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res
          .status(400)
          .json({ error: 'Please provide the correct information' });
      }

      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, secretKey, {
        expiresIn: '1h', // Token expiration time (adjust as needed)
      });

      // Set a cookie with the username (you can include the token here if needed)
      const cookies = new Cookies(req, res);
      cookies.set('username', user.Username);

      res.status(201).json({ success: true, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
