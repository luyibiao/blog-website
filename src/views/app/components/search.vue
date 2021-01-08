<template>
  <ui-popup 
  class="header-search"
  width="100%" 
  :isHeader="false"
  :isFooter="false"
  top="0">
    <span class="components-search-close" @click="reject()">
      <b-icon name="blog-searchclose" size="30" color="#748594"></b-icon>
    </span>
    <div class="wrap">
      <b-input v-model="search" placeholder="输入关键词搜索">
         <template slot='append'>
          搜索
        </template>
      </b-input>
    </div>
  </ui-popup>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
   
  },
}
</script>

<style lang="scss">
  .header-search {
    .components-search-close {
      position: absolute;
      right: 12%;
      top: 9%;
      cursor: pointer;
    }
    .components-dialog_main {
      width: 100%;
      height: 100%;
      background: #fff;
      border-radius: 0;
      .wrap {
        width: 60%;
        min-width: 800px;
        margin: 20% auto 0;
        text-align: center;
      }
    }
  }
</style>