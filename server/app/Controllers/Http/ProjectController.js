'use strict'

const Project = use('App/Models/Project')
const AuthorizationService = use('App/Services/AuthorizationService')

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
    async destroy({ auth, request, params }) {
        const user = await auth.getUser();
        const { id } = params;
        const project = await Project.find(id);
        // if (project.user_id != user.id) {
        //     return Response.status(403);
        // }
        AuthorizationService.verifyPermission(project, user)
        await project.delete();
        return project;
    }
}

module.exports = ProjectController