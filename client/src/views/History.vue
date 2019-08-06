<template>
  <v-container fluid fill-height pa-0>
    <v-layout column>
      <header-bar />
      <v-layout column class="middle-content">
        <v-layout column style="width: 290px">
          <v-date-picker
            class="mt-4"
            v-model="date"
            min="2019-08-01"
            :allowed-dates="allowedDates"
          ></v-date-picker>
          <v-text-field
            solo
            flat
            disabled
            hide-details
            v-model="routine.name"
            class="routine-name"
          >
          </v-text-field>
          <v-text-field
            solo
            flat
            disabled
            hide-details
            v-model="routine.remark"
            class="routine-remarks"
          >
          </v-text-field>
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
                  <v-layout>
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
                          disabled
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
                          disabled
                          hide-details
                          v-model="s.reps"
                        >
                        </v-text-field>
                      </v-list-item>
                    </v-layout>
                  </v-layout>
                </v-list>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-layout>
      </v-layout>
      <v-layout justify-center>
        <v-bottom-navigation
          dark
          fixed
          :value="1"
        >
          <v-btn>
            <span>Analysis</span>
            <v-icon>mdi-chart-bar</v-icon>
          </v-btn>

          <v-btn>
            <span>History</span>
            <v-icon>mdi-history</v-icon>
          </v-btn>

          <v-btn to="/">
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

export default {
  components: {
    'header-bar': HeaderBar,
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      workoutDates: ['2019-08-01', '2019-08-03'],
      routine: {
        name: 'Arms-2',
        remark: 'my first workout routine recorded',
        exercise: ['Tricep Extension', 'Bicep Curl'],
        sets: [
          [
            {
              set: 1,
              weight: 20,
              reps: 8,
            },
            {
              set: 2,
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
    };
  },
  methods: {
    allowedDates(val) {
      return this.workoutDates.indexOf(val) !== -1;
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

  .middle-content {
    width: 60% !important;
  }
}

.middle-content {
  top: 60px;
  width: 100%;
  position: fixed;
  overflow-y: auto;
  align-items: center;
  background-color: white;
  height: calc(100% - 118px);
}

>>> .v-picker {
  min-height: 380px;
}

>>> .v-picker__body {
  max-height: 280px;
}

.v-text-field {
  width: 50px;
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

.v-sheet {
  border-radius: 0px;
}

.v-list {
  padding: 0px;
  width: 290px;
}

>>> .v-input__control {
  min-height: 0px !important;
}

.v-list-item {
  padding: 0px;
  min-height: 0px !important;
}

.v-input--is-disabled >>> input {
  color: black;
  font-weight: bold;
}

.exercise-title {
  font-weight: bold;
  color: #039BE5;
  padding-bottom: 5px;
}

.set-item {
  padding: 0px 0px 10px 0px;
}

.set-list {
  padding: 0px 0px 20px 0px;
}

.first-column {
  max-width: 23.89px;
}

.first-column >>> .v-list-item {
  width: 23.89px;
}

.routine-name {
  width: 100%;
  font-size: 20px;
  min-height: 45px;
  font-weight: bold;
  padding: 20px 0px 5px 0px;
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
  min-height: 35px;
  padding: 0px 0px 15px 0px;
}

.routine-remarks >>> .v-input__slot {
  background-color: white !important;
}

.routine-remarks >>> input {
  text-align: left !important;
  color: rgba(0, 0, 0, 0.54) !important;
}
</style>
