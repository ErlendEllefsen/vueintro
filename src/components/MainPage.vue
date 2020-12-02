<template>
  <div id="app" class="no-transition">
    <v-stepper v-model="e1" class="no-transition">
    <v-stepper-header>
      <v-stepper-step 
        step="1" 
        editable
        class="caption" 
        @click="$router.push({path: '/'}).catch(err => {})" 
      >
      Home
      </v-stepper-step>
       <v-divider></v-divider>
      <v-stepper-step 
        step="2" 
        editable
        class="caption" 
        @click="$router.push({path: '/intro'}).catch(err => {})" 
      >
      Intro
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step 
        step="3" 
        editable
        class="caption" 
        @click="$router.push({path: '/instance'}).catch(err => {})" 
      >
      Instance
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step 
        step="4" 
        editable
        class="caption" 
        @click="$router.push({path: '/form'}).catch(err => {})" 
      >
      Form Validation
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step 
        step="5" 
        editable
        class="caption" 
        @click="$router.push({path: '/unit'}).catch(err => {})" 
      >
      Unit
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step 
        step="6" 
        editable
        class="caption" 
        @click="$router.push({path: '/memory'}).catch(err => {})" 
      >
      Memory
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step 
        step="7" 
        editable
        class="caption" 
        @click="$router.push({path: '/storage'}).catch(err => {})" 
      >
      Storage
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <div class="test">
        <v-stepper-content step="1">
          <router-view />
        </v-stepper-content>
        <v-stepper-content step="2">
          <router-view />
        </v-stepper-content>
        <v-stepper-content step="3">
          <router-view />
        </v-stepper-content>
        <v-stepper-content step="4">
          <router-view />
        </v-stepper-content>
        <v-stepper-content step="5">
          <router-view />
        </v-stepper-content>
        <v-stepper-content step="6">
          <router-view />
        </v-stepper-content>
        <v-stepper-content step="7">
          <router-view />
        </v-stepper-content>
      </div>
    </v-stepper-items>
  </v-stepper>
  </div>
</template>

<script>
  export default {
    name: 'MainPage',
    data () {
      return {
        e1: 1,
      }
    },
     created() {
    this.getStepper()
  },

  methods: {
    getStepper() {
      const path = this.$route.path.split('/')
      if(path[path.length-1].toLowerCase() === 'your-router-path') {
        this.e1 = 1
        // this.e1 = 1 = <v-stepper-step step="1" />
        // this.e1 = 2 = <v-stepper-step step="2" />
        // and so on.
      }
    }
  }

  }
</script>
<style>
.no-transition .v-stepper__content  { transition: none !important; }
</style>
