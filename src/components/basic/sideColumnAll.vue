<template>
  <div class="components-sideColumnAll">
    <friendLinks />
    <div v-for="(item, index) in columnList" :key="index">
      <component :is="item.name" :item="item"></component>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import friendLinks from '../sideColumn/friendLinks/friendLinks'

export default {
  name: 'sideColumnAll',
  components: {
    friendLinks
  },
  props: {
    noShowList: {
      type: Array,
      default: () => []
    },
    pageCode: {
      type: String,
      default: 'HOME'
    }
  },
  computed: {
    ...mapGetters(['getArticleType', 'getPareneCode'])
  },
  data() {
    return {
      columnList: [],
      query: {}
    }
  },
  created() {
    this.query = this.$route.query
    this.getColumnList()
  },
  methods: {
    getColumnList() {
      let isExitColumn = false
      const instance = this.getArticleType.find(v => v.code === this.getPareneCode) || {}
      if (instance.side_column) {
         const arr = instance.side_column.split(',')
         this.columnList = arr.reduce((acc, v, i) => this.$sideColumn[v] ? [...acc, ...this.$sideColumn[v]] : [], [])
         isExitColumn = true
      }
      this.$emit('finish', isExitColumn)
    }
  },
}
</script>