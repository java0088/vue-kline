<template>
  <div id="app" :style="{backgroundColor:bgColor}">
    <!-- 头部 -->
    <nav-bar :title="title" :background-color="bgColor"/>

    <!-- 路由组件 -->
    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- 底部导航 -->
    <tab-bar v-model="active" :list="tabList" :background-color="bgColor"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import TabBar from './components/TabBar.vue'
import {bgColors} from './config/index'
export default {
  name: 'App',
  components: {
    NavBar,
    TabBar
  },
  watch:{
    '$route':function(to) {
      let index = parseInt(to.query.type)
      this.title = `K线图-${to.query.enName}/USDT`
      this.bgColor = bgColors[index]
    }
  },
  mounted() {
    if(this.$route.query.name) {
      this.active = parseInt(this.$route.query.type)
      this.bgColor = bgColors[this.active]
      this.title = `K线图-${this.$route.query.name}/USDT`
    }
  },
  data() {
    return {
      tabList:[
        {id:0,cnName:'比特币',name:'btcusdt',enName:'BTC',icon:'k-icon-btc-o',activeIcon:'k-icon-btc'},
        {id:1,cnName:'以太坊',name:'ethusdt',enName:'ETH',icon:'k-icon-eth-o',activeIcon:'k-icon-eth'},
        {id:2,cnName:'柚子币',name:'eosusdt',enName:'EOS',icon:'k-icon-eos-o',activeIcon:'k-icon-eos'},
      ],
      active:0,
      bgColor:bgColors[0],
      title:'K线图-BTC/USDT'
    }
  }
}
</script>

<style lang="less">
  #app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
</style>
