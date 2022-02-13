import router from '../router';
import HTTP from "../http";
export default {
    namespaced: true,
    state: {
        registerEmail: null,
        registerPassword: null,
        token: null,
        registerError: null,
    },
    actions: {
        register({ commit, state }) {
            commit('setRegisterError', null);
            return HTTP().post('/auth/register', {
                    email: state.registerEmail,
                    password: state.registerPassword,
                })
                .then(({ data }) => {
                    commit('setToken', data.token);
                    router.push('/');
                })
                .catch(() => {
                    commit('setRegisterError', 'Ops! Something went wrong!');
                })
        },
    },
    getters: {
        isLoggedIn(state) {
            return !!state.token;
        },
    },
    mutations: {
        setRegisterError(state, error) {
            state.registerError = error;
        },
        setToken(state, token) {
            state.token = token;
        },
        setRegisterEmail(state, email) {
            state.registerEmail = email;
        },
        setRegisterPassword(state, password) {
            state.registerPassword = password;
        },
    },
};