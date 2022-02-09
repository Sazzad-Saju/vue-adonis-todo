'use strict'
const User = use('App/Models/User');
class UserController {
    async register({ request }) {
        const { email, password } = request.all();
        const user = await User.create({
                email,
                password,
                username: email,
            })
            // console.log(email, password)
            // return {
            //     message: 'hello world',
            // };
        return user;
    }
}

module.exports = UserController