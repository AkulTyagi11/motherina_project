import AdminUser from '../models/AdminUser.js';

export async function bootstrapAdminUser() {
  const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.warn('ADMIN_EMAIL/ADMIN_PASSWORD not set; skipping admin bootstrap.');
    return;
  }

  const passwordHash = await AdminUser.hashPassword(ADMIN_PASSWORD);
  await AdminUser.findOneAndUpdate(
    { email: ADMIN_EMAIL.toLowerCase() },
    { email: ADMIN_EMAIL.toLowerCase(), passwordHash, isActive: true },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
  console.log(`Admin bootstrap ready for ${ADMIN_EMAIL}`);
}
