<template>
  <div id="app">
    <!-- 顶部栏 -->
    <mt-header fixed title="首页">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click="reload"></mt-button>
    </mt-header>

    <!-- 路由组件的出口 -->
    <router-view />

    <!-- 底部栏 -->
    <div class="tabbar">
      <ul>
        <li v-for="tab in tabs" :key="tab.id">
          <router-link :to="tab.routerName">
            <img :src="tab.imgSrc" alt />
            <p>{{tab.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="../static/img/logo.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="../static/img/logo.png" />
        订单
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img slot="icon" src="../static/img/logo.png" />
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="../static/img/logo.png" />
        搜索
      </mt-tab-item>
    </mt-tabbar>-->
  </div>
</template>

<script>
import src from "./assets/logo.png";

let tabs = [
  { id: 1, title: "首页", imgSrc: src, routerName: { name: "home" } },
  { id: 2, title: "订单", imgSrc: src, routerName: { name: "vip" } },
  { id: 3, title: "购物车", imgSrc: src, routerName: { name: "cart" } },
  { id: 4, title: "搜索", imgSrc: src, routerName: { name: "search" } }
];

export default {
  name: "App",
  data() {
    return {
      selected: "",
      tabs: tabs
    };
  },
  watch: {
    selected(newV, oldV) {
      console.log(newV);

      this.$router.push({ name: this.selected });
    }
  },
  methods: {
    //点击图标刷新页面
    reload() {
      window.location.reload();
    }
  }
};
</script>

<style>
.tabbar .link-active {
  background: rgb(231, 231, 231);
}
.tabbar {
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
}
.tabbar ul {
  width: 100%;
  overflow: hidden;
}
.tabbar ul li {
  float: left;
  width: 25%;
  height: 55px;
  text-align: center;
}
.tabbar ul li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #000;
}
.tabbar ul li p {
  font-size: 12px;
}
.tabbar ul li a img {
  width: 25px;
  height: 25px;
  display: inline-block;
  vertical-align: middle;
}
</style>
