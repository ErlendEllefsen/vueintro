<template>
  <div class="storage">
    <v-container class="code-container">
     <div class="code-sample">
       <Code code="
data(){
  return{
    name: ''
  }
},
mounted(){
  if(localStorage.name) this.name = localStorage.name
},
watch: {
  name(newName){
    localStorage.name = newName
  }
}"/>
     </div>
     <div class="code-ex">
       <h1>Enkel localStorage</h1>
        <v-text-field
          v-model="name"
          :couter="10"
          label="Navn"
          required
        >
        </v-text-field>
     <h1>Output: {{name}}</h1>
     <v-btn color="warning" class="my-4" @click="clear">Clear Storage</v-btn>
     </div>
    </v-container>
    <v-container class="code-container">
     <div class="code-sample">
       <Code code="
mounted(){
  if(localStorage.getItem('usernames')){
    try {
      this.usernames = JSON.parse(localStorage.getItem('usernames'))
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
        this.usernames = JSON.parse(localStorage.getItem('usernames'));
      })
  }
}"/>
     </div>
     <div class="code-ex">
       <h1>{{ title }}</h1>
       <Table />
     </div>
    </v-container>
     <v-container class="code-container">
     <div class="code-sample">
       <Code code="
export default new Vuex.Store({
  state: {
    title: 'Lagre API kall',
    titleVuex: 'Vuex',
    count: 0
  },
  mutations: {
    increment (state) {
      var i = 0;
      while (i < 100) {
        (function(i) {
          setTimeout(function() {
            state.count++
          }, 100 * i)
        })(i++)
      }
    }
  }
})"/>
     </div>
     <div class="code-ex">
       <h1>{{ titleVuex }}</h1>
        <v-btn color="success" class="my-4" @click="countUp">Count</v-btn>
       <h3>{{count}}</h3>
     </div>
    </v-container>
    
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Code from './common/Code.vue'
import Table from './common/Table.vue'
export default {
  data(){
    return{
      name: ""
    }
  },
  computed:
  mapState([
    'title',
    'titleVuex',
    'count'
  ]),
  components:{
    Code,
    Table
  },
  mounted(){
    if(localStorage.name) this.name = localStorage.name
  },
  watch: {
    name(newName){
      localStorage.name = newName
    }
  },
  methods:{
    clear(){localStorage.clear()},
    countUp(){this.$store.commit('increment')}
  }
}
</script>
