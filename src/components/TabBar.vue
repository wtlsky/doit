<template>
  <div class='tab-bar'>
    <router-link tag="div"
                 :to="tab.link"
                 class="tab-item"
                 v-for="(tab,idx) in tabs"
                 :key="idx">
      <div class="icon iconfont"
           :class="tab.icon"></div>
      <div class="title">{{tab.title}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      tabs: [
        {
          title: '任务',
          link: '/mission',
          icon: 'icon-daiban'
        },
        {
          title: '提醒',
          link: '/remid',
          icon: 'icon-tixing'
        },
        {
          title: '便签',
          link: '/note',
          icon: 'icon-wodebiji'
        }
      ]
    };
  },
  methods: {

  },
  created () {

  },
}
</script>
<style lang='scss' scoped>
@keyframes lightShadow {
  0% {
    box-shadow: none;
  }
  50% {
    box-shadow: 0 -1px 10px rgb(241, 206, 5);
  }
  100% {
    box-shadow: none;
  }
}
@keyframes lightOpacity {
  0% {
    border-radius: 0;
  }
  50% {
    border-radius: 50%;
  }
  100% {
    border-radius: 0;
  }
}
.tab-bar {
  display: grid;
  grid-template-columns: repeat(3, 0.75rem);
  justify-content: center;
  grid-gap: 0.05rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  box-sizing: border-box;
  animation: lightShadow 3s ease infinite;
}
.tab-item {
  padding: 5px 0;
  font-size: 0.12rem;
  background: #fff;
  text-align: center;
  cursor: pointer;
  &.router-link-active {
    color: rgb(241, 206, 5);
    .icon {
      font-size: 20px;
    }
    .title {
      display: none;
    }
    &:after {
      content: "";
      width: 8px;
      height: 8px;
      background: rgb(241, 206, 5);
      display: block;
      margin: 0 auto;
      border-radius: 50%;
      animation: lightOpacity 3s ease infinite;
    }
  }
  .icon {
    width: 100%;
    font-size: 0.16rem;
    margin: 0 auto;
    margin: 4px 0;
    transition: all 0.3s;
  }
}
</style>