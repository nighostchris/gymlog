<template>
  <v-layout justify-center fill-height>
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
      <v-layout justify-center pb-7>
        <v-menu offset-y class="pr-1">
          <template v-slot:activator="{ on }">
            <v-btn color="grey lighten-3" v-on="on" depressed>
              {{ (bpMenu == -1 || bpMenu == undefined) ? 'Body Part' : bodyPart[bpMenu]}}
            </v-btn>
          </template>
          <v-list dark class="font-weight-bold">
            <v-list-item-group v-model="bpMenu">
              <v-list-item
                v-for="(part, i) in bodyPart"
                :key="'part-' + i"
                class="itemHeight"
              >
                <v-list-item-title>{{ part }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-menu offset-y class="pl-1">
          <template v-slot:activator="{ on }">
            <v-btn color="grey lighten-3" v-on="on" depressed>
              {{ (toolMenu == -1 || toolMenu == undefined) ? 'Tools' : tools[toolMenu]}}
            </v-btn>
          </template>
          <v-list dark class="font-weight-bold">
            <v-list-item-group v-model="toolMenu">
              <v-list-item
                v-for="(tool, i) in tools"
                :key="'tool-' + i"
                class="itemHeight"
              >
                <v-list-item-title>{{ tool }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-layout>
      <v-list two-line class="py-0">
        <template v-for="(exercise, i) in filterExercise">
          <v-list-item
            :key="'exercise' + i"
            @click="changeSelectedExercise(i)"
          >
            <v-list-item-avatar>
              <v-img :src="exercise.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ exercise.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ exercise.part }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon
                v-if="selected.indexOf(i) < 0"
                color="grey lighten-1"
              >
                mdi-check
              </v-icon>
              <v-icon
                v-else
                color="blue-grey darken-4"
              >
                mdi-check
              </v-icon>
            </v-list-item-action>
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
  props: ['selected', 'exerciseList', 'bodyPart', 'tools'],
  data() {
    return ({
      search: '',
      bpMenu: -1,
      toolMenu: -1,
    });
  },
  methods: {
    clearSearch() {
      this.search = '';
    },
    changeSelectedExercise(i) {
      this.$emit('changeSelectedExercise', i);
    },
  },
  computed: {
    filterExercise() {
      return this.exerciseList.filter((e) => {
        if (!this.search) {
          if (this.bpMenu !== -1 && this.bpMenu !== undefined) {
            if (this.toolMenu !== -1 && this.toolMenu !== undefined) {
              const bodyPartResult = e.part.toLowerCase()
                .includes(this.bodyPart[this.bpMenu].toLowerCase());
              const toolsResult = e.tool.toLowerCase()
                .includes(this.tools[this.toolMenu].toLowerCase());
              return bodyPartResult && toolsResult;
            }
            return e.part.toLowerCase().includes(this.bodyPart[this.bpMenu].toLowerCase());
          }

          if (this.toolMenu !== -1 && this.toolMenu !== undefined) {
            if (this.bpMenu !== -1 && this.bpMenu !== undefined) {
              const bodyPartResult = e.part.toLowerCase()
                .includes(this.bodyPart[this.bpMenu].toLowerCase());
              const toolsResult = e.tool.toLowerCase()
                .includes(this.tools[this.toolMenu].toLowerCase());
              return bodyPartResult && toolsResult;
            }
            return e.tool.toLowerCase().includes(this.tools[this.toolMenu].toLowerCase());
          }
          return this.exerciseList;
        }

        const keyword = this.search.toLowerCase();
        const searchBarResult = e.name.toLowerCase().includes(keyword)
          || e.part.toLowerCase().includes(keyword);
        const bodyPartResult = (this.bpMenu !== -1 && this.bpMenu !== undefined)
          ? e.part.toLowerCase().includes(this.bodyPart[this.bpMenu].toLowerCase())
          : [];
        const toolsResult = (this.toolMenu !== -1 && this.toolMenu !== undefined)
          ? e.tool.toLowerCase().includes(this.tools[this.toolMenu].toLowerCase())
          : [];
        return searchBarResult && bodyPartResult && toolsResult;
      });
    },
  },
};
</script>

<style scoped>
.v-application .justify-center {
  background-color: white;
}

.v-menu__content {
  top: 82px !important;
}

.v-sheet {
  border-radius: 4px;
  padding: 0px;
}

.v-application .py-0 {
  border-radius: 0px;
}

.theme--light.v-divider {
  border-color: rgba(0, 0, 0, 0.36);
}

.v-btn:not(.v-btn--round).v-size--default {
  height: 24px;
  font-weight: bold;
}

.itemHeight {
  min-height: 36px;
}
</style>
