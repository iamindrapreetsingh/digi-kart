import bcrypt from 'bcryptjs';

const users = [
    {
      name: 'Ashhad Imam',
      email: 'ashhadimam07@gmail.com',
      password: bcrypt.hashSync('7007663795', 10),
      isAdmin: true,
    },
    {
      name: 'Indrapreet Singh',
      email: 'indrpreetsingh41@gmail.com',
      password: bcrypt.hashSync('123456', 10),
    },
    {
      name: 'Romok Das',
      email: 'komorsad2@gmail.com',
      password: bcrypt.hashSync('123456', 10),
    },
  ]
  
  export default users;