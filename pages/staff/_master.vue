<template>
  <nuxt-content :document="master" />
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios'
const myaxios = axios.create({
  // ...
})
myaxios.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    // ...
  }
)

export default Vue.extend({
  name: "master",

  async asyncData({ error, params }) {
    try {
      const master = await myaxios.get('http://localhost:3000/api/content/staff/' + params.master)
      if (!master) error({ statusCode: 404, message: 'Master not found' })
      return { master }
    } catch (err) {
      error({ statusCode: 404, message: 'Master not found' })
    }
  }
})
</script>

<style lang="less" scoped>

</style>
