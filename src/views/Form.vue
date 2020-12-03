<template>
  <div class="form">
      <v-container class="code-container">
     <div class="code-sample">
      <Code code="
export default {
  data: () => ({
      valid: true,
      nameRules: [
        v => !!v || 'Du må skrive inn navnet ditt',
        v => (v && v.length ˂= 10) || 'For langt navn!',
      ],
      ageRules: [
        v => (v && v.length ˂= 2) || 'Du er ikke så gammel!',
      ], 
      emailRules: [
        v => !!v || 'Du må skrive inn en e-post',
        v => /.+@.+/.test(v) || 'Skriv inn en gyldig e-post',
      ]
      }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    }
}"/>
     </div>
     <div class="code-ex">
       <h1>Form Validation</h1>
       <v-form
        ref="form"
        v-model="valid"
        lazy-validation
       >
        <v-text-field
          v-model="name"
          :couter="10"
          :rules="nameRules"
          label="Navn"
          required
        >
        </v-text-field>
        <v-text-field
          type="number"
          v-model="number"
          :couter="3"
          :rules="ageRules"
          label="Alder"
        >
        </v-text-field>
         <v-text-field
          v-model="email"
          :couter="20"
          :rules="emailRules"
          label="E-post"
        >
        </v-text-field>
        
        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>
        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Reset Form
        </v-btn>
        <v-btn
          color="warning"
          class="mr-4"
          @click="resetValidation"
        >
          Reset Validation
      </v-btn>
     
      <h3 class="my-5">Navn: {{name}}</h3>
      <h3 class="my-5">Alder: {{number}}</h3>
      <h3 class="my-5">E-post: {{email}}</h3>
       </v-form>
       </div>
    </v-container>

  </div>
</template>
<script>
import Code from '../views/common/Code.vue'
export default {
  components:{
    Code
  },
  data: () => ({
      valid: true,
      nameRules: [
        v => !!v || 'Du må skrive inn navnet ditt',
        v => (v && v.length <= 10) || 'For langt navn!',
      ],
      ageRules: [
        v => (v && v.length <= 2) || 'Du er ikke så gammel!',
      ], 
      emailRules: [
        v => !!v || 'Du må skrive inn en e-post',
        v => /.+@.+/.test(v) || 'Skriv inn en gyldig e-post',
      ],
      name: "",
      email: "",
      number: ""
      }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
    }
}
</script>
