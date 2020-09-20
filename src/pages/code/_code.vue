<template>
  <div class="d-flex main-container">
    <div class="d-flex flex-column flex-grow-1 m-4 m-sm-5 code-area">
      <code-container :code="codeContent" />
    </div>
  </div>
</template>

<script>
import CodeConatiner from "@/components/public/CodeContainer.vue";

const DependencyManager = require("@/services/DependencyManager");

const TestCodeRequester = DependencyManager.getDependency("TestCodeRequester");

export default {
  components: {
    "code-container": CodeConatiner,
  },
  asyncData({ params }) {
    const { code } = params;
    const codeContent = TestCodeRequester.getCodeById(code);
    return { codeContent };
  },
};
</script>
