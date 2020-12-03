<template>
  <div>  
       <UnitTesting />
       <ButtonTest />
  </div>
</template>

<script>
import ButtonTest from '../components/ButtonTest.vue'
import UnitTesting from '../components/UnitTesting.vue'

export default {
  name: 'Unit',
  components: {
    ButtonTest,
    UnitTesting
  }
}
</script>