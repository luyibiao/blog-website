<template>
  <div class="home-header">
    <div class="blog-app_home-logo">
     <div>
       <img src="~@/assets/imgs/logo.png" alt="" class="blog-app_home-logo-inner"/>
       <p class="blog-app_home-logo-text">用代码改变世界~~</p>
     </div>
     <div class="home-search_wraper">
       <input class="blog-app_home-input" placeholder="输入关键词搜索"/>
       <button class="home-search-btn">搜索</button>
     </div>
   </div>

    <div class="home-header_nav">
      <div class="home-header_nav-wraper">
        <div 
        class="home-header_nav-item"
        v-for="(item, index) in menus"
        @click="go(item)"
        :class="currentValue === item.label && 'is-active'"
        :key="index">
          <span class="home-header_nav-inner">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentValue: '',
      menus: [{
        name: '首页',
        url: '/',
        label: 'home'
      }, {
        name: '技术分享',
        url: '/skill',
        label: 'skill'
      }, {
        name: '心情随笔',
        url: '/prose',
        label: 'prose'
      }, {
        name: '书屋',
        url: '/novel',
        label: 'novel'
      }, {
        name: '关于我',
        url: '/mine',
        label: 'mine'
      }, {
        name: '留言~~',
        url: '/contact',
        label: 'contact'
      }]
    }
  },
  watch: {
    '$route'(v) {
      this.currentValue = v.name
    }
  },
  methods: {
    go(v) {
      if (this.currentValue === v.label) return
      this.$router.push({
        path: v.url
      })
    }
  },
}
</script>

<style lang="scss">
.home-header {
  margin-top: -2px;
  .blog-app_home-logo {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    .blog-app_home-logo-inner {
      display: block;
      width: 350px;
    }
    .blog-app_home-logo-text {
      margin: 20px 0 0 0px;
      font-size: 15px;
      font-weight: bold;
    }
    .home-search_wraper {
      display: flex;
      .blog-app_home-input {
        outline: none;
        border: none;
        border: 2px solid #00a67c;
        // border-radius: 5px;
        padding: 10px 5px;
        box-sizing: border-box;
        border-right: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        font-size: 15px;
        transition: all .5s;
        width: 260px;
        
      }
      .home-search-btn {
        outline: none;
        border: none;
        background: #01a77d;
        color: #fff;
        align-self: stretch;
        padding: 0 15px;
        box-sizing: border-box;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        cursor: pointer;
        transition: all .3s;
        &:hover {
          opacity: .8;
        }
        &:active {
          opacity: 1;
          background: #02916d;
        }
      }
    }
  }
  .home-header_nav {
    // width: 60%;
    margin-top: 30px;
    background: #333;
    .home-header_nav-wraper {
      width: 80%;
      margin: auto;
      display: flex;
      .home-header_nav-item {
        position: relative;
        padding: 20px 15px;
        box-sizing: border-box;
        cursor: pointer;
        color: #fff;
        font-size: 17px;
        transition: all .3s;
        user-select: none;
        margin-right: 25px;
        &:hover {
          background: #4A4A4A;
        }
        
        &.is-active {
          background: #63B8FF;
        }
      }
    }
  }
}
</style>