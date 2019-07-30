<template>
  <div class="dis">
    <ExerciseSearch
      :selected="selected"
      :exerciseList="exerciseList"
      :bodyPart="bodyPart"
      :tools="tools"
      @changeSelectedExercise="updateSelectedExercise($event)"
    />
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
</style>
