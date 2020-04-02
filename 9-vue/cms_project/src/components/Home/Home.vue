<template>
  <div id="home" class="common">
    <!-- 轮播图 -->
    <mt-swipe :auto="3000" class="swiper">
      <mt-swipe-item v-for='(item, index) in ImgsList' :key='index'>
        <img :src="'https://elm.cangdu.org/img/' + item.image_path" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 -->
    <div class="list">
      <ul>
        <li v-for='grid in grids' :key='grid.id'>
          <router-link :to="grid.router">
            <img :src="grid.src" alt="">
          </router-link>
          <p>{{grid.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import src from '../../assets/logo.png'

var grids = [
  {id:1, src:src, title:'内容1', router:{name:'news.list'}},
  {id:2, src:src, title:'内容2', router:{name:'photo.list', params:{categoryId:0}}},
  {id:3, src:src, title:'内容3', router:{name:'news.list'}},
  {id:4, src:src, title:'内容4', router:{name:'news.list'}},
  {id:5, src:src, title:'内容5', router:{name:'news.list'}},
  {id:6, src:src, title:'内容6', router:{name:'news.list'}}
]

export default {
  name: "Home",
  data() {
    return {
      ImgsList: [],
      grids: grids

    };
  },
  created() {
    this.$axios
      .get("/shopping/v2/foods?limit=3&offset=1&restaurant_id=3")
      .then(res => {
        // console.log(this.ImgsList);
        this.ImgsList = res.data;
      })
      .catch(err => {
        console.log("数据异常", err);
      });

    // this.$.ajax({
    //   url: "//open.jiehun.com.cn/inv/app/theme/list-theme-info",
    //   data: JSON.stringify(data),
    //   type: "post",
    //   contentType: "application/json;charset=utf-8",
    //   dataType: "json",
    //   success(data){
    //     console.log(data);
    //   },
    //   error(err){
    //     console.log(err);
    //   }
    // });
  }
};
</script>

<style lang="css" scoped>
.swiper{
  width: 100%;
  height: 200px;
}
.swiper img{
  height: 100%;
}

.list{
  width: 100%;
}
.list ul{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.list ul li{
  width: 33.3%;
  height: 80px;
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
}
.list ul li a{
  width: 50px;
  height: 50px;
  margin: 0 auto;
}
.list ul li img{
  height: 100%;
}
</style>