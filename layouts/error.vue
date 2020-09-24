<template>
  <v-row justify="center" align="center">
    <v-col cols="12"
           sm="8"
           md="6"
    >
      <v-card>
        <v-card-title>
          <h1 v-if="error.statusCode === 404">
            404 Not Found
          </h1>
          <h1 v-else>
            {{ error.statusCode }} Error occurred
          </h1>
        </v-card-title>
        <v-card-text>
          <p>
            {{ error.message }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn nuxt to="/">Home page</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    const title = `Error ${this.error.statusCode}`
    return { title }
  },
});
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
