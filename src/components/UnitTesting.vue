<template>
  <div>
    <v-container class="code-container">
     <div class="code-sample">
      <Code code="
export default {
  data () {
    return { number: 0 }
  },
  computed: {
    error () { return this.number > 7},
    success (){ return this.number < -3}
  }
}"/>
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
      <SuccessMessage v-if="success" text="Riktig tall!"/>
    </v-container>
  </div>
</template>

<script>
import ErrorMessage from '../views/common/ErrorMessage.vue'
import SuccessMessage from '../views/common/SuccessMessage.vue'
import Code from '../views/common/Code.vue'
export default {
  name: 'Unit',
  components: {
    ErrorMessage,
    SuccessMessage,
    Code
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
    },
    success (){
      return this.number < -3
    }
  }
}
</script>