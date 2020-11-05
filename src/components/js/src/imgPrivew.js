import Vue from 'vue'

export default function (params){
  document.body.querySelectorAll('.img-privew').forEach(v => {
    document.body.removeChild(v);
  })
  var el = Vue.component('imgPrivew', {
    template: `<el-image :style="{width: 0, height: 0}" class="img-privew custom_img-priview" :src="currentSrc" :preview-src-list="list" :z-index="6666"/>`,
   })
  var imgPrivew = Vue.extend(el);
  var vEl = new imgPrivew({
      data:{
        currentSrc: params.currentSrc,
        list: params.list || [params.currentSrc],
      },
      mounted() {
        this.$children[0].showViewer = true;
      },
    });
  var shadeEl = vEl.$mount().$el;
  document.body.appendChild(shadeEl);
}
