<template>
  <v-container fluid fill-height pa-0>
    <v-layout column>
      <header-bar />
      <routine-planning class="middle-content" />
      <v-layout justify-center>
        <v-bottom-navigation
          v-model="bottomController"
          fixed
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
import RoutinePlanning from '../components/RoutinePlanning.vue';

export default {
  components: {
    'header-bar': HeaderBar,
    'routine-planning': RoutinePlanning,
  },
  data() {
    return {
      bottomController: 'recent',
    };
  },
};
</script>

<style scoped>
@media only screen and (min-width: 600px) {
  .container--fluid {
    max-width: 60%;
  }

  .v-bottom-navigation--fixed {
    left: auto !important;
    width: 60% !important;
  }
}

.middle-content {
  padding-top: 60px;
  padding-bottom: 56px;
}
</style>
