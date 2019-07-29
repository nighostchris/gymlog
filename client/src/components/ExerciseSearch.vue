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
      <v-layout justify-center pb-7>
        <v-menu offset-y class="pr-1">
          <template v-slot:activator="{ on }">
            <v-btn color="grey lighten-3" v-on="on" depressed>
              {{ (bpMenu == -1 || bpMenu == undefined) ? 'Select Body Part' : bodyPart[bpMenu]}}
            </v-btn>
          </template>
          <v-list>
            <v-list-item-group v-model="bpMenu">
              <v-list-item
                v-for="(part, i) in bodyPart"
                :key="'part-' + i"
              >
                <v-list-item-title>{{ part }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-menu offset-y class="pl-1">
          <template v-slot:activator="{ on }">
            <v-btn color="grey lighten-3" v-on="on" depressed>
              {{ (toolMenu == -1 || toolMenu == undefined) ? 'Select Tools' : tools[toolMenu]}}
            </v-btn>
          </template>
          <v-list>
            <v-list-item-group v-model="toolMenu">
              <v-list-item
                v-for="(tool, i) in tools"
                :key="'tool-' + i"
              >
                <v-list-item-title>{{ tool }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-layout>
      <v-list two-line class="py-0">
        <template v-for="(exercise, i) in filterExercise">
          <v-list-item :key="'exercise' + i">
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
      bpMenu: -1,
      toolMenu: -1,
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
        console.log(searchBarResult);
        const bodyPartResult = (this.bpMenu !== -1 && this.bpMenu !== undefined)
          ? e.part.toLowerCase().includes(this.bodyPart[this.bpMenu].toLowerCase())
          : [];
        console.log(bodyPartResult);
        const toolsResult = (this.toolMenu !== -1 && this.toolMenu !== undefined)
          ? e.tool.toLowerCase().includes(this.tools[this.toolMenu].toLowerCase())
          : [];
        console.log(toolsResult);
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

.v-sheet {
  border-radius: 0px;
}

.theme--light.v-divider {
  border-color: rgba(0, 0, 0, 0.36);
}

.v-btn:not(.v-btn--round).v-size--default {
  height: 24px;
  font-weight: bold;
}
</style>
