<template>
  <v-container fluid fill-height pa-0>
    <v-layout column>
      <header-bar />
      <v-layout justify-center>
        <v-bottom-navigation
          v-model="bottomController"
          max-width="60%"
          absolute
        >
          <v-btn value="recent">
            <span>Recent</span>
            <v-icon>mdi-history</v-icon>
          </v-btn>

          <v-btn value="favorites">
            <span>Favorites</span>
            <v-icon>mdi-favorite</v-icon>
          </v-btn>

          <v-btn value="nearby">
            <span>Nearby</span>
            <v-icon>mdi-place</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';

export default {
  components: {
    'header-bar': HeaderBar,
  },
  data() {
    return {
      bottomController: 'recent',
    };
  },
};
</script>

<style>
.container--fluid {
  max-width: 60%;
}

.v-bottom-navigation--absolute {
  left: auto !important;
}
</style>
