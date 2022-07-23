const emailValidator = require("email-validator")
const bcrypt = require("bcrypt")
module.exports = {
    signup: async (req, res, next) => {
        var name = req.body.name
        var password = req.body.password
        var username = req.body.username
        var email = req.body.email
        if (!name) {
            res.status(400).send("please provide name")
        }

        if (!password) {
            res.status(400).send("Please provide password")
        }
        else {

            if (password.length < 8) {

                res.send("password should be 8 digits")
            }

            else {
                var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                var small = "abcdefghijklmnopqrstuvwxyz"
                var num = "0123456789"
                var spcl = [",", ":", ";", "?", "+", "&", "!", "@", "#", "$", "%", "^", "*", ".", "(", ")", "_", "+", "=", "{", "}", "[", "]", "-", "|", "<", ">", "`", "~", "'", '"', "/", "\\"]
                var b = ""
                let passwords = password.split("")
                passwords.map((el) => {

                    if (capital.includes(el)) {
                        b += "a"
                    }
                    else if (small.includes(el)) {
                        b += "b"
                    }
                    else if (num.includes(el)) {
                        b += "c"
                    }
                    else if (spcl.includes(el)) {
                        b += "d"
                    }
                })
                if (!b.includes("a") || !b.includes("b") || !b.includes("c") || !b.includes("d")) {
                    return res.status(400).send("something is missing for password formate")
                }

            }
        }
        if (!username) {
            return res.status(400).send("Please provide username")
        }
        if (!email) {
            return res.status(400).send("Please provide email")
        }
        else {
            if (!emailValidator.validate(email)) {
                return res.status(400).send("email is not valid")
            }
        }
        console.log(emailValidator.validate(email), "arr");
        password = await bcrypt.hash(password, 10);

        req.body.data = { name, email, username, password }
        next()


    },
    login: (req, res, next) => {
        let email = req.body.email
        let emailcheck = emailValidator.validate(email)
        // console.log({email,emailcheck});
        // console.log(req.body);
        if (!emailcheck) {
            return res.send("email is not valid")
        }
        next()
    }
}
