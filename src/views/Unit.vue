<template>
  <div>
    <v-container class="code-container">
     <div v-highlight class="code-sample">
      <pre class="language-javascript">
        <code></code>
      </pre>
     </div>
     <div class="code-ex">
       <v-btn class="success mr-4" @click="number++">Up</v-btn>
       <v-btn class="warning mr-4" @click="number--">Down</v-btn>
       <v-btn class="error" @click="number=0">Reset</v-btn>
       <v-btn @click="testfunc">Test</v-btn>
       <h3>{{number}}</h3>
     </div>
     
    </v-container> 
    <v-container>  
      <ErrorMessage v-if="error" text="For høyt tall!"/>
    </v-container>
  </div>
</template>

<script>
import ErrorMessage from './common/ErrorMessage.vue'
export default {
  name: 'Unit',
  components: {
    ErrorMessage
  },
  data () {
    return {
      username: '',
      number: 0,
      test: false
    }
  },
  computed: {
    error () {
      return this.number > 7
    }
  },
  methods: {
    testfunc(){
      this.test=true
    }
  }
}
</script>