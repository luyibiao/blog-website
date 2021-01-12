<template>
  <div class="detail-content-share">
    <div class="detail-content-share_inner" v-for="(item, index) in menus" :key="index">
      <p class="title">
        <span class="icon">
          <b-icon :name="item.icon" :color="item.bcolor" size="22"></b-icon>
        </span>
        <span style="height: 100%">{{item.text}}</span>
      </p>
      <div class="code">
        <img :src="url" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'
export default {
  data() {
    return {
      menus: [{
        text: '微信扫一扫',
        icon: 'blog-weixin',
        bcolor: '#199872'
      }],
      url: ''
    }
  },
  created() {
    const href = window.location.href.replace('/article-detail', '/mobile-detail')
    QRCode.toDataURL(`${href}`, {
      width: 80,
      height: 60,
      margin: 1,
      scale: 1,
      quality: .1
    })
    .then(url => {
      console.log(url)
      this.url = url
    })
    .catch(err => {
      console.error(err)
    })
  },
  
}
</script>

<style lang="scss">
  .detail-content-share {
    background: #fff;
    z-index: 2000 ;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-shadow: 0 5px 20px rgba(18,18,18,.1);
    padding: 10px 0;
    box-sizing: border-box;
    width: 140px;
    .detail-content-share_inner {
      padding: 8px 15px;
      box-sizing: border-box;
      color: #8590a6;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
      .title {
        display: flex;
        height: 20px;
        align-items: center;
        .icon {
          height: 100%;
          margin-right: 8px;
          flex-basis: 20px;
        }
      }
      .code {
        margin-top: 10px;
        text-align: center;
        img {
          width: 100%;
        }
      }
    }
  }
</style>