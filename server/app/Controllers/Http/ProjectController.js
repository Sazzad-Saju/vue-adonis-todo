'use strict'

const Project = use('App/Models/Project')

class ProjectController {
    async index({ auth }) {
        const user = await auth.getUser();
        // console.log(user.id);
        return await user.projects().fetch();
        // return {
        //     message: 'hello'
        // }
    }
    async create({ auth, request }) {
        const user = await auth.getUser();
        const { title } = request.all();
        const project = new Project();
        project.fill({
            title,
        })
        await user.projects().save(project);
        return project;
    }
}

module.exports = ProjectController