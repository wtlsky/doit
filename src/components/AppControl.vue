<template>
  <div class="app-control">
    <div class="logo">Now</div>
    <!-- <div class="iconfont icon-code logo"></div> -->
    <div class="control-bar">
      <div class="btn iconfont icon-mini"
           title="迷你模式"></div>
      <div class="btn iconfont icon-hide"
           title="最小化"
           @click="controlWin('MIN')"></div>
      <div class="btn iconfont"
           :class="[isMaximize ? 'icon-normal' : 'icon-max']"
           :title="isMaximize ? '还原' : '最大化'"
           @click="controlWin('MAX')"></div>
      <div class="btn iconfont icon-close"
           title="关闭"
           @click="controlWin('CLOSE')"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isMaximize: false
    };
  },
  methods: {
    /**
     * 控制窗口大小
     * @param type {string} 动作 - MINI,MAX,MIN,CLOSE
     */
    controlWin (type) {
      let win = this.$remote.getCurrentWindow();
      if (type === "MIN") {
        win.minimize();
      }
      if (type === "MAX") {
        if (this.isMaximize) {
          win.unmaximize();
          this.isMaximize = false;
        } else {
          win.maximize();
          this.isMaximize = true;
        }
      }
      if (type === 'CLOSE') {
        win.close()
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.app-control {
  background: #026aee;
  height: 0.3rem;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.control-bar {
  display: flex;
}
.logo {
  -webkit-app-region: drag;
  color: #fff;
  flex: 1;
  font-size: 0.14rem;
}
.btn {
  display: inline-block;
  color: #fff;
  opacity: 0.8;
  margin: 0 5px;
  font-size: 14px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}
</style>