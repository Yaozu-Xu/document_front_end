<template>
  <div class="w-100">
    <b-container class="p-0" fluid>
      <b-row no-gutters>
        <div :class="{'mt-1':true,'index_mobile':true,'index_mobile--enter':enterbutton,'index_mobile--back':backbutton}">
          <div>
            <siderbar />
            <b-icon icon="arrow-return-left" class="index_mobile_backbutton" @click="BackSiderbar" />
          </div>
          <button class="index_mobile_enterbutton" @click="EnterSiderbar">
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
            ><line
              x1="8"
              x2="21"
              y1="6"
              y2="6"
            /><line
              x1="8"
              x2="21"
              y1="12"
              y2="12"
            /><line
              x1="8"
              x2="21"
              y1="18"
              y2="18"
            /><line
              x1="3"
              x2="3"
              y1="6"
              y2="6"
            /><line
              x1="3"
              x2="3"
              y1="12"
              y2="12"
            /><line
              x1="3"
              x2="3"
              y1="18"
              y2="18"
            /></svg>
          </button>
        </div>

        <b-col cols="4" lg="2" class="mt-1 index_col--web">
          <siderbar />
        </b-col>
        <b-col cols="12" lg="10" class="mt-1" style="z-index:-1">
          1111111111111111111<br>
          1111111111111111111<br>
          占位
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import siderbar from '../components/SiderBar/index'
export default {
  components: {
    siderbar
  },
  data () {
    return {
      backbutton: true,
      enterbutton: false
    }
  },
  methods: {
    EnterSiderbar () {
      this.backbutton = !this.backbutton
      this.enterbutton = !this.enterbutton
    },
    BackSiderbar () {
      this.backbutton = !this.backbutton
      this.enterbutton = !this.enterbutton
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.index_mobile {
  width: 100%;
  background-color: white;
  box-shadow:0 0 8px rgba(0,0,0,0.10);
  @extend .fixed;

  &_backbutton,&_enterbutton {
    border-right: $common-border;
    right:0;
    width: 2.5rem;
    top: 4rem;
    box-shadow: 4px 2px 4px rgba(0,0,0,0.2);
    transform: translateX(100%);
    @extend .absolute;
    @extend .flex;
    @extend .justify-center;
    @extend .z-20;

    @media screen and (min-width: 600px){
      display: none;
    }
  }

  &_enterbutton {
    height: 2rem;
    border-radius: 0 9999px 9999px 0;
    @extend .item-center;
  }

  &_backbutton {
    background-color: rgb(237, 242, 247);
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
    transform: translateX(-50%);
  }

  &--enter {
    transform: translateX(0);
    transition-duration: .35s;
    transition-property: transform;
    transition-timing-function:cubic-bezier(0.4,0,0.6,1);
  }

  &--back {
    transform: translateX(calc(-100% - 1px));
    transition-duration: .35s;
    transition-property: transform;
    transition-timing-function:cubic-bezier(0.4,0,0.6,1);
  }
}

.index_col {
  &--web {
    border-right: $common-border;

    @media screen and (max-width: 600px){
      display: none;
    }
  }

}
</style>
