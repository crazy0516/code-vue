<template>
  <div id="photo" class="common">
    <Navbar title="城市列表" />
    <!-- {{citys}} -->
    <ul class="citys">
        <li v-for="(city, index) in citys" :key="index">
            <span v-for='cit in city' :key='cit.id'>{{cit.name}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PhotoList",
  data() {
    return {
        citys:{}
    };
  },
  created() {
    this.$axios
      .get("/v1/cities?type=group")
      .then(res => {
        console.log(res);
        this.citys = res.data;
      })
      .catch(err => {
        console.log("数据异常", err);
      });
  }
};
</script>

<style scoped>
.citys{
    background: #eee;
    width: 100%;
}
.citys li{
    background: #fff;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
}
.citys li span{
    font-size: 16px;
    width: 25%;
    height: 45px;
    text-align: center;
    line-height: 45px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
