<template>
  <v-app>
    <v-app-bar fixed short app class="bar">
      <v-btn @click="$router.push('/')">here be logo</v-btn>
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
        <v-btn href="https://github.com/SugarF0x" class="gitlink">
          <v-icon left>mdi-github</v-icon>
          Sugar_F0x
        </v-btn>
      </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="less" scoped>
  .gitlink {
    margin-left: .5rem;
  }
</style>
