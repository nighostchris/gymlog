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
          <v-btn value="analysis">
            <span>Analysis</span>
            <v-icon>mdi-chart-bar</v-icon>
          </v-btn>

          <v-btn value="routine">
            <span>Routine</span>
            <v-icon>mdi-recycle</v-icon>
          </v-btn>

          <v-btn value="exercise">
            <span>Exercise</span>
            <v-icon>mdi-plus</v-icon>
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
      bottomController: 'routine',
    };
  },
};
</script>

<style scoped>
@media only screen and (min-width: 600px) {
  .container--fluid {
    width: 60%;
    position: absolute;
    left: 20%;
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
