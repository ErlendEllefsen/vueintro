<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="snackbar"
      color="success"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="black"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>


<script>
  export default {
    props:{
       text: String
    },
    data: () => ({
      snackbar: true,
    }),
  }
</script>
<style>

</style>