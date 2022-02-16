import router from '../router';
import HTTP from "../http";
export default {
    namespaced: true,
    state: {
        registerEmail: null,
        registerPassword: null,
        registerError: null,
        token: null,
        loginEmail: null,
        loginPassword: null,
        loginError: null,
    },
    actions: {
        logout({ commit }) {
            commit('setToken', null);
            router.push('/login');
        },
        about({ commit }) {
            // commit('setToken', null);
            router.push('/about');
        },
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
        login({ commit, state }) {
            commit('setloginError', null);
            return HTTP().post('/auth/login', {
                    email: state.loginEmail,
                    password: state.loginPassword,
                })
                .then(({ data }) => {
                    commit('setToken', data.token);
                    router.push('/');
                })
                .catch(() => {
                    commit('setloginError', 'Invalid Credential, Try Again!');
                })
        },
    },
    getters: {
        isLoggedIn(state) {
            return !!state.token;
        },
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setRegisterError(state, error) {
            state.registerError = error;
        },
        setRegisterEmail(state, email) {
            state.registerEmail = email;
        },
        setRegisterPassword(state, password) {
            state.registerPassword = password;
        },
        setloginError(state, error) {
            state.loginError = error;
        },
        setloginEmail(state, email) {
            state.loginEmail = email;
        },
        setloginPassword(state, password) {
            state.loginPassword = password;
        },
    },
};