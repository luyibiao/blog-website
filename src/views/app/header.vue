<template>
  <div class="home-header">
    <div class="blog-app_home-logo">
     <div>
       <img src="~@/assets/imgs/logo.png" alt="" class="blog-app_home-logo-inner"/>
     </div>

     <p class="blog-app_home-logo-text">{{getMineInfo.description}}</p>

     <div class="home-search_wraper">
       <musics v-model="showMusic" @playing="playing" @paused="paused"/>
       <span class="home-search_wraper_inner" @click="onMusic">
         <musicrunes v-if="isplays"/>
         <b-icon name="blog-laba" size="20" color="#748594" v-else/>
       </span>
       <span class="home-search_wraper_line"></span>
       <span class="home-search_wraper_inner" @click="onSearch">
         <b-icon name="blog-sousuo" size="25" color="#748594"/>
       </span>
       <!-- <input class="blog-app_home-input" placeholder="输入关键词搜索"/>
       <button class="home-search-btn">搜索</button> -->
     </div>
   </div>

    <div class="home-header_nav">
      <div class="home-header_nav-wraper">
        <div 
        class="home-header_nav-item"
        v-for="(item, index) in getArticleType"
        @click="go(item)"
        :class="getPareneCode === item.code && 'is-active'"
        :key="index">
          <span class="home-header_nav-inner">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import searchs from './components/search'
import musics from './components/music'
import musicrunes from './components/musicrunes'
export default {
  components: {
    musics,
    musicrunes
  },
  data() {
    return {
      showMusic: false,
      isplays: false
    }
  },
  computed: {
    ...mapGetters(['getArticleType', 'getPareneCode', 'getMineInfo'])
  },
  watch: {

  },
  created() {
    
  },
  methods: {
    go(v) {
      this.$store.commit('setCurrentTitle', '首页' )
      this.$overall.setBreadcrumb({currentTitle: v.name})
      this.$router.push({
        name: v.route_url,
        query: {
          code: v.code
        }
      })

      // if (this.currentValue === v.label) return
      // this.$store.commit('setCurrentTitle', '首页' )
      // this.$overall.setBreadcrumb({currentTitle: v.name})
      // this.$router.push({
      //   path: v.url
      // })
    },
    playing() {
      this.isplays = true
    },
    paused() {
      this.isplays = false
    },
    onMusic() {
      this.showMusic = !this.showMusic
    },
    onSearch() {
      this.$popup(searchs)
    }
  },
}
</script>

<style lang="scss">
.home-header {
  margin-top: -2px;
  // background: #fff;
  .blog-app_home-logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    padding: 25px 0;
    .blog-app_home-logo-inner {
      display: block;
      width: 320px;
    }
    .blog-app_home-logo-text {
      // margin: 20px 0 0 0px;
      font-size: 15px;
      font-weight: bold;
      width: 320px;
      line-height: 1.5;
    }
    .home-search_wraper {
      display: flex;
      align-items: center;
      position: relative;
      .home-search_wraper_inner {
        cursor: pointer;
      }
      .home-search_wraper_line {
        width: 2px;
        height: 20px;
        margin: 0 10px;
        background: #748594;
      }
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
    // margin-top: 30px;
    background: #333;
    .home-header_nav-wraper {
      width: 1200px;
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