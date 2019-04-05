<template>
  <div class="app-control">
    <div class="iconfont icon-code logo"></div>
    <div class="control-bar">
      <div class="btn iconfont icon-mini" title="迷你模式"></div>
      <div class="btn iconfont icon-hide" title="最小化"></div>
      <div class="btn iconfont icon-max" title="最大化"></div>
      <div class="btn iconfont icon-close" title="关闭"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>
<style lang='scss' scoped>
.app-control {
  background: #36c2cf;
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  -webkit-app-region: drag;
  font-size: 30px;
  color: #fff;
  flex:1;
}
.btn {
  display: inline-block;
  color: #fff;
  opacity: 0.8;
  margin: 0 5px;
  font-size: 18px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}
</style>