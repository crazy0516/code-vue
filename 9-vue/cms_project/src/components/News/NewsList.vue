<template>
  <div id="news" class="common">
    <Navbar title="新闻列表" />

    <div class="newlist">
      <!-- {{NewsList}} -->
      <ul>
        <li v-for='(list, index) in NewsList' :key='index++'>
          <router-link :to="{name:'detail', query:{id:index++}}">
            <img :src="'https://elm.cangdu.org/img/' + list.image_path" alt="">
            <div class="times">
              <p>评论数：{{list.tips}}</p>
              <!-- 利用自定义全局过滤器格式化时间 -->
              <span>发表时间：{{list.server_utc | serverTime('YYYY-MM-DD')}}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsList",
  data() {
    return {
      NewsList: []
    };
  },
  created() {
    // 获取食品列表
    this.$axios
      .get("/shopping/v2/foods?offset=0&limit=10&restaurant_id=3")
      .then(res => {
        this.NewsList = res.data;
        // console.log(res.data);
      })
      .catch(err => {
        console.log("数据异常", err);
      });
  }
};
</script>

<style scoped>
.newlist{
  width: 100%;
  height: 100%;
}
.newlist ul{
  padding: 0 10px;
}
.newlist ul li{
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}
.newlist ul li:last-child{
  border-bottom: none;
}
.newlist ul li a{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.newlist ul li img{
  width: 80px;
  height: 80px;
}
.times{
  text-align: right;
}
.times p{
  font-size: 16px;
  color: rgb(14, 139, 255);
  padding-bottom: 10px;
}
.times span{
  font-size: 14px;
  color: #333;
}
</style>