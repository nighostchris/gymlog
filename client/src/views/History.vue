<template>
  <v-container fluid fill-height pa-0>
    <v-layout column>
      <header-bar />
      <v-layout column class="middle-content">
        <v-layout justify-center style="max-height: 400px">
          <v-date-picker
            class="mt-4"
            v-model="date"
            min="2019-08-01"
            :allowed-dates="allowedDates"
          ></v-date-picker>
        </v-layout>

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
                </v-layout>
              </v-list>
            </v-list-item-content>
          </v-list-item>
        </v-list>
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
}

.middle-content {
  top: 60px;
  width: 100%;
  overflow: scroll;
  position: absolute;
  align-items: center;
  height: calc(100% - 118px);
}

>>> .v-picker {
  height: 380px;
}

>>> .v-picker__body {
  max-height: 280px;
}
</style>
