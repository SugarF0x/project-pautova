<template>
  <v-app>
    <v-app-bar fixed app>
      <v-spacer/>
      <v-btn v-if="$auth.loggedIn" @click="$auth.logout('local')">Logout</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app absolute>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer/>
      <span>
        Provided by
        <v-btn text href="https://github.com/SugarF0x">Sugar_F0x</v-btn>
      </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
export default {

}
</script>
