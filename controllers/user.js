const { User } = require('../models/user.js')
const { setUser } = require('../services/auth.js')
const bcrypt = require('bcrypt');

async function handleUserSignUp(req, res) {
    const { name, email, password } = req.body;

    bcrypt.genSalt(10, function (err, salt) {
        if (err) return res.status(500).send("Error at the Server Side.");
        bcrypt.hash(password, salt, async function (err, hash) {
            if (err) return res.status(500).send("Error at the Server Side.");
            try {
                await User.create({
                    name,
                    email,
                    password: hash,
                });
                return res.redirect('/login');

            } catch (error) {
                return res.status(500).send("Error creating a user")
            }

        });

    });

}
async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });
    if (!userFound) {

        return res.render('login', {
            error: "Invalid username or password!",
        })
    }



    bcrypt.compare(password, userFound.password, function (err, result) {
        if (err || !result) {
            return res.render('login', {
                error: "Invalid Username or password! "
            });
        }

        const token = setUser(userFound)
        res.cookie('uid', token);
        return res.redirect('/');
    });


}



module.exports = {
    handleUserLogin,
    handleUserSignUp,
}