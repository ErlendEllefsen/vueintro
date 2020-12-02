<template>
  <div>
    <v-container class="code-container">
     <div v-highlight class="code-sample">
      <pre class="language-javascript">
        <code>
export default {
  data () {
    return {
      number: 0
    }
  },
  computed: {
    error () {
      return this.number > 7
    }
  }
}</code>
      </pre>
     </div>
     <div class="code-ex">
     <h1>Unit Testing</h1>
       <v-btn class="success mr-4" @click="number++">Up</v-btn>
       <v-btn class="warning mr-4" @click="number--">Down</v-btn>
       <v-btn class="error" @click="number=0">Reset</v-btn>
       <h1>{{number}}</h1>
     </div>
     
    </v-container> 
    <v-container>  
      <ErrorMessage v-if="error" text="For høyt tall!"/>
    </v-container>
  </div>
</template>

<script>
import ErrorMessage from '../views/common/ErrorMessage.vue'
export default {
  name: 'Unit',
  components: {
    ErrorMessage
  },
  data () {
    return {
      username: '',
      number: 0
    }
  },
  computed: {
    error () {
      return this.number > 7
    }
  }
}
</script>