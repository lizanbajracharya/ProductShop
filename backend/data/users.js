import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Lizan User',
    email: 'Lizan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Bajra User',
    email: 'Bajra@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
