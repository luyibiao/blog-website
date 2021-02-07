<template>
  <transition name="blog-fadein" appear>
    <div class="breadcrumbbasis">
      <breadcrumb>
        <breadcrumb-item :to="getBreadcrumbInfo.prevUrl">{{getBreadcrumbInfo.prevTitle}}</breadcrumb-item>
        <breadcrumb-item>{{getBreadcrumbInfo.currentTitle || title}}</breadcrumb-item>
      </breadcrumb>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'breadcrumb-basic',
  data() {
    return {
      title: ''
    }
  },
  computed: {
    ...mapGetters(['getBreadcrumbInfo'])
  },
  created() {
    this.title = $vue.$route.meta.title || '九七个人博客'
  },
}
</script>

<style lang="scss">
.breadcrumbbasis {
  background: rgba(255, 255, 255, .5);
  padding: 25px;
  margin-bottom: 15px;
  box-sizing: border-box;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #748594;
  }
}
</style>