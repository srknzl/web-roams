<template>
    <div id="users">
        <div v-for="(user, i) in users" :key="i">
            <p>{{ user.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            users: [
                {
                    name: "serkan",
                },
                {
                    name: "mustafa",
                },
            ],
        };
    },
};
</script>

<style>
</style>