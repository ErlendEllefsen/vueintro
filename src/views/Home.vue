<template>
  <div class="home">
    <v-container class="d-flex justify-center">
      <h1>{{ appName }}</h1>
    </v-container>
    <v-container class="d-flex justify-center display-1">
      <p>Nybegynnerguide til Vue.js rammeverket.</p>
    </v-container>

    <v-container>
      <v-img src="../../public/home.png">
      </v-img>   
    </v-container> 
  </div>
</template>

<script>

export default {
  name: 'Home',
   data(){
     return {
        appName : this.$AppName
     }
  }
}
</script>
<style scoped>
h1{
  font-size: 6em;
}
</style>
