<template>
  <v-layout justify-center>
    <v-flex xs8 md6 lg6 xl6>
      <v-text-field
        class="pt-3"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        flat
        clearable
        solo-inverted
        v-model="search"
        @click:clear="clearSearch"
      ></v-text-field>
      <v-list two-line class="py-0">
        <template v-for="(exercise, i) in filterExercise">
          <v-list-item :key="i">
            <v-list-item-avatar>
              <v-img :src="exercise.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ exercise.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ exercise.part }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider
            v-if="i + 1 < exerciseList.length"
            :key="i"
          ></v-divider>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return ({
      search: '',
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
    });
  },
  methods: {
    clearSearch() {
      this.search = '';
    },
  },
  computed: {
    filterExercise() {
      return this.exerciseList.filter((e) => {
        if (!this.search) {
          return this.exerciseList;
        }

        const keyword = this.search.toLowerCase();
        return (e.name.toLowerCase().includes(keyword)
          || e.part.toLowerCase().includes(keyword));
      });
    },
  },
};
</script>

<style scoped>
.v-application .justify-center {
  background-color: #90CAF9;
}

.v-sheet {
  border-radius: 0px;
}

.theme--light.v-divider {
  border-color: rgba(0, 0, 0, 0.36);
}
</style>
