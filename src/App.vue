<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vue Logo"
          class="shrink mr-2"
          contain
          src="../public/vue.png"
          transition="scale-transition"
          width="40"
        />

        <h2 color="primary">
          VueCrashCourse
        </h2>
      </div>

      <v-spacer></v-spacer>

      <div>
        <v-tooltip v-if="!$vuetify.theme.dark" bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="primary" small fab @click="darkMode">
              <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
            </v-btn>
          </template>
          <span>Dark Mode On</span>
        </v-tooltip>
        <v-tooltip v-else bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="primary" small fab @click="darkMode">
              <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
            </v-btn>
          </template>
          <span>Dark Mode Off</span>
        </v-tooltip>
      </div>


      <v-btn
        href="https://github.com/ErlendEllefsen/vueintro"
        target="_blank"
        text
      >
        <span class="mr-2">{{ author }}</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <MainPage/>
    </v-main>
      <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>{{ appName }}</strong> — {{ author }}
    </v-col>
  </v-footer>
  </v-app>
</template>

<script>
import MainPage from './components/MainPage'

export default {
  name: 'App',

  components: {
    MainPage,
  },

  data(){
    return{
      appName : this.$AppName,
      author: this.$Author
    }
  },
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
};
</script>

<style>
.code-container{
  width: 100%;
  height: 100%;
  float: left;
}
.code-sample{
  width: 40%;
  height: 100%;
  float: left;
  margin-left: 5%;
}
.code-ex{
  width: 40%;
  height: 100%;
  float: left;
  margin-left: 10%;
}
@media (max-width: 1000px) {
      .code-ex{
            margin: 0;
            width: 100%;
       }
       .code-sample{
         margin: 0;
         width: 100%;
       }
}
.alert{
    float: left;
}
</style>