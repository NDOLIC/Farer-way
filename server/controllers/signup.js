// import UserModel from '../models/user';
// import bcrypt from 'bcrypt';

// const Signup = {
//   async signup(req, res) {
//    let { first_name,last_name,email,password  } = req.body;
//     first_name = first_name.trim();
//     last_name = last_name.trim();

//     const  user_model = UserModel.users;

//     if (!first_name || !last_name || !email && !password) {
//       return res.status(400).send({'message': 'All fields are required'})
//     }
//     let taken_email = user_model.find( u => u.email=== email);
//     if(taken_email)
//     return res.status(400).send({'message': 'Email already in use'})
//     // const hashPassword = pw => {
//     //   const salt = genSaltSync(12);
//     //   return hashSync(pw, salt);
//     // };
//       const salt = await bcrypt.genSalt(10);
//       const hashed = await bcrypt.hash(password, salt);
//    // console.log(genPassword(body.password))
//     const user = await UserModel.create(first_name,last_name,email, hashed);
//     console.log(user)
//     // const {password, ...user2} = user
//     const user$ = { 
//       first_name: user.first_name,
//       last_name: user.last_name,
//       email: user.email,
//       is_admin: user.is_admin,
//       token: user.token }
    
//     return res.status(201).send(user$);
//   },
// }

// export default Signup;