<template>
  <div class="code-container">
    <pre class="p-3 p-md-4">{{ code }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
pre {
  background-color: #f8f8f8;
  white-space: pre;
  overflow: auto;
}
</style>
