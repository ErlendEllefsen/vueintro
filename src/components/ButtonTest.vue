<template>
  <div>  
      <v-container class="code-container">
        <div class="code-sample">
          <Code code="
import { shallowMount } from '@vue/test-utils'                       
import ButtonTest from '../../src/components/ButtonTest.vue'        

describe('ButtonTest.vue', () => {

    it('Check if tester = true on button press', () => {
      const wrapper = shallowMount(ButtonTest)                              
      const button = wrapper.find('#testButton')
      button.trigger('click')
      expect(wrapper.vm.test).toBe(true);                   
    })
})"/>
        </div>
        <div class="code-ex">
        <v-btn
          color="success"
          class="mr-4"
          id="testButton"
          @click.native="testfunc"
        >
          Test
      </v-btn>
       <h1>{{test}}</h1>
       <img src="../../public/test.png">
        </div>
    </v-container> 
  </div>
</template>
<script>
import Code from '../views/common/Code.vue'
export default {
  name: 'Unit',
  components: {
    Code
  },
  data () {
    return {
      test: false
    }
  },
  methods: {
    testfunc(){
      this.test=true
    }
  }
}
</script>