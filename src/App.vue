<template>
    <div id="app">
        <div id="nav">
            <b-row>
                <b-col>
                    <b-navbar toggleable="lg" type="dark" variant="primary">
                        <b-navbar-brand href="#">Web roams</b-navbar-brand>

                        <b-navbar-toggle
                            target="nav-collapse"
                        ></b-navbar-toggle>

                        <b-collapse id="nav-collapse" is-nav>
                            <b-navbar-nav class="align-items-center">
                                <b-nav-item to="/">Home</b-nav-item>
                                <b-nav-item v-if="loggedIn" to="profile">
                                    Profile
                                </b-nav-item>
                            </b-navbar-nav>
                            <b-navbar-nav class="ml-auto">
                                <b-button v-if="loggedIn" @click="logout"
                                    >Logout</b-button
                                >
                            </b-navbar-nav>
                        </b-collapse>
                    </b-navbar>
                </b-col>
            </b-row>
        </div>
        <router-view />
    </div>
</template>

<script>
import store from "./store/index";

export default {
    name: "App",
    created() {
        store.dispatch("init", { vue: this });
    },
    methods: {
        logout() {
            store.dispatch("logoutAction", { vue: this });
        },
    },
    components: {},
    computed: {
        user() {
            return store.state.user;
        },
        loggedIn() {
            return store.state.loggedIn;
        },
    },
};
</script>

<style>
#app {
    height: 100vh;
}
</style>
