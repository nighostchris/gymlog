<template>
  <v-dialog v-model="dialog" xs7 md6 lg6 xl6>
    <template v-slot:activator="{ on }">
      <v-btn color="red" dark v-on="on">
        Choose
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Select the posture</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-layout column>
            <v-flex xs12 sm6>
              <v-select
                :items="['Bicep', 'Tricep', 'Back', 'Chest']"
                label="Muscle Group"
                @change="changeMuscleGroup"
              ></v-select>
            </v-flex>
            <!--
            <v-flex xs12 sm6>
              <v-select
                :items="['Cable', 'Normal curl', 'hammer']"
                label="Posture"
              ></v-select>
            </v-flex>
            -->
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">Proceed</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    muscleGroup: String,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    changeMuscleGroup($event) {
      this.$emit('changeMuscleGroup', $event);
    },
  },
};
</script>

<style>
.v-label--active {
  top: 10px !important;
}
</style>
