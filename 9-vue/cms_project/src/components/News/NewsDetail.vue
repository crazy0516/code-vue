<template>
  <div id="detail" class="common">
      <Navbar title="新闻详情" />

      <div class="item">
          <p>{{detail.address}}</p>
          <img :src="'https://elm.cangdu.org/img/' + detail.image_path" alt="">

          <!-- 注: 如果后端返回的数据带有标签, 直接用v-html渲染就行 -->
          <!-- <p v-html='detail.content'></p> -->
      </div>
  </div>
</template>

<script>
export default {
  name: "NewsDetail",
  data() {
    return {
        detail:{}
    };
  },
  created() {
    // 获取路由id
    let id = this.$route.query.id;
    // console.log(id)
    // 获取食品种类详情
    this.$axios
      .get(`/shopping/restaurant/${id}`)
      .then(res => {
        //   console.log(res);
        this.detail = res.data;
      })
      .catch(err => {
        console.log("数据异常", err);
      });
  }
};
</script>

<style scoped>
.item{
    padding: 10px;
}
.item p {
  color: rgb(14, 139, 255);
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
}
</style>