<template>
    <div>
        <v-btn class="my-5" color="primary" :disabled='isDisabled' v-on:click="getInfo">{{dataHent}}</v-btn>
        <v-data-table
          :headers="headers"
          :items="usernames"
          :items-per-page="4"
          class="elevation-1 my-3"
        ></v-data-table>
      </div>
</template>

<script>
export default {
    data(){
        return{
            headers: [
                {
                    text: 'Username',
                    align: 'start',
                    value: 'username',
                },
                { text: 'Name', value: 'name' },
                { text: 'E-mail', value: 'email' }
            ],
            usernames : [],
            disabeled: true,
            dataHent: 'Hent Data'
        }
    },
    computed:{
        isDisabled: function(){
            return !this.disabeled
        },
    },
    mounted(){
        if(localStorage.getItem('usernames')){
        try {
            this.usernames = JSON.parse(localStorage.getItem('usernames'))
            this.disabeledProps()
        } catch(e) {
            localStorage.removeItem('usernames');
        }
        }
    },
    methods: {
        getInfo(){
        if(!localStorage.usernames){
            const baseURI = 'https://jsonplaceholder.typicode.com/users'
            this.$http.get(baseURI)
            .then((result) => {
            const parsed = JSON.stringify(result.data)
            localStorage.setItem('usernames', parsed)
            this.usernames = JSON.parse(localStorage.getItem('usernames'))
            this.disabeledProps()
            })
        }
        },
        disabeledProps(){
            this.disabeled = false
            this.dataHent = 'Data Hentet'
        }
    }
}
</script>

<style>

</style>