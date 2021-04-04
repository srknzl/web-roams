import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import qs from "querystring";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
        loggedIn: false,
        user: "",
        serverUrl: "https://web-roams.herokuapp.com",
        wsServerUrl: process.env.NODE_ENV === "production" ? "wss://web-roams.herokuapp.com" : "ws://localhost:3000/",
        socket: null,
        googleWellKnown: "https://accounts.google.com/.well-known/openid-configuration",
        googleOpenIdData:{}
    },
    mutations: {
        login(state, { user }) {
            state.loggedIn = true;
            state.user = user;
        }
    },
    actions: {
        async init({ state }, { vue }) {
            axios.get(state.googleWellKnown).then(res => {
                state.googleOpenIdData = res.data
            }).catch(err => {
                console.log(err);
            });
        },
        async login({ dispatch, commit, state }, { vue, username, password }) {

            console.log("logging in..")

            try {
                state.socket = new WebSocket(state.wsServerUrl, 'protocol1');
                state.socket.onopen = function (event) {
                    state.socket.send('hi');
                }
                state.socket.onmessage = function (event) {
                    console.log(event.data);
                };
                commit("login", {
                    user: username
                });
                vue.$bvToast.toast(`Welcome ${username}`);
            } catch (error) {

                vue.$bvToast.toast(error.toString());
            }
        },
    },
});