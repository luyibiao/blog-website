<template>
  <div class="musitop" :key="index" >
    <div id="musibox" :class="open ? 'running' : ''">
      <div class="musibox-item"></div>
      <div class="musibox-item"></div>
      <div class="musibox-item"></div>
      <div class="musibox-item"></div>
    </div>
  </div>
</template>


<script>
export  default {
  name:"musicrunes",
  props:{
    bools:{
      type:Boolean,
      default:true
    },
    open:{
      type:Boolean,
      default: false
    },
    index:{
      type:Number,
      default:0
    }
  },
  data(){
    return {
      datas:"",
    }
  },
  created() {

  },
  methods:{

  }
}

</script>


<style lang="scss" scoped>
.musitop{
  width: 17px;
  position: relative;
  height: 15px;
}

#musibox {
  .musibox-item {
    display: inline-block;
    position: absolute;
    bottom: 0;
    width: 2px;
    height: 10px;
    background-color: #FF7030;
    transform-origin: bottom ;
    border-radius: 2px 2px 0 0;
    animation-play-state: running;
  }
}
#musibox div:nth-child(1){
  left: 0rem;
  animation: musicWave1 0.7s infinite linear both alternate;
}
#musibox div:nth-child(2){
  left: 3px;
  animation: musicWave2 0.4s infinite linear both alternate;
}
#musibox div:nth-child(3){
  left: 6px;
  animation: musicWave3 0.5s infinite linear both alternate;
}
#musibox div:nth-child(4){
  left: 9px;
  animation: musicWave4 0.6s infinite linear both alternate;
}

@keyframes musicWave1{
  0%{
    height: 10px;
  }
  100%{
    height: 15px;
  }
}
@keyframes musicWave2{
  0%{
    height: 14px;
  }
  100%{
    height: 8px;
  }
}
@keyframes musicWave3{
  0%{
    height: 10px;
  }
  100%{
    height: 15px;
  }
}
@keyframes musicWave4{
  0%{
    height: 14px;
  }
  100%{
    height: 7px;
  }
}
#musibox {
  &.paused {
    .musibox-item {
      animation-play-state: paused;
    }
  }
  &.running {
    .musibox-item {
      animation-play-state: running;
    }
  }
}

</style>