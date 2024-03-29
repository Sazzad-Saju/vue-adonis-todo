'use strict'
const User = use('App/Models/User');
class UserController {
    async login({ request, auth }) {
        const { email, password } = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }

    async register({ request }) {
        const { email, password } = request.all();
        // const user = await User.create({
        await User.create({
            email,
            password,
            username: email,
        });
        // console.log(email, password)
        // return {
        //     message: 'hello world',
        // };
        return this.login(...arguments);
    }
}

module.exports = UserController