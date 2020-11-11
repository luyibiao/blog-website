<template>
  <emoji-icon :iconConfig="iconConfig" @select="selectEmoji"></emoji-icon>
</template>

<script>
export default {
  data() {
    return {
      iconConfig: {
        placement: 'bottom',
        size: '30px',
      },
    }
  },
  methods: {
    selectEmoji(val) {
      let str = val
      // 匹配图片（g表示匹配所有结果i表示区分大小写）
      let imgReg = /<img.*?(?:>|\/>)/gi
      // 匹配src属性
      let nameReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
      let arr = str.match(imgReg)
      // console.log('所有已成功匹配图片的数组：' + arr)
      for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        let names = arr[i].match(nameReg)
        // 获取图片地址
        if (names && names[1]) {
          // console.log('已匹配的图片地址' + (i + 1) + '：' + names[1])
          str = str.replace(arr[i], names[1])
        }
      }

      const s = str.split(' ')[0].replace('./static', '')
      const image = new Image()
      
      image.src = require('@/assets' + s)
      this.$emit('change', image, {urlAfter: s, urlBefroe: val})
    }
  },
}
</script>