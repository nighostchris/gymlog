<template>
  <v-app>
    <v-content class="iphoneX">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
  }),
};
</script>

<style>
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
  .iphoneX {
    padding-bottom: 114px !important;
  }
}
</style>
