// import joi from 'joi';
   
//  const validsignup = (req, res, next) => {
//     const { body } = req;
//     let re;

//    const schema ={
//        first_name: joi.string().required(),
//        last_name: joi.string().required(),
//        email: joi.string().email().required(),
//        password: joi.string().min(9).required(),

//    }
//   const result = joi.validate(body, schema);

//   if(result.error !== null) {
//       return res.status(400).send({status: 'error', error: `${result.error.details[0].message}`})
//   }
 
//     next();
//   }
// export default validsignup;