<template>
  <div class="layout-default">
    <b-container fluid>
      <b-row fluid>
        <navg />
      </b-row>
      <b-row>
        <Nuxt />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import navg from '../components/public/nav'
export default {
  components: {
    navg
  }
}
</script>

<style lang="scss">
@import "@/assets/main.scss";
</style>
