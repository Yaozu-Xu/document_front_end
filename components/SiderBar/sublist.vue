<template>
  <div class="sublist p-0">
    <b-list-group class="p-0">
      <b-list-group-item v-for="(item, index) in sublist" :key="index" class="sublist_item">
        {{ item }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  props: {
    sublist: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/main";

.sublist {

  &_item {
    font-size: calc(#{$current-font} - 0.25rem);
  }
}
</style>
