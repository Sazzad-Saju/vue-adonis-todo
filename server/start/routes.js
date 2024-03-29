'use strict'

const TaskController = require('../app/Controllers/Http/TaskController');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.get('/', () => {
//     return { greeting: 'Hello world in JSON' }
// })

// Route.post('auth/register', ({ request }) => {
//     return {
//         message: 'hello world',
//     };
// });

// Route.post('auth/register', 'UserController.register')

Route.group(() => {
        Route.post('auth/register', 'UserController.register');
        Route.post('auth/login', 'UserController.login');

        Route.get('projects', 'ProjectController.index')
            .middleware('auth'); //fetch user project
        Route.post('projects', 'ProjectController.create')
            .middleware('auth'); //create user project
        Route.delete('projects/:id', 'ProjectController.destroy')
            .middleware('auth'); //delete user project
        Route.patch('projects/:id', 'ProjectController.update').middleware('auth'); //update task

        Route.post('projects/:id/tasks', 'TaskController.create').middleware('auth'); //update task
        Route.get('projects/:id/tasks', 'TaskController.index').middleware('auth'); //update task
        Route.delete('tasks/:id', 'TaskController.destroy').middleware('auth');
        Route.patch('tasks/:id', 'TaskController.update').middleware('auth');
    })
    .prefix('api');