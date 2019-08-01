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
        <v-list>
          <v-list-item
            v-for="(set, index) in sets"
            :key="'exer-' + index"
          >
            <v-list-item-content v-if="selected.length > 0" class="set-list">
              <p class="exercise-title">
                {{ exerciseList[selected[index]].name }}
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
        @closeExerciseSearchDialog="updateExerciseSearchDialog"
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
      selected: [0, 1],
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
      sets: [
        [
          {
            set: 1,
            weight: 20,
            reps: 8,
          },
          {
            set: 2,
            weight: 30,
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
    };
  },
  methods: {
    updateExerciseSearchDialog() {
      this.exerciseSearchDialog = false;
    },
    updateSelectedExercise(i) {
      const existed = this.selected.indexOf(i);

      if (existed > -1) {
        this.selected.splice(existed, 1);
        this.sets.splice(existed, 1);
      } else {
        this.selected.push(i);
        this.sets.push([{
          set: 1,
          weight: '',
          reps: '',
        }]);
      }
    },
    addSet(index) {
      const modifySet = this.sets[index];
      const setLength = modifySet.length;
      modifySet.push({
        set: setLength + 1,
        weight: '',
        reps: '',
      });
    },
    removeSet(index, i) {
      const modifySet = this.sets[index];
      modifySet.splice(i, 1);
      for (let j = i; j < modifySet.length; j += 1) {
        modifySet[j].set -= 1;
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

.v-list-item__title{
  font-size: 20px;
  font-weight: bold;
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
</style>
