const bcrypt = require('bcrypt');
const UserModel = require("../models/userModel");
exports.login = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await UserModel.findOne({ email: email });
        if (!user) return res.status(400).send('Email not found');

        // Check password is correct
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if(!validPass) return res.status(400).send('Password is wrong');
        if (validPass) {
            return res.status(200).send('Login Successful');
        }
    }  catch (err) {
        console.log(`[ERROR] ${err}`);
        throw err;
    };
};