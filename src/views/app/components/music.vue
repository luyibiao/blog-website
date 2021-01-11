<template>
  <div class="header-music" :class="classes"  @mouseenter="mouseenter" @mouseleave="mouseleave">
    <div ref="player" ></div>
    <span class="next-img-icon" @click="next">
      <img src="~@/assets/imgs/next-active.png" alt="">
    </span>
  </div>
</template>

<script>
import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';
import { debounce } from '@/utils/debounce'
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      player: null,
      timer: null,
      count: 1
    }
  },
  watch: {
    value(val) {
      if (!val) {
        this.timer && clearTimeout(this.timer)
        this.timer = null
        this.player.list.hide()
      } else {
        this.startTimer()
      }
    }
  },
  computed: {
    classes() {
      return [
        this.value && 'is-music-show'
      ]
    }
  },
  mounted() {
    this.initPlayer()
    // window.addEventListener('click', function() {})
  },
  methods: {
    next() {
      this.getMusic().then(r => {
        this.$nextTick(_ => {
          this.player.skipForward()
          this.player.play()
        })
      })
    },
    startTimer() {
      this.timer = setTimeout(_ => {
        this.$emit('input', false)
        this.timer = null
      }, 2000)
    },
    // 鼠标移入
    mouseenter() {
      this.timer && clearTimeout(this.timer)
      this.timer = null
    },
    // 鼠标移出
    mouseleave() {
      this.startTimer()
    },
    initPlayer() {
      this.player = new APlayer({
        container: this.$refs.player,
        theme: '#ebd0c2',
        loop: 'all',
        audio: [],
        mini: false,
      });
      this.getMusic()
      this.player.on('ended', e => {
        this.getMusic()
      })
      this.player.on('playing', e => {
        this.$emit('playing')
      })
      this.player.on('pause', e => {
        this.$emit('paused')
      })
    },
    addMusic(options) {
      this.player.list.add(options);
      this.$nextTick(_ => {
        this.player.skipForward()
      })
    },
    getMusic() {
      return this.$api.queryWYYmusic().then(res => {
        const options = {
          url: res.url,
          cover: res.cover,
          name: res.song,
          author: '',
          mini: false,
        }
        this.addMusic(options)
        this.$store.commit('setCurrentMusicInfo', res)
      })
    }
  },
}
</script>

<style lang="scss">
  .header-music {
    position: absolute;
    width: 500px;
    left: -500px;
    top: 0;
    pointer-events: none;
    opacity: 0;
    transition: all .2s;
    overflow: hidden;
    height: 0;
    .aplayer {
      .aplayer-list ol li {
        z-index: 9999;
        background: #fff;
      }
    }
    .aplayer-author {
      display: none;
    }
    &.is-music-show {
      pointer-events: auto;
      opacity: 1;
      height: 70px;
      overflow: visible;
    }
    .next-img-icon {
      position: absolute;
      display: inline-block;
      right: 20px;
      top: 20px;
      width: 20px;
      height: 20px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>