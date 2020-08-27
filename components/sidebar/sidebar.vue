<template>
  <div>
    <b-form class="px-2 py-3 border-bottom">
      <b-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Search..."
      />
    </b-form>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> dcff4fe... Refactor: Running the prettier scripts
    <b-list-group
      class="d-block overflow-auto"
      style="max-height: calc(100vh - 1rem)"
    >
      <b-list-group-item
        v-for="(item, index) in sidebarList"
        :key="index"
        class="m-0 border-0 px-1 py-2"
      >
<<<<<<< HEAD
=======
    <b-list-group class="d-block overflow-auto" style="max-height: calc(100vh - 1rem)">
      <b-list-group-item v-for="(item, index) in sidebarList" :key="index" class="m-0 border-0 px-1 py-2">
>>>>>>> 5b9cfe0... Refactor: refactor the code by using build-in classes in bootstrap
=======
>>>>>>> dcff4fe... Refactor: Running the prettier scripts
        <b-container>
          <b-row no-gutters>
            <b-col cols="1" md="2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                class="w-auto h-auto"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> dcff4fe... Refactor: Running the prettier scripts
              >
                <polyline
                  points="9 18 15 12 9 6"
                  :class="{ 'd-none': currentIndex === index }"
                />
<<<<<<< HEAD
                <polyline
                  points="6 9 12 15 18 9"
                  :class="{ 'd-none': currentIndex !== index }"
=======
              ><polyline
                 points="9 18 15 12 9 6"
                 :class="{'d-none':currentIndex === index}"
               />
                <polyline
                  points="6 9 12 15 18 9"
                  :class="{'d-none':currentIndex !== index}"
>>>>>>> 5b9cfe0... Refactor: refactor the code by using build-in classes in bootstrap
=======
                <polyline
                  points="6 9 12 15 18 9"
                  :class="{ 'd-none': currentIndex !== index }"
>>>>>>> dcff4fe... Refactor: Running the prettier scripts
                />
              </svg>
            </b-col>
            <b-col cols="11" md="10">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> dcff4fe... Refactor: Running the prettier scripts
              <span
                role="button"
                class="index_list--hover user-select-none text-uppercase"
                @click="ContentToogle(index)"
              >
<<<<<<< HEAD
=======
              <span role="button" class="index_list--hover user-select-none text-uppercase" @click="ContentToogle(index)">
>>>>>>> 5b9cfe0... Refactor: refactor the code by using build-in classes in bootstrap
=======
>>>>>>> dcff4fe... Refactor: Running the prettier scripts
                {{ item.content }}
              </span>
            </b-col>
          </b-row>
        </b-container>
<<<<<<< HEAD
<<<<<<< HEAD
        <div :class="{ 'd-none': currentIndex !== index }">
=======
        <div :class="{'d-none':currentIndex!==index}">
>>>>>>> 5b9cfe0... Refactor: refactor the code by using build-in classes in bootstrap
=======
        <div :class="{ 'd-none': currentIndex !== index }">
>>>>>>> dcff4fe... Refactor: Running the prettier scripts
          <listitem :sublist="item.sublist" />
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
<<<<<<< HEAD
<<<<<<< HEAD
import listitem from "./sublist.vue";
import { sidebarList } from "./sidebarList";

export default {
  components: {
    listitem,
  },
  data() {
    return {
      currentIndex: -1,
      sidebarList,
    };
  },
  mounted() {},
  methods: {
    ContentToogle(i) {
      this.currentIndex = this.currentIndex === -1 ? i : -1;
    },
  },
};
</script>

<style lang="scss"></style>
=======
import listitem from './sublist'
import { sidebarList } from './sidebarList'
=======
import listitem from "./sublist.vue";
import { sidebarList } from "./sidebarList";

>>>>>>> dcff4fe... Refactor: Running the prettier scripts
export default {
  components: {
    listitem,
  },
  data() {
    return {
      currentIndex: -1,
      sidebarList,
    };
  },
  mounted() {},
  methods: {
    ContentToogle(i) {
      this.currentIndex = this.currentIndex === -1 ? i : -1;
    },
  },
};
</script>

<<<<<<< HEAD
<style lang='scss'>
</style>
>>>>>>> 5b9cfe0... Refactor: refactor the code by using build-in classes in bootstrap
=======
<style lang="scss"></style>
>>>>>>> dcff4fe... Refactor: Running the prettier scripts
