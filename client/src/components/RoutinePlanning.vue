<template>
  <div style="width: 80%">
    <v-btn
      color="light-blue lighten-1"
      dark
      @click="changeRoutineDialog"
    >
      Create New Routine
    </v-btn>
    <v-dialog
      v-model="newRoutineDialog"
      fullscreen
      hide-overlay
    >
      <v-card>
        <v-layout column style="padding: 0 16px">
          <v-text-field
            solo
            flat
            hide-details
            v-model="routine.name"
            class="routine-name"
          >
          </v-text-field>
          <v-text-field
            solo
            flat
            hide-details
            v-model="routine.remark"
            class="routine-remarks"
          >
          </v-text-field>
          <v-flex>
            <v-dialog
              ref="dialog"
              persistent
              full-width
              width="290px"
              class="dialog-margin-43"
              v-model="dateDialog"
              :return-value.sync="routine.date"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  readonly
                  v-on="on"
                  class="date-dialog"
                  v-model="routine.date"
                  prepend-icon="event"
                >
                </v-text-field>
              </template>
              <v-date-picker v-model="routine.date" scrollable>
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="light-blue darken-4"
                  @click="dateDialog = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="light-blue darken-4"
                  @click="$refs.dialog.save(routine.date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-flex>
        </v-layout>
        <v-list>
          <v-list-item
            v-for="(set, index) in routine.sets"
            :key="'exer-' + index"
          >
            <v-list-item-content v-if="routine.sets.length > 0" class="set-list">
              <p class="exercise-title">
                {{ routine.exercise[index] }}
              </p>
              <v-list>
                <v-layout class="one-set">
                  <v-layout column align-center class="first-column">
                    <p style="font-weight: bold">Set</p>
                    <v-list-item
                      v-for="(s, i) in set"
                      :key="i"
                      class="set-item"
                    >
                      <v-text-field
                        solo
                        flat
                        disabled
                        hide-details
                        v-model="s.set"
                      >
                      </v-text-field>
                    </v-list-item>
                  </v-layout>
                  <v-layout column align-center>
                    <p style="font-weight: bold">kg/lb</p>
                    <v-list-item
                      v-for="(s, i) in set"
                      :key="i"
                      class="set-item"
                    >
                      <v-text-field
                        solo
                        flat
                        hide-details
                        v-model="s.weight"
                      >
                      </v-text-field>
                    </v-list-item>
                  </v-layout>
                  <v-layout column align-center>
                    <p style="font-weight: bold">Reps</p>
                    <v-list-item
                      v-for="(s, i) in set"
                      :key="i"
                      class="set-item"
                    >
                      <v-text-field
                        solo
                        flat
                        hide-details
                        v-model="s.reps"
                      >
                      </v-text-field>
                    </v-list-item>
                  </v-layout>
                  <v-layout column align-center>
                    <p style="font-weight: bold">Remove</p>
                    <v-list-item
                      v-for="(s, i) in set"
                      :key="i"
                      class="set-item"
                    >
                      <v-btn text icon color="blue" @click="removeSet(index, i)">
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-list-item>
                  </v-layout>
                </v-layout>
              </v-list>
              <v-btn
                depressed
                class="add-set-btn"
                @click="addSet(index)"
              >
                Add Set
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
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
              class="button-width mt-3 mb-7"
              @click="changeRoutineDialog"
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
        :selected="routine.exercise"
        :exerciseList="exerciseList"
        :bodyPart="bodyPart"
        :tools="tools"
        @changeSelectedExercise="updateSelectedExercise($event)"
        @closeExerciseSearchDialog="updateExerciseSearchDialog"
      />
    </v-dialog>
  </div>
</template>

<script>
import ExerciseSearch from './ExerciseSearch.vue';

export default {
  props: ['newRoutineDialog', 'routine'],
  components: {
    ExerciseSearch,
  },
  data() {
    return {
      exerciseSearchDialog: false,
      dateDialog: false,
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
    updateExerciseSearchDialog() {
      this.exerciseSearchDialog = false;
    },
    changeRoutineDialog() {
      this.routine.sets = [];
      this.$emit('changeRoutineDialog');
    },
    updateSelectedExercise(i) {
      const { exercise } = this.routine;
      const existed = exercise.indexOf(i);

      if (existed > -1) {
        exercise.splice(existed, 1);
        this.routine.sets.splice(existed, 1);
      } else {
        exercise.push(i);
        this.routine.sets.push([{
          set: 1,
          weight: '',
          reps: '',
        }]);
      }
    },
    addSet(index) {
      const modifySet = this.routine.sets[index];
      const setLength = modifySet.length;
      modifySet.push({
        set: setLength + 1,
        weight: '',
        reps: '',
      });
    },
    removeSet(index, i) {
      const modifySet = this.routine.sets[index];
      modifySet.splice(i, 1);
      for (let j = i; j < modifySet.length; j += 1) {
        modifySet[j].set -= 1;
      }
    },
  },
};
</script>

<style scoped>
.v-application .light-blue.lighten-1 {
  width: 100%;
}

.v-application .light-blue.lighten-1 >>> .v-btn__content {
  font-weight: 500px;
}

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

.v-list-item__content {
  padding: 30px 0 30px 20px;
}

.v-text-field {
  width: 50px;
}

.v-application p {
  margin-bottom: 10px;
}

.v-input >>> .v-input__slot {
  height: 20px;
  padding: 0px !important;
  min-height: 0px !important;
  background-color: #E0E0E0 !important;
}

.v-text-field >>> input {
  text-align: center;
}

.v-list {
  padding: 0px;
}

>>> .v-input__control {
  min-height: 0px !important;
}

.v-list-item {
  min-height: 0px !important;
}

.v-input--is-disabled >>> input {
  color: black;
  font-weight: bold;
}

>>> .v-btn__content {
  font-weight: bold;
}

>>> .v-dialog--fullscreen {
  top: 60px;
  box-shadow: unset;
  height: calc(100% - 118px);
}

@media only screen and (min-width: 500px) {
  >>> .v-dialog--fullscreen {
    left: 20%;
    width: 60%;
  }
}

.exercise-title {
  font-weight: bold;
  color: #039BE5;
}

.add-set-btn {
  height: 24px !important;
}

.button-width {
  width: 100%;
}

.button-group {
  justify-content: center;
}

.text-align-field {
  text-align: center;
}

.set-item {
  padding: 0px 0px 10px 0px;
}

.set-list {
  padding: 0px 0px 20px 20px;
}

.first-column {
  max-width: 23.89px;
}

.first-column >>> .v-list-item {
  width: 23.89px;
}

>>> .v-btn--fab.v-size--default {
  height: 24px;
  width: 24px;
}

.routine-name {
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  padding: 30px 0px 5px 20px;
}

.routine-name >>> .v-input__slot {
  background-color: white !important;
}

.routine-name >>> input {
  text-align: left !important;
}

.routine-remarks {
  width: 100%;
  font-size: 14px;
  padding: 0px 0px 5px 20px;
}

.routine-remarks >>> .v-input__slot {
  background-color: white !important;
}

.routine-remarks >>> input {
  text-align: left !important;
  color: rgba(0, 0, 0, 0.54) !important;
}

.date-dialog {
  margin-top: 0px;
  padding-top: 0px;
  width: 200px !important;
  padding-bottom: 10px;
}

.date-dialog >>> .v-input__slot {
  height: 30px;
}
</style>
