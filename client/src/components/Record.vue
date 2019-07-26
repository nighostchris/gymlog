<template>
  <div>
    <testd :muscleGroup="muscleGroup" @changeMuscleGroup="updateMuscleGroup($event)"/>
    <div>{{ muscleGroup }}</div>
  </div>
</template>

<script>
import TestDialog from './TestDialog.vue';

export default {
  components: {
    testd: TestDialog,
  },
  data() {
    return {
      muscleGroup: 'dummy',
    };
  },
  methods: {
    updateMuscleGroup(updatedMuscleGroup) {
      this.muscleGroup = updatedMuscleGroup;
      console.log(updatedMuscleGroup);
    },
  },
};
</script>
