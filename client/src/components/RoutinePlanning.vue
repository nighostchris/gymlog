<template>
  <div>
    <v-btn
      color="light-blue darken-1 font-weight-bold"
      dark
      @click="newRoutineDialog = true"
    >
      Create New Routine
    </v-btn>
    <v-dialog
      v-model="newRoutineDialog"
      fullscreen
      hide-overlay
    >
      <v-card>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>New Routine</v-list-item-title>
            <v-list-item-subtitle>Remarks</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-layout justify-center>
          <v-flex xs8>
            <v-btn
              depressed
              color="light-blue lighten-4"
              class="button-width mb-3"
              @click="exerciseSearchDialog = true"
            >
              Add Exercises
            </v-btn>
            <v-btn
              depressed
              color="pink lighten-4"
              class="button-width mt-3"
              @click="newRoutineDialog = false"
            >
              Cancel Routine
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="exerciseSearchDialog"
      fullscreen
      hide-overlay
    >
      <ExerciseSearch
        :selected="selected"
        :exerciseList="exerciseList"
        :bodyPart="bodyPart"
        :tools="tools"
        @changeSelectedExercise="updateSelectedExercise($event)"
      />
    </v-dialog>
  </div>
</template>

<script>
import ExerciseSearch from './ExerciseSearch.vue';

export default {
  components: {
    ExerciseSearch,
  },
  data() {
    return {
      newRoutineDialog: false,
      exerciseSearchDialog: false,
      selected: [],
      exerciseList: [
        {
          name: 'Tricep Extension',
          part: 'Arms',
          tool: 'cable',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        },
        {
          name: 'Bicep Curl',
          part: 'Arms',
          tool: 'dumbell',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        },
        {
          name: 'Lateral Raise',
          part: 'Shoulder',
          tool: 'dumbell',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        },
      ],
      bodyPart: [
        'Arms',
        'Shoulder',
      ],
      tools: [
        'Dumbell',
        'Cable',
      ],
    };
  },
  methods: {
    updateSelectedExercise(i) {
      const existed = this.selected.indexOf(i);

      if (existed > -1) {
        this.selected.splice(existed, 1);
      } else {
        this.selected.push(i);
      }
    },
  },
};
</script>

<style scoped>
.v-application .light-blue.lighten-4 {
  font-weight: bold;
  color: #039BE5;
  height: 24px;
}

.v-application .pink.lighten-4 {
  font-weight: bold;
  color: #D81B60;
  height: 24px;
}

.v-sheet {
  border-radius: 0px;
}

.button-width {
  width: 100%;
}

.button-group {
  justify-content: center;
}

.v-list-item__title{
  font-size: 20px;
  font-weight: bold;
}

.v-list-item__content {
  padding: 30px 0 40px 20px;
}
</style>
