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

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
</style>

<script>
<<<<<<< HEAD
import navbar from "../components/public/nav.vue";

export default {
  components: {
    navbar,
  },
};
</script>
=======
import navbar from '../components/public/nav'
export default {
  components: {
    navbar
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
>>>>>>> 5b9cfe0... Refactor: refactor the code by using build-in classes in bootstrap
