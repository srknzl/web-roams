<template>
    <div id="main">
        <b-row v-if="loggedIn" style="height: 100%">
            <b-col>
                <p>Welcome {{ user }}</p>
            </b-col>
        </b-row>
        <b-row v-if="!loggedIn" style="height: 100%">
            <b-col
                style="padding: 1rem"
                class="d-flex justify-content-center"
            >
                <b-button style="max-height: 3rem" @click="login" variant="success">Login with google</b-button>
            </b-col>
        </b-row>
    </div>
</template>
<style>
#main {
    height: 100%;
}
</style>
<script>
import store from "../store/index";
export default {
    name: "Main",
    components: {},
    methods: {
        login() {
            store.dispatch("login", { vue: this });
        },
    },
    created() {},
    computed: {
        fetching() {
            return store.state.fetching;
        },
        users() {
            return store.state.users;
        },
        user() {
            return store.state.user;
        },
        loggedIn() {
            return store.state.loggedIn;
        },
    },
};
</script>