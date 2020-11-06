<template>
  <div class="home">
    <v-container class="d-flex justify-center">
      <img alt="Vue logo" src="../assets/logo.png">
    </v-container>
    <v-container class="d-flex justify-center">
      <h1>Velkommen til {{ appName }}!</h1>
    </v-container>
    <v-container class="px-16">
      <p class="text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Id voluptatibus saepe, eaque dolore doloribus impedit amet corrupti quos ex rerum ut nemo quaerat maiores
         animi ipsam quo soluta laudantium ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupta
         s itaque vero recusandae adipisci iste veniam reiciendis quae, fugit dolorum, optio quas repellendus earum. 
         Explicabo fugit tenetur itaque id deleniti autem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magn
         am minima iusto iste ea dolorem quaerat ipsam nisi eligendi, quae ipsa sequi quis labore hic tempora dolorum a
         ccusantium laudantium facere blanditiis.</p>
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
</style>
