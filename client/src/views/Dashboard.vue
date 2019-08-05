<template>
  <v-container fluid fill-height pa-0>
    <v-layout column>
      <header-bar />
      <v-layout column class="middle-content">
        <p class="start-workout py-4">Start Workout</p>
        <routine-planning
          :routine="routine"
          :newRoutineDialog="newRoutineDialog"
          @changeRoutineDialog="updateRoutineDialog"
        />
        <p class="recent-routine pt-6 pb-2">Recent Routines</p>
        <v-layout wrap class="routine-layout">
          <v-card
            flat
            outlined
            width="125"
            height="125"
            v-for="(r, i) in routines"
            :key="i"
            class="routine-card"
            @click="updateSelectedRoutine(i)"
          >
            <v-card-title>{{ r.name }}</v-card-title>
            <v-card-text>{{ r.exercise.join(', ') }}</v-card-text>
          </v-card>
        </v-layout>
      </v-layout>
      <v-layout justify-center>
        <v-bottom-navigation
          dark
          fixed
          :value="2"
        >
          <v-btn>
            <span>Analysis</span>
            <v-icon>mdi-chart-bar</v-icon>
          </v-btn>

          <v-btn to="/history">
            <span>History</span>
            <v-icon>mdi-history</v-icon>
          </v-btn>

          <v-btn>
            <span>Routine</span>
            <v-icon>mdi-recycle</v-icon>
          </v-btn>

          <v-btn>
            <span>Setting</span>
            <v-icon>mdi-settings</v-icon>
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
      newRoutineDialog: false,
      bottomController: 'routine',
      routine: {
        name: 'New Routine',
        remark: 'Remarks',
        date: new Date().toISOString().substr(0, 10),
        exercise: [],
        sets: [],
      },
      routines: [
        {
          name: 'Arms-1',
          remark: 'dfgdfg',
          exercise: ['Tricep Extension'],
          sets: [
            [
              {
                set: 1,
                weight: 20,
                reps: 8,
              },
            ],
          ],
        },
        {
          name: 'Arms-2',
          remark: 'dfgdfg',
          exercise: ['Tricep Extension', 'Bicep Curl'],
          sets: [
            [
              {
                set: 1,
                weight: 20,
                reps: 8,
              },
            ],
            [
              {
                set: 1,
                weight: 20,
                reps: 8,
              },
            ],
          ],
        },
      ],
    };
  },
  methods: {
    updateRoutineDialog() {
      this.newRoutineDialog = !this.newRoutineDialog;
    },
    updateSelectedRoutine(i) {
      this.routine = this.routines[i];
      this.newRoutineDialog = !this.newRoutineDialog;
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 500px) {
  .container--fluid {
    width: 60%;
    position: absolute;
    left: 20%;
  }

  .v-bottom-navigation--fixed {
    left: auto !important;
    width: 60% !important;
  }

  .routine-layout {
    max-height: 150px !important;
  }
}

.middle-content {
  top: 60px;
  width: 100%;
  position: absolute;
  align-items: center;
  height: calc(100% - 118px);
}

.routine-layout {
  width: 80%;
  max-height: 300px;
  justify-content: space-between;
  align-content: space-evenly;
}

.routine-card {
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.36) !important;
}

.routine-card >>> .v-card__title {
  padding: 0px 0px 0px 16px;
}

.recent-routine {
  width: 80%;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0px;
}

.start-workout {
  width: 80%;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 0px;
}
</style>
