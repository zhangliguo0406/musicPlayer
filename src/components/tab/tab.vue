
<template>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/recommend">
        <span class="tab-link">推荐</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/singer">
        <span class="tab-link">歌手</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/rank">
        <span class="tab-link">排行</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/search">
        <span class="tab-link">搜索</span>
      </router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {},
  methods: {}
}
</script>

<style lang="less" scoped>
  .tab{
    display: flex;
    .tab-item{
      flex: 1;
      color: #69798C;
      margin: 0 23px;
      text-align: center;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
    }
    .router-link-active{
      color: #CDA32E;
      border-bottom: 2px solid #CDA32E;
    }
  }
</style>
