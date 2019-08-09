import moment from 'moment';
import uuid from 'uuid';
import token from '../help/token';

class User {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.users = [
        {
          id:1,
          first_name:'kararine',
          last_name:'Emma',
          email:'tkararine@gmail.com',
          password:'123',
          is_admin:true,
          },
          {
            id:2,
            first_name: "umurisa",
            last_name: "karame",
            email: "umwaline@gmail.com",
            password: "456",
            is_admin:false,
          },
    ];
  }
  /**
   * 
   * @returns {object} reflection object
   */
  create(first_name,last_name,email, hashed) {
    const userid = this.users.length +1;
    const newUser = {
      id: userid,
      first_name:first_name,
      last_name:last_name,
      email:email,
      password:hashed,
      is_admin:false,
      token: token(userid,false)
    };
    this.users.push(newUser);
    return newUser
  }
  /**
   * 
   * @param {uuid} id
   * @returns {object} reflection object
   */
  findOne(email) {
    return this.users.find(user => user.email === email);
}
/**
 * @returns {object} returns all reflections
 */
findAll() {
  return this.users;
}

}
export default new User();