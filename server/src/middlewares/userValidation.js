const Joi = require('joi');
// Register validation
const registerValidation = (data) => {
 const schema = Joi.object({
     email:Joi.string().required().email(), 
     password: Joi.string().min(8).required(),
     phone: Joi.string().min(6).required(),
 });
 return schema.validate(data);
};

const loginValidation = (data) => {
    const {email,password} = data;
    const schema = Joi.object({
        email:Joi.string().email().messages({'string.email': 'Email must be valid', required:'Please provide an Email'}),
        password: Joi.string().min(8).required()
            .label('Password')
    })
   .xor('email', 'phone') // Mutually exclusive with either `email` or `phone`
   .with('email', ['phone']) // Required when `email` is present (`email` and `phone` are mutually exclusive)
   .with('phone',['email']); // Required when `phone` is present (`email` and `phone` are mutually exclusive)
   return schema.validate({email,password});
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation=loginValidation;