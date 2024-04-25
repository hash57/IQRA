const { registerValidation } = require("../middlewares/userValidation");
const UserModel = require("../models/userModel");

exports.getUsers = async (req, res, next) => {
    console.log('get users called');
    try {
        setInterval(() => {
            res.status(200).json({ message: 'Success', data: { users: ['Habeeb', 'Chenna'] } });
        }, 1000);
    } catch {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.addUser = async (req, res, next) => {
    try {
        const validation = registerValidation(req.body);
        if (validation.error) {
            return res.status(400).send(validation.error.details[0].message);
        }

        //Checking if the user is already in the database
        const emailExist = await UserModel.findOne({ email: req.body.email });
        if (emailExist) return res.status(400).send('Email already exists');

        //Creating a new user and saving the new user to the database
        const user = new UserModel(req.body);
        await user.save();

        //Sending back the response with status code of success and the newly created user details
        res.status(201).json({ message: "User added successfully", data: user })

    } catch(error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};