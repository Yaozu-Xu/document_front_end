<template>
  <div>
    <b-container fluid>
      <b-row fluid>
        <navbar />
      </b-row>
      <b-row>
        <Nuxt />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import navbar from "../components/public/nav.vue";

export default {
  components: {
    navbar,
  },
};
</script>
