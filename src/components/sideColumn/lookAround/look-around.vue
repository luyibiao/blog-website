<!--随便看看-->
<template>
  <div class="look-around">
    <column-title>随便看看</column-title>
    <div class="look-around_wrap">
      <div class="look-around_wrap-top">
        <img-mask :src="require('@/assets/imgs/haitan.jpg')">
          <template #inner>
            <div class="look-around_wrap-top_inner">
              <div class="date">2019-08-04</div>
              <div class="title">八大中国最美外滩</div>
            </div>
          </template>
        </img-mask>
      </div>
      <div class="look-around_list">
        <div class="look-around_item" v-for="(item, index) in 3" :key="index">
          <div class="look-around_item_img">
            <img src="~@/assets/imgs/haitan.jpg"/>
          </div>
          <div class="look-around_item-inner">
            <p class="title">比较完整的SEO方案</p>
            <p class="date">2020-09-27</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'look-around'  
}
</script>

<style lang="scss">
.look-around {
  background: #fff;
  padding: $fs-30 $fs-20x;
  box-sizing: border-box;
  margin-bottom: 20px;
  .look-around_wrap {
    margin-top: 30px;
    .look-around_wrap-top {
      position: relative;
      .look-around_wrap-top_inner {
        // position: absolute;
        // bottom: 20px;
        // color: #fff;
        // left: 15px;
        // right: 15px;
        .date {
          font-size: 12px;
          margin-bottom: 8px;
        }
      }
    }
  }

  .look-around_list {
    margin-top: 15px;
    .look-around_item {
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        .look-around_item-inner {
          opacity: .8;
        }
      }
      .look-around_item_img {
        width: 100px;
        img {
          width: 100%;
          height: 75px;
        }
      }
      .look-around_item-inner {
        // display: flex;
        // flex-direction: column;
        // justify-content: space-between;
        .title {
          font-size: 15px;
          margin-bottom: 20px;
        }
        .date {
          font-size: 12px;
        }
        margin-left: 15px;
      }
    }
    .look-around_item + .look-around_item {
      margin-top: 15px;
    }
  }
}
</style>