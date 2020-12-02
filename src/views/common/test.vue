<template>
    <div id="app">
        <h1>Likerklikk: {{ likes }}</h1>
        <v-btn v-on:click="like">Like</v-btn>
    </div>
</template>

<script>
export default {
    data(){
        return{
            likes: 0
        }
    },
    methods: {
        like: function(){
            this.likes++
        }
    }
}
</script>
