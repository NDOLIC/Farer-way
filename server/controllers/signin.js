import UserModel from '../models/user';
import {hashPassword, verifyPassword} from '../help/helpus';
import bcrypt from 'bcrypt';

const Signin = {
  
   signin(req, res) {
    console.log('heeere')
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({'message': 'Please fill the field'})
    }
    const user = UserModel.findOne(email);
    if(!user){return res.status(404).send({'message': 'User is not registered'})};
    console.log("please")
    // const salt = await bcrypt.genSalt(10);
    const hashed = bcrypt.compareSync(password, user.password);
    
    if(!hashed){return res.status(400).send({'message': 'invalid password'})};
    // if(user.password!=body.password){
    //   return res.status(404).send({'message': 'incorrect password'})};

    console.log(`User: ${user.email}`)

    const newUser = {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      token: user.token
    }
    
    return res.status(200).send(newUser);
  },
}

export default Signin;