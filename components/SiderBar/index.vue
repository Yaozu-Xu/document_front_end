<template>
  <div class="siderbar">
    <b-form class="siderbar_search">
      <b-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Search..."
      />
    </b-form>
    <b-list-group class="siderbar_list">
      <b-list-group-item v-for="(item, index) in siderbarList" :key="index">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          class="siderbar_svg"
        ><polyline
           points="9 18 15 12 9 6"
           :class="{'sublist--toggle':currentIndex===index}"
         />
          <polyline
            points="6 9 12 15 18 9"
            :class="{'sublist--toggle':currentIndex!==index}"
          />
        </svg>
        <span @click="ContentToogle(index)">
          {{ item.content }}
        </span>
        <div ref="content" :class="{'sublist--toggle':currentIndex!==index}">
          <listitem :sublist="item.sublist" />
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import listitem from '../SiderBar/sublist'
export default {
  components: {
    listitem
  },
  data () {
    return {
      currentIndex: -1,
      siderbarList: [
        {
          content: 'Dapibus',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'Vestibulum',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'ulum',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'ibus',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'Dap',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'sDapibus',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'Dapibus',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'Dapibus',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'Vestibulum',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'ulum',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'ibus',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'Dap',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'sDapibus',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'Dapibus',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'Dapibus',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'Vestibulum',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'ulum',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'ibus',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'Dap',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'sDapibus',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        },
        {
          content: 'Dapibus',
          sublist: ['Morbi', 'Morbi', 'Morbi', 'Morbi']
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    ContentToogle (i) {
      this.currentIndex = (this.currentIndex === -1) ? i : -1
    }
  }
}
</script>

<style lang='scss' scoped>
.sublist--toggle {
  display:none;
}
</style>
