<template>
  <div class="w-100">
    <b-container class="p-0" fluid>
      <b-row no-gutters>
        <div
          class="mt-1 index_mobile"
          :class="{
            'index_mobile--enter': isSidebarOpen,
            'index_mobile--back': !isSidebarOpen,
          }"
        >
          <div>
            <sidebar />
            <b-icon
              icon="arrow-return-left"
              class="index_mobile_backbutton"
              @click="ToggleSidebar"
            />
          </div>
          <button class="index_mobile_enterbutton" @click="ToggleSidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="block text-nuxt-gray dark:text-dark-onSurfaceSecondary stroke-current transition-colors duration-300 ease-linear"
            >
              <line x1="8" x2="21" y1="6" y2="6" />
              <line x1="8" x2="21" y1="12" y2="12" />
              <line x1="8" x2="21" y1="18" y2="18" />
              <line x1="3" x2="3" y1="6" y2="6" />
              <line x1="3" x2="3" y1="12" y2="12" />
              <line x1="3" x2="3" y1="18" y2="18" />
            </svg>
          </button>
        </div>

        <b-col cols="4" lg="2" class="mt-1 border-right d-none d-sm-block">
          <sidebar />
        </b-col>
        <b-col class="mt-1">
          <document-container />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DocumentContainer from "../components/public/DocumentContainer.vue";
import sidebar from "../components/sidebar/sidebar.vue";

export default {
  components: {
    sidebar,
    "document-container": DocumentContainer,
  },
  data() {
    return {
      isSidebarOpen: true,
    };
  },
  methods: {
    ToggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.index_mobile {
  @extend .w-100;
  @extend .bg-white;
  @extend .shadow;
  @extend .position-fixed;
  @extend .d-block;
  @extend .d-sm-none;

  &_backbutton,
  &_enterbutton {
    @extend .border-right;
    @extend .shadow;
    @extend .position-absolute;
    @extend .d-flex;
    @extend .justify-content-center;
    @extend .z-20;
    transform: translateX(100%);
    top: 4rem;
    right: 0;
  }

  &_enterbutton {
    @extend .rounded-pill;
    @extend .align-items-center;
    @extend .shadow;
    height: 2rem;
  }

  &_backbutton {
    @extend .bg-lightgrey;
    @extend .rounded-circle;
    width: 2rem;
    height: 2rem;
    transform: translateX(-50%);
  }

  &--enter {
    transform: translateX(0);
    transition-duration: 0.35s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }

  &--back {
    transform: translateX(calc(-100% - 1px));
    transition-duration: 0.35s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
}
</style>
