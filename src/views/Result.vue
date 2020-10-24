<template>
  <div class="result">
    <!-- 头部定位 -->
    <div class="result_top">
      <div class="header">
        <i class="iconfont icon-arrow-left result_return" @click="Return"></i>
        <span class="header_title">北京</span>
        <i class="iconfont icon-caidan result_menu"  @click="show"></i>
      </div>
      <div class="result_top_search">
        <div class="result_top_search_box">
          <i class="iconfont icon-fangdajing"></i>
          <input type="text" class="search" placeholder="位置/地名/房源" />
        </div>

        <div class="result_top_calendar_box">
          <span class="result_top_calendar_box_text">10.28 - 10.29</span>
          <i class="iconfont icon-sanjiao"></i>
        </div>
      </div>

      <div class="result_top_select">
        <ul class="result_top_select_list">
          <li class="result_top_select_item">
            <span>位置区域</span>
            <i class="iconfont icon-sanjiao"></i>
          </li>
          <li class="result_top_select_item">
            <span>更多筛选</span>
            <i class="iconfont icon-sanjiao"></i>
          </li>
          <li class="result_top_select_item">
            <span>推荐排序</span>
            <i class="iconfont icon-sanjiao"></i>
          </li>
        </ul>
      </div>
    </div>

    <!-- 遮罩层 -->
    <Menu></Menu>

    <!-- 中间房型数据 -->
    <div class="result_content">
      <div class="result_content_list">
        <div class="result_content_item" v-for="(arr,index) in arrs" :key="index">
          <router-link :to="'/detail?id='+arr.id">
            <div class="result_content_item_top">
              <img
                v-bind:src="arr.img"
                alt=""
              />
              <span class="iconfont icon-xinaixin collect"></span>
            </div>
            <div class="result_content_item_bottom">
              <div class="box">
                <h1 class="box_title">{{arr.name}}</h1>
                <p class="box_desc">{{arr.desc1}}</p>
                <div class="box_label">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAATlBMVEUAAACLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0fwUY2xAAAAGnRSTlMA/inpWgUB3GBGMbeleHFXHQ8L8r6wm5pJPEeDJT8AAACLSURBVBjTfdBZDsMgDARQD1sI2dP9/hctzihyy0fmA8TDkg1yJuWcpM0CvH/PfdAF+NQt9LTYQdU5NXSR6vyhh3m9Mm2M+m9botLSpjbjwVrW3THXdcBNp56ASUcBhrqVcWEPdgtjEbFZbDIzdmvN1MyUb1fbX89d9Xz7qnUZ/JaVxhSv9W1ilMt8AcP6Ay4ZEsVfAAAAAElFTkSuQmCC"
                    alt=""
                  />
                  <span>速订</span>
                </div>
              </div>
              <div class="price_box">
                <span class="price_box_num">¥{{arr.newprice}}</span>
                <span class="price_box_txt">起/晚</span>
                <i> · </i>
                <span class="discounts">{{arr.discounts}}</span>
                <i> · </i>
                <span class="price_box_oldprice">{{arr.oldprice}}</span>
              </div>
              <img
                class="landlord_photo"
                v-bind:src="arr.photo"
                alt=""
              />
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- 底部定位 -->
    <Warp></Warp>
  </div>
</template>

<script>
import Warp from '../components/Appwrap'
import Menu from '../components/Menu'

export default {
    components:{
        Warp,
        Menu,
    },
    data() {
        return {
          num:2,
          arrs:[
            {
              desc1: "",
              discounts: "",
              id: "",
              img: "",
              name: "",
              newprice: "",
              oldprice: "",
              photo: ""
            }
          ]
        };
    },
    name: "Result",
    methods:{
      show(){
      this.num=1
      },
      hide(){
      this.num=2
      },
      Return(){
      this.$router.go(-1)
      }
    },
    mounted(){
      this.axios.get('http://localhost:3000/result').then(res=>{
      console.log(res.data.data);
      this.arrs=[]
      this.arrs=this.arrs.concat(res.data.data)

        console.log(this.arrs);
      }).catch(err=>{
        console.log(err);
      })
    }
};
</script>


<style lang="css" scoped>
.result{
    position: relative;
}
.result_top {
  width: 100%;
}
.header {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.3rem;
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
}
.result_return {
  font-size: 0.36rem;
  color: #cccccc;
}
.header_title {
  font-size: 0.32rem;
  font-weight: 700;
  color: #333;
}
.result_menu {
  font-size: 0.52rem;
}

.result_top_search {
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
}

.result_top_search_box {
  box-sizing: border-box;
  padding-left: 0.2rem;
  line-height: 0.7rem;
  background: #f5f5f5;
  border-radius: 0.4rem 0 0 0.4rem;
  width: 69%;
}
.result_top_search_box i {
  font-size: 0.32rem;
  color: #bdbdbd;
  vertical-align: middle;
}
.search {
  outline: none;
  border-color: transparent;
  height: 0.64rem;
  vertical-align: middle;
  box-sizing: border-box;
  background: #f5f5f5;
}
.search::-webkit-input-placeholder {
  color: #bdbdbd;
  font-size: 0.24rem;
}
.search::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #bdbdbd;
  font-size: 0.24rem;
}
.search:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #bdbdbd;
  font-size: 0.24rem;
}

.result_top_calendar_box {
  text-align: center;
  box-sizing: border-box;
  line-height: 0.7rem;
  background: #f5f5f5;
  border-radius:0 0.4rem 0.4rem 0;
  width: 30%;
}
.result_top_calendar_box_text {
  font-size: 0.24rem;
}
.result_top_calendar_box i {
  display: inline-block;
  font-size: 0.24rem;
  color: #e0e0e0;
  transform: scale(0.5);
}

.result_top_select {
  padding: 0.2rem 0.3rem 0.4rem 0.3rem;
}
.result_top_select_list {
  display: flex;
  justify-content: center;
  padding-left: 0.4rem;
}
.result_top_select_item {
  margin-right: 0.3rem;
  line-height: 0.34rem;
  text-align: center;
}
.result_top_select_item span {
  font-size: 0.28rem;
  border-bottom: 0.266vw solid #e0e0e0;
  margin-right: 0.04rem;
}
.result_top_select_item i {
  display: inline-block;
  transform: scale(0.5);
  font-size: 0.24rem;
  color: #e0e0e0;
}

/* content内容部分 */

.result_content {
  width: 100%;
  padding-bottom: 1.2rem;
}
.result_content_item_top {
  width: 100%;
  position: relative;
}
.result_content_item_top img {
  width: 100%;
  height: 5rem;
}
.collect {
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  color: white;
  font-size: 0.52rem;
}

.result_content_item_bottom {
  position: relative;
  padding: 0.3rem;
}

.box_title {
  max-width: 80%;
  line-height: 0.6rem;
  color: #323232;
  font-size: 0.44rem;
}
.box_desc {
  font-size: 0.26rem;
  color: #757575;
  margin-top: 0.1rem;
  line-height: 0.3rem;
}
.box_label {
  line-height: 0.32rem;
  font-size: 0.24rem;
  color: #720124;
  margin-top: 0.16rem;
}
.box_label img {
  width: 0.24rem;
  height: 0.24rem;
  vertical-align: middle;
}
.box_label span {
  vertical-align: middle;
  margin: 0 0.1rem;
}
.price_box {
  padding-top: 0.1rem;
  box-sizing: border-box;
  line-height: 0.5rem;
  color: #757575;

}
.price_box_num {
  font-size: 0.4rem;
  color: #ff4081;
  margin-right: 0.04rem;
}
.price_box_txt {
  font-size: 0.2rem;
  color: #757575;
}
.discounts{
  font-size: 0.2rem;
  color: #ff0481;
}
.price_box_oldprice{
  font-size: 0.2rem;
  color: #757575;
    vertical-align: baseline;
}
.landlord_photo {
  position: absolute;
  right: 0.4rem;
  top: -0.6rem;
  width: 1.08rem;
  height: 1.08rem;
  border-radius: 50%;
}
</style>
