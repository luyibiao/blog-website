<template>
  <div class="article-detail-comment">
    <column-title class="title">评论一下</column-title>
    <div class="is-login">
      <template v-if="isLogin">
        <p>已登录，{{userInfo.userName}}
          <span @click="register" class="register-btn">重新登录</span>
        </p>
      </template>
      <template v-else>
        <p>没有登录过？
          <span @click="register" class="register-btn">立即登录</span>
        </p>
      </template>
    </div>

    <div class="article-detail-comment_inner">
      <b-comment @submit="submit"/>
    </div>

    <!--评论列表-->
    <div class="components-comment-content">
      <div class="content-title">评论列表</div>
      <div class="components-comment-list">
        <div class="components-comment-item" v-for="(item, index) in list" :key="index">
          <div class="header-circle" :style="headStyles(item)">{{$overall.splitName(item.userName)}}</div>
          <div class="components-comment-item-inner">
            <p class="title">{{item.userName}}</p>
            <p class="detail">{{item.comment_content}}</p>
            <p class="time">{{item.create_time}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import registers from '@/components/basic/register'
import storage from '@/utils/storage'
export default {
  data() {
    return {
      query: {},
      list: [],
      pageSize: 10,
      pageIndex: 1,
      total: 0,
      isLogin: false,
      userInfo: {}
    }
  },
  computed: {
    
  },
  created() {
    this.query = this.$route.query
    this.getList()
    this.checkUser()
  },
  methods: {
    checkUser() {
      this.userInfo = storage.getCache('userInfo')
      this.isLogin = !!storage.getCache('userInfo')
    },
    getList() {
      const sendData = {
        article_id: this.query.id,
        pageSize: this.pageSize,
        pageIndex: this.pageIndex - 1,
      }
      this.$api.queryComments(sendData).then(res => {
        this.list = res.list
      })
    },
    register() {
      this.$popup(registers).then(res => {
        this.checkUser()
      })
    },
    submit(info) {
      const sendData = {
        article_id: this.query.id,
        user_id: info.users.id,
        comment_content: info.content
      }
      this.$api.addComment(sendData).then(res => {
        this.$message.success('评论成功')
        this.getList()
      })
    },
    headStyles(item) {
      item = item || {}
      return {
        background: item.bg_color || '#15B6E6'
      }
    }
  },
}
</script>
<style lang="scss">
  .article-detail-comment {
    background: #fff;
    margin-top: 20px;
    padding: 40px 40px 50px;
    .title {
      font-size: 20px;
    }
    .components-column-title {
      &::before {
        height: 20px;
      }
    }
    .is-login {
      margin-top: 40px;
      // font-weight: bold;
      color: #363636;
      .register-btn {
        cursor: pointer;
        color: #63B8FF;
        transition: color .2s;
        &:hover {
          color: #748594;
        }
        // font-weight: bold;
      }
    }

    .article-detail-comment_inner {
      margin-top: 50px;
    }

    
    .components-comment-content {
      margin-top: 70px;
      .content-title {
        border-bottom: 1px solid #e7e7e7;
        padding: 10px 0;
        color:  #2e2d38;
        font-weight: 500;
        font-size: 18px;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          display: block;
          width: 70px;
          height: 2px;
          background:  #2e2d38;
          bottom: 0;
        }
      }

      .components-comment-list {
        margin-top: 10px;
        .components-comment-item {
          display: flex;
          align-items: flex-start;
          padding: 15px 0;
          .header-circle {
            width: 70px;
            height: 70px;
            border-radius: 100%;
            // background: #15B6E6;
            line-height: 70px;
            color: #fff;
            font-size: 25px;
            font-weight: 500;
            text-align: center;
            user-select: none;
          }

          .components-comment-item-inner {
            flex: 1;
            margin-left: 15px;
            .title {
              color: #3cbf4c;
              font-size: 18px;
              margin-bottom: 8px;
            }
            .detail {
              font-size: 15px;
              color:  #333;
              line-height: 1.5;
              margin-bottom: 10px;
            }
            .time {
              // margin-top: -3px;
              font-size: 13px;
              color: #888;
            }
          }
        }

        .components-comment-item + .components-comment-item {
          border-top: 1px solid  #e7e7e7;
        }
      }
    }
  }
</style>