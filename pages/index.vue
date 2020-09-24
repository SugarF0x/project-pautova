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
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Our staff</v-card-title>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="(n, i) in masters"
                :key="n.slug"
                class="d-flex child-flex"
                cols="4"
              >
                <v-card flat tile class="d-flex" nuxt :to="n.path">
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${i * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${i * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
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
  name: 'home',

  async asyncData() {
    return myaxios.get(`http://localhost:3000/api/content/staff`)
      .then(res => {
        return { masters: res }
      }
    )
  }
})
</script>
