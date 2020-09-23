<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12"
             sm="8"
             md="6"
             lg="5"
      >
        <v-card>
          <v-card-title>
            Login form
          </v-card-title>
          <v-card-text>
            <v-text-field type="password"
                          placeholder="Password"
                          v-model="input"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn disabled>Sign in</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "login",

  data() {
    return {
      input: ''
    }
  },

  methods: {
    signIn() {
      this.$auth.loginWith('local', { password: this.input })
    }
  }
})
</script>

<style scoped>

</style>
