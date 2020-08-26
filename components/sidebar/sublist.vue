<template>
  <div class="p-0">
    <b-list-group class="pr-5 text-center font-sublist">
      <b-list-group-item
        v-for="(item, index) in sublist"
        :key="index"
        role="button"
        class="index_list--hover border-0 user-select-none py-1"
      >
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
      default  () {
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

<style lang="scss">
</style>
