<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            PLACEHOLDER INDEX PAGE
          </v-card-title>
          <v-card-text>
            Some placeholder text for the card
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="masters">
      <v-col>
        <v-card>
          <v-card-title>Our staff</v-card-title>
          <v-container fluid>
            <v-row>
              <v-col v-for="(n, i) in masters"
                     :key="n.slug"
                     class="d-flex child-flex"
                     cols="4"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card flat
                          tile
                          class="d-flex"
                          nuxt
                          :to="n.path"
                          :elevation="hover ? 16 : 2"
                  >
                    <v-img :src="`https://picsum.photos/500/300?image=${i * 5 + 10}`"
                           :lazy-src="`https://picsum.photos/10/6?image=${i * 5 + 10}`"
                           aspect-ratio="1"
                           class="grey lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-row class="fill-height ma-0"
                               align="center"
                               justify="center"
                        >
                          <v-progress-circular indeterminate color="grey lighten-5"/>
                        </v-row>
                      </template>
                    </v-img>
                    <v-card-text :class="{'show-text' : hover}">
                      <h3>{{ n.title }}</h3>
                      <div>{{ n.description }}</div>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'home',

  async asyncData(context) {
    try {
      const masters = await context.app.$axios.$get(`/content/staff`);
      if (!masters) context.error({ statusCode: 500, message: 'Woops, something wen wrong on the server 1!' })
      return { masters }
    } catch (err) {
      context.error({ statusCode: 500, message: err })
    }
  },
})
</script>

<style lang="less" scoped>
  .masters {
    .v-card {
      position: relative;
    }
    .v-card__text {
      position: absolute;
      top: 50%; // THIS IS INTENTIONALLY NOT CENTERED BUT RATHER STARTS FROM THE MIDDLE
      left: 0;
      background-color: transparent;
      color: transparent;
      width: 100%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }
    .show-text {
      background-color: rgba(0,0,0,.7);
      color: white;
    }
  }
</style>
