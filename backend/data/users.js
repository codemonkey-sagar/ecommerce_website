import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('admin', 10), // Encrypting passsword with bcrypt
    isAdmin: true,
  },
  {
    name: 'Sagar',
    email: 'sagar@admin.com',
    password: bcrypt.hashSync('admin', 10), // Encrypting passsword with bcrypt
    isAdmin: true,
  },
  {
    name: 'Shiv',
    email: 'shiv@user.com',
    password: bcrypt.hashSync('admin', 10), // Encrypting passsword with bcrypt
    isAdmin: false,
  },
];

export default users;
