// UsersToFollow.vue

<template>
    <div class="col-md-8 posts">



        <p v-if="!users.length">No Users To Follow</p>
        <div v-if="users.length">
            <div v-for="(user, index) in users">
                {{ user.name }}
            </div>
        </div>



    </div>
</template>
<script>
export default {
    data() {
        return {
            users: []
        }
    },
    mounted() {
        axios.get('/users').then((resp => {
            console.log(resp);
            this.users = resp.data;
        }));
    }
}
</script>