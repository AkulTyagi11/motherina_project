import jwt from 'jsonwebtoken';
import AdminUser from '../models/AdminUser.js';

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const admin = await AdminUser.findOne({ email: email.toLowerCase(), isActive: true });
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid admin credentials' });
    }

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ error: 'JWT_SECRET is not configured' });
    }

    const token = jwt.sign(
      { sub: admin._id.toString(), email: admin.email, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.json({ token, admin: { email: admin.email } });
  } catch (e) {
    next(e);
  }
}
