<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" md="10">
        <nuxt-content :document="master" />
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" md="10">
        <v-form ref="form">
          <v-card>
            <v-card-title>Apply now</v-card-title>
            <v-card-text class="form-text">
              <div>Applying for: <b>{{ master.title }}</b></div>
              <div>Name: <v-text-field></v-text-field></div>
              <div>Comment: <v-text-field></v-text-field></div>
              <div></div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="submit">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </div>
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
  },

  methods: {
    submit() {
      alert('Request sent');
      this.$router.push('/');
    }
  }
})
</script>

<style lang="less" scoped>
.form-text > * > * {
  display: inline-block;
}
</style>
