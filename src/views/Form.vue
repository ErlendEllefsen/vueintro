<template>
  <div class="form">
      <v-container class="code-container">
     <div v-highlight class="code-sample">
      <pre class="language-javascript">
        <code></code>
      </pre>
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
          @click="resetValidation"
        >
          Reset Validation
      </v-btn>
       </v-form>
       </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
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
}
</script>
