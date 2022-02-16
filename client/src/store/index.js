import Vue from "vue";
import Vuex from "vuex";
import authentication from './authentication';
import projects from './projects';
import tasks from './tasks';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        baseUrl: '/api',
    },
    modules: {
        authentication,
        projects,
        tasks,
    },
    mutations: {},
    actions: {},
});