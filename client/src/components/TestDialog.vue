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
          <v-layout>
            <v-flex xs12 sm6>
              <v-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                required
              ></v-select>
            </v-flex>
            <v-flex xs12 sm6>
              <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey']"
                label="Interests"
                multiple
              ></v-autocomplete>
            </v-flex>
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
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
