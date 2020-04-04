<template>
  <div id="photo" class="common">
    <Navbar title="城市列表" />
    <!-- {{thiscity}} -->
    <section>
      <div class="thiscity">
        <div class="city_tip">
          <span>当前定位城市：</span>
          <span>定位不准时，请在城市列表中选择</span>
        </div>
        <div class="guess_city">
          <span>{{thisCity.name}}</span>
          <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon arrow_right">
            <path
              d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
              class="selected"
            />
          </svg>
        </div>
      </div>
    </section>
    <!-- {{hotcitys}} -->
    <section>
      <div class="hotcitys">
        <h4 class="city_title">热门城市</h4>
        <ul class="citylistul clearfix">
          <li class="ellipsis" v-for="city in hotCitys" :key="city.id">{{city.name}}</li>
        </ul>
      </div>
    </section>
    <!-- {{allcitys}} -->
    <section>
      <ul class="allcitys">
        <li v-for="(citys, key, index) in sortgroupcity" :key="key">
          <h4 class="city_title">
            {{key}}
            <span v-if="index == 0">（按字母排序）</span>
          </h4>
          <ul class="groupcity_name_container citylistul clearfix">
            <li class="ellipsis" v-for="city in citys" :key="city.id">{{city.name}}</li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "PhotoList",
  data() {
    return {
      thisCity: {},
      hotCitys: [],
      allCitys: {}
    };
  },
  created() {
    // 获取当前城市
    this.$axios
      .get("/v1/cities?type=guess")
      .then(res => {
        // console.log(res);
        this.thisCity = res.data;
      })
      .catch(err => {
        console.log("数据异常", err);
      });

    // 获取热门城市
    this.$axios
      .get("/v1/cities?type=hot")
      .then(res => {
        // console.log(res);
        this.hotCitys = res.data;
      })
      .catch(err => {
        console.log("数据异常", err);
      });

    // 获取所有城市
    this.$axios
      .get("/v1/cities?type=group")
      .then(res => {
        // console.log(res);
        this.allCitys = res.data;
      })
      .catch(err => {
        console.log("数据异常", err);
      });
  },
  computed: {
    //将获取的数据按照A-Z字母开头排序
    sortgroupcity() {
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {
        if (this.allCitys[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.allCitys[
            String.fromCharCode(i)
          ];
        }
      }
      return sortobj;
    }
  }
};
</script>

<style scoped>
.city_tip span {
  font-size: 0.55rem;
  color: #666;
}
.city_tip span:nth-of-type(2) {
  font-weight: bold;
  color: #9f9f9f;
  font-size: 0.4rem;
}
.city_tip,
.guess_city {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.8rem;
  padding: 0 0.45rem;
  border-top: 1px solid #e4e4e4;
  border-bottom: 2px solid #e4e4e4;
  font: 0.75rem/1.8rem "Microsoft YaHei";
}
.guess_city span:nth-of-type(1) {
  color: #3190e8;
}
.guess_city .arrow_right {
  width: 0.6rem;
  height: 0.6rem;
  fill: #999;
}
.allcitys {
  width: 100%;
  background: #eee;
}
.allcitys > li {
  margin-bottom: 0.4rem;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
}
.city_title {
  color: #666;
  font-weight: 400;
  text-indent: 0.45rem;
  border-top: 2px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  font: 0.55rem/1.45rem "Helvetica Neue";
}
.city_title span {
  font-size: 0.475rem;
  color: #999;
}
.allcitys > li .groupcity_name_container li {
  color: #666;
}
.citylistul li {
  float: left;
  text-align: center;
  color: #3190e8;
  border-bottom: 0.025rem solid #e4e4e4;
  border-right: 0.025rem solid #e4e4e4;
  width: 25%;
  height: 1.75rem;
  font: 0.6rem/1.75rem "Microsoft YaHei";
}
.citylistul li:nth-of-type(4n) {
  border-right: none;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
