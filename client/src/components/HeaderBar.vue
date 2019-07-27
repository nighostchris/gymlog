<template>
  <v-toolbar max-height="60px" color="red darken-1">
    <v-toolbar-title class="font-weight-light headline white--text">
      GymLog
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
};
</script>

<style scoped>
@media only screen and (max-width: 375px) {
  .v-sheet {
    width: 100% !important;
  }
}

.v-sheet {
  border-radius: 0px;
  width: 60%;
  position: fixed;
}

.v-toolbar__content {
  justify-content: center;
}
</style>
