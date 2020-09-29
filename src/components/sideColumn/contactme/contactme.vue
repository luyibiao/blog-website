<!--关注我-->
<template>
  <div class="components-contactme">
    <column-title>关注我 ~~</column-title>
    <div class="components-contactme_list">
      <div class="components-contactme_item" 
      v-for="(item, index) in list" 
      :key="index"
      >
        <div class="inner" :style="styles(item)">
          <span>
            <b-icon :name="item.icon" :color="item.color" size="20px"/>
          </span>
          <span class="inner-label">{{item.value}}</span>
        </div>
        <button class="label" :style="labelStyles(item)">{{item.name}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'components-contactme',
  data() {
    return {
      list: [{
        name: '微信',
        value: 'lyb0901888',
        icon: 'blog-weixin',
        color: '#199872',
      }, {
        name: 'QQ',
        value: '1739717921',
        icon: 'blog-QQ',
        color: '#12aae8',
      }, {
        name: '邮箱',
        value: '1739717921@qq.com',
        icon: 'blog-youxiang',
        color: '#2ab39a',
      }, {
        name: '知乎',
        value: '九七',
        icon: 'blog-zhihu',
        color: '#0084ff',
      }, {
        name: '王者',
        value: '我帅到当壁纸',
        icon: 'blog-wangzhe',
        color: '#FFC125',
      }]
    }
  },
 
  methods: {
    styles(item) {
      return {
        borderColor: this.$overall.colorToRGB(item.color, .3)
      }
    },
    labelStyles(item) {
      return {
        backgroundColor: item.color
      }
    },
  },
}
</script>

<style scoped lang="scss">
.components-contactme {
  margin-bottom: 20px;
  background: #fff;
  margin-top: 20px;
  padding: $fs-30 $fs-20x;
  box-sizing: border-box;
  .components-contactme_list {
    margin-top: 30px;
    .components-contactme_item {
      display: flex;
      .inner {
        border-width: 1px;
        border-style: solid;
        padding: 10px 15px;
        flex-grow: 1;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        font-size: 13px;
        .inner-label {
          margin-left: 10px;
          // font-size: 13px;
        }
      }
      .label {
        flex-basis: 90px;
        text-align: center;
        color: #fff;
        font-size: 12px;
        border: none;
        outline: none;
        transition: flex-basis .3s;
        &:hover {
          flex-basis: 110px
        }
      }
    }
    .components-contactme_item + .components-contactme_item {
      margin-top: 15px;
    }
  }
}
</style>