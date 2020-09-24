<template>
  <nuxt-content :document="master" />
</template>

<script lang="ts">
export default {
  name: "master",

  async asyncData({ error, $content, params }) {
    try {
      const master = await $content('staff', params.master).fetch()

      return { master }
    } catch (err) {
      error({ statusCode: 404, message: 'Master not found' })
    }
  }
}
</script>

<style scoped>

</style>
