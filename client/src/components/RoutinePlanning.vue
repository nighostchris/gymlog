<template>
  <div>
  <div>
    <ExerciseSearch
      :selected="selected"
      :exerciseList="exerciseList"
      :bodyPart="bodyPart"
      :tools="tools"
      @changeSelectedExercise="updateSelectedExercise($event)"
    />
  </div>
  <div>
    <v-btn
      color="light-blue darken-1 font-weight-bold"
      dark
      @click="newRoutineDialog = true"
    >
      Create New Routine
    </v-btn>
    <v-dialog v-model="newRoutineDialog">
      <v-card>
        <v-card-title>
          <span class="headline">New Routine</span>
          <span class="subtitle-1">Remarks</span>
        </v-card-title>
          <v-spacer></v-spacer>
          <v-btn
            color="light-blue lighten-4"
          >Add Exercises</v-btn>
          <v-btn
            color="pink lighten-4"
            @click="newRoutineDialog = false"
          >
            Cancel Routine
          </v-btn>
      </v-card>
    </v-dialog>
  </div>
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

<style>
.dis {
  display: none;
}

.v-application .light-blue {
  height: 30px;
}

.v-application .light-blue.lighten-4 {
  font-weight: bold;
  color: #039BE5;
}
</style>
