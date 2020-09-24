<template>
  <nuxt-content :document="master" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "master",

  async asyncData(context) {
    try {
      const master = await context.app.$axios.$get(`/content/staff/${context.params.master}`);
      if (!master) context.error({ statusCode: 404, message: 'Master not found' })
      return { master }
    } catch (err) {
      context.error({ statusCode: 404, message: 'Master not found' })
    }
  }
})
</script>

<style lang="less" scoped>

</style>
