<template>
  <div class="instance">

    <v-container class="code-container">
     <div v-highlight class="code-sample">
      <pre class="language-javascript">
        <code>
/* main.js */
import Vue from 'vue'
import App from './App.vue'

Vue.prototype.$AppName = 'VueCrashCourse'</code>
      </pre>
     </div>
     <div class="code-ex">
       <h1>Globale verdier</h1>
       <p>Dette er ett lite utklipp fra main.js.
       </p>
       <p>
         Alt som skal være brukt globalt blir importert her. Man kan også deklarere
         globale variabler.
       </p>
       <p>
         " Vue.prototype.$AppName = 'VueCrashCourse' " - Her deklarers navnet på appen.
         Alle komponenter vil nå ha tilgang til å hente appnavnet. Neste kodesnutt viser
         hvordan man henter ut dette.
       </p>
     </div>
    </v-container>
    <v-container class="code-container">
     <div v-highlight class="code-sample">
      <pre class="language-javascript">
        <code> 
/* Instance.vue */        
export default {
   data(){
     return {
        appName : this.$AppName
     }
   }
}</code>
      </pre>
     </div>
     <div class="code-ex">
       <h1>Hente globale verdier</h1>
       <p>{{appNameDisplay}}</p>
       <p>Blir:</p>
       <p>Appen heter: {{appName}}</p>
     </div>
    </v-container>
    <v-container class="code-container">
     <div v-highlight class="code-sample">
      <pre class="language-javascript">
        <code>
/*main.js*/
Vue.prototype.$http = axios

/*Instance.vue*/
methods: {
  getInfo: function (event) {
    const baseURI = 'https://jsonplaceholder.typicode.com/users'
    this.$http.get(baseURI)
    .then((result) => {
      this.usernames = result.data
    })
    if(event){
      this.eventTagName = event.target.tagName
    }
  }
}</code>
      </pre>
     </div>
     <div class="code-ex">
       <h1>Hente data fra API</h1>
        <div>
        <v-btn color="primary" v-on:click="getInfo">Hent data</v-btn>
        <v-data-table
          :headers="headers"
          :items="usernames"
          :items-per-page="4"
          class="elevation-1 my-3"
        ></v-data-table>
      </div>
     </div>
    </v-container>
     <v-container class="code-container">
     <div v-highlight class="code-sample">
      <pre class="language-javascript">
        <code>
/*main.js*/
Vue.prototype.$makeUpperCase = function(prop) {
  this[prop] = this[prop].toUpperCase()
}

Vue.prototype.$makeLowerCase = function(prop) {
  this[prop] = this[prop].toLowerCase()
} 

/*Instance.vue*/
changeUpper: function (event) { 
  this.$makeUpperCase('prop')
},
changeLower: function (event) { 
  this.$makeLowerCase('prop')
}</code>
      </pre>
     </div>
     <div class="code-ex">
       <h1>Metoder</h1>
      <p class="my-3">Det går også ann å ha globale metoder. Disse kan kalles på over hele instansen. </p>
       <v-btn class="mr-4" color="success" v-on:click="changeUpper">Upper</v-btn>
       <v-btn color="error" v-on:click="changeLower">Lower</v-btn>
       <p class="my-3"> {{prop}} </p>
     </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Instance',
  data(){
    return{
      appName : this.$AppName,
      appNameDisplay : '<p>Appen heter: {{appName}}</p>',
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
      eventTagName : '',
      prop : 'Do ut aliqua eu anim elit incididunt adipisicing commodo. Voluptate laborum pariatur aliquip sint anim ullamco veniam qui sint quis sit commodo qui fugiat. Ullamco aliqua fugiat amet commodo ea nisi cillum quis. Deserunt ex exercitation nulla labore ea incididunt cupidatat consectetur eu commodo. Nulla aliquip aute et dolore pariatur nisi.Nisi ex incididunt aliqua ex est sint magna quis deserunt proident. Qui commodo ex officia anim aute aliquip excepteur quis. Officia tempor do exercitation ex aliquip velit quis veniam et enim et dolor aliqua. Est consequat laboris minim dolore aute. Est anim anim proident dolore. Exercitation sit cupidatat exercitation duis deserunt fugiat est.'
    }
  },
  methods: {
    getInfo: function (event) {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI)
      .then((result) => {
        this.usernames = result.data
      })
      if(event){
        this.eventTagName = event.target.tagName
      }
    },
    changeUpper: function () { 
      this.$makeUpperCase('prop')
    },
    changeLower: function () { 
      this.$makeLowerCase('prop')
    }
  }
}
</script>

<style scoped>

</style>
