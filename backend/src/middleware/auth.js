import jwt from 'jsonwebtoken';
import AdminUser from '../models/AdminUser.js';

export async function requireAdmin(req, res, next) {
  try {
    const header = req.get('authorization') || '';
    const [, token] = header.match(/^Bearer\s+(.+)$/i) || [];

    if (!token) {
      return res.status(401).json({ error: 'Admin authentication required' });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return res.status(500).json({ error: 'JWT_SECRET is not configured' });
    }

    const payload = jwt.verify(token, secret);
    const admin = await AdminUser.findById(payload.sub);
    if (!admin || !admin.isActive) {
      return res.status(401).json({ error: 'Admin authentication required' });
    }

    req.admin = admin;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Admin authentication required' });
  }
}
