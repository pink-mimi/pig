<template>
  <div class="index">
    <!-- 顶部 -->
    <div class="index_header">
      <i class="iconfont icon-caidan index_menu" @click="show"></i>
    </div>


    <!-- 遮罩层 -->
    <div class="index_shade">
      <div class="index_masking" v-show="num==1"></div>
      <div class="index_side" :class="{active:num==1}" >
        <i class="iconfont icon-cha index_side_cha" @click="hide" v-show="num==1"></i>
          <ul class="index_side_list">
            <router-link to="/login" style="color:#212121">
              <li class="index_side_list_item">
                <i class="iconfont icon-yonghudenglu"></i>
                <p>登录</p>
              </li>
            </router-link>
            <router-link to="/signin" style="color:#212121">
              <li class="index_side_list_item">
                <i class="iconfont icon-xueshengzhuce"></i>
                <p>注册</p>
              </li>
            </router-link>
          </ul>
        <i class="index_side_img" v-show="num==1"></i>
      </div>
    </div>

    <!-- logo部分 -->
    <div class="index_logo">
      <img
        src="data:image/png;base64,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"
        alt=""
      />
    </div>

    <!-- 搜索部分 -->
    <div class="index_paddingBox">
      <div class="index_search_box">
        <div class="index_landBox">
          <router-link to="/city">
            <div class="index_landBox1 index_location">
                <span class="iconfont icon--_fangzi index_location_tubiao"></span>
                <span class="index_location_text1">&nbsp;&nbsp;北京</span>
              <span class="iconfont icon-dingwei1 index_location_text2">我的位置</span>
            </div>
          </router-link>

          <router-link to="/calendar">
            <div class="index_landBox1 index_time">
              <span class="iconfont icon-rili index_time_tubiao"></span>
              <span class="index_time_qian">
                <i>{{times[0]}}</i>
                <em>{{weeks[0]}}</em>
              </span>
              <span class="index_time_hou">
                <i> - {{times[1]}}</i>
                <em>{{weeks[1]}}</em>
              </span>
              <span class="index_time_sum">共1晚</span>
            </div>
          </router-link>
        </div>
        <router-link to="/search">
          <div class="index_landDetail">
            <span class="iconfont icon-dingwei index_landDetail_tubiao"></span>
            <span class="index_landDetail_text">位置/地名/房源</span>
          </div>
        </router-link>

        <div class="index_searchBtn">查找房源</div>
      </div>
    </div>

    <!-- 四宫格 -->
    <div class="index_searchLable">
      <ul class="index_searchLable_list">
        <li class="index_searchLable_item">
          <img
            src="https://image.xiaozhustatic1.com/00,80,80/s,3,aaOP,80,80,1,1d69571c.png"
            alt=""
          />
          <p>免聊速订</p>
        </li>
        <li class="index_searchLable_item">
          <img
            src="https://image.xiaozhustatic1.com/00,80,80/s,3,aaPH,80,80,1,ca9292c7.png"
            alt=""
          />
          <p>一室一厅</p>
        </li>
        <li class="index_searchLable_item">
          <img
            src="https://image.xiaozhustatic3.com/00,80,80/s,3,aaQt,80,80,1,dd15ef0b.png"
            alt=""
          />
          <p>近地铁</p>
        </li>
        <li class="index_searchLable_item">
          <img
            src="https://image.xiaozhustatic1.com/00,80,80/s,3,aaRf,80,80,1,2456a7ef.png"
            alt=""
          />
          <p>好评推荐</p>
        </li>
      </ul>
    </div>

    <!-- 大家都在看 -->
    <div class="index_playBox">
      <div class="index_playBox_title">大家都在看</div>
      <div class="index_playBox_img">
        <img
          src="https://image.xiaozhustatic3.com/00,690,320/s,3,aaTs,690,320,1,9f81b3f9.png"
          alt=""
        />
      </div>
    </div>

    <!-- 热门民宿 -->
    <div class="hotBox">
      <div class="index_playBox_title">北京热门民宿</div>
      <div class="index_hotBox_box">
        <ul class="index_hotBox_list">
          <li class="index_hotBox_item" v-for="(arr,index) in arrs" :key="index">
            <router-link :to="'/detail?id='+arr.id">
              <div class="index_hotBox_item_img">
                <img
                  v-bind:src="arr.img"
                  alt=""
                />
                <div class="index_hotBox_item_tags">
                  <span class="index_hotBox_item_tags1">今晚特价</span>
                  <span class="index_hotBox_item_tags2">长租优惠</span>
                </div>
              </div>

              <div class="index_hotBox_item_detail">
                <div class="index_hotBox_item_detail_desc">
                  <p class="index_hotBox_item_detail_desc1">
                    {{arr.name}}
                  </p>
                  <p class="index_hotBox_item_detail_desc2">{{arr.desc}}</p>
                </div>
                <div class="index_hotBox_item_detail_price">
                  <span class="index_hotBox_item_detail_price1">¥{{arr.price}}</span>
                  <span class="index_hotBox_item_detail_price2">起/晚</span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- 更多房源 -->
    <div class="index_moreBox">
      <router-link to="result">
        <div class="index_moreBox_text">更多北京优质房源</div>
      </router-link>
    </div>

    <!-- 底部盒子 -->
    <div class="index_bottom_record">
      <span>关于小猪</span>
      <span>客服电话：400-010-7890</span>
      <span>营业执照号103613118</span>
      <span>许可证号：京ICP证140510号</span>
      <span>京ICP证12035936号-1</span>
      <span>京公安网安备11010802020380号</span>
    </div>


        <!-- 底部定位 -->
    <div class="app_wrap">
      <div class="ledToAppHeader">
        <div class="ledToAppHeader_left">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <div class="xiaozhu_desc">
            <p class="xiaozhu_desc1">下载小猪APP，随时随地预订民宿</p>
            <p class="xiaozhu_desc2">酒店之外，就住小猪</p>
          </div>
        </div>

        <div class="ledToAppHeader_right">
          <span>下载APP</span><i class="iconfont icon-jiantou"></i>
        </div>
      </div>
      <div></div>
    </div>

  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'



export default {
  data() {
    return {
      arrs:[],
      num:2,
      times:[],/////选取月份和日
      weeks:[]
    };
  },
  name: "Index",
  methods:{
    show(){
      this.num=1
    },
    hide(){
      this.num=2
    },
  },
  mounted(){
    this.axios.get('http://localhost:3000/index').then(res=>{
      console.log(res.data.data);
      this.arrs=this.arrs.concat(res.data.data)

      // console.log(this.arrs);
    }).catch(err=>{
      console.log(err);
    })

    setTimeout(()=>{

    
      if(this.$route.query.data==undefined){
        this.times=[]
        this.weeks=[]
        var date = new Date();
        // console.log(date .getMonth()+1);
        // console.log(date .getDate());
        var yue=date .getMonth()+1+'.'+date .getDate();// eslint-disable-line no-unused-vars
        var ri=date .getMonth()+1+'.'+(date .getDate()+1);// eslint-disable-line no-unused-vars
        var yi=date.getDay()        // eslint-disable-line no-unused-vars
        this.weeks.push(yi==0?"星期日":yi==1?"星期一":yi==2?"星期二":yi==3?"星期三":yi==4?"星期四":yi==5?"星期五":"星期六")
        this.weeks.push((yi+1)==0?"星期日":(yi+1)==1?"星期一":(yi+1)==2?"星期二":(yi+1)==3?"星期三":(yi+1)==4?"星期四":(yi+1)==5?"星期五":"星期六")
        console.log(this.weeks,5555555);
        // console.log(yue,ri);
        this.times.push(yue)
        this.times.push(ri)
        console.log(this.times);
      }else{
        this.times=this.$route.query.data
        console.log(this.$route.query.day);
         this.weeks=[]
         this.weeks.push(this.$route.query.day[0]==0?"星期日":this.$route.query.day[0]==1?"星期一":this.$route.query.day[0]==2?"星期二":this.$route.query.day[0]==3?"星期三":this.$route.query.day[0]==4?"星期四":this.$route.query.day[0]==5?"星期五":"星期六")
        this.weeks.push((this.$route.query.day[1])==0?"星期日":(this.$route.query.day[1])==1?"星期一":(this.$route.query.day[1])==2?"星期二":(this.$route.query.day[1])==3?"星期三":(this.$route.query.day[1])==4?"星期四":(this.$route.query.day[1])==5?"星期五":"星期六")
      }

    },200)
  },

};



</script>


<style lang="css" scoped>
.index{
  position: relative;
}
.index_header {
  height: 1rem;
  padding: 0 0.3rem;
  background: white;
  line-height: 1rem;
}
.index_menu {
  font-size: 0.48rem;
  float: right;
}
.index_logo {
  height: 0.8rem;
  text-align: center;
  margin-bottom: 0.2rem;
  background: white;
}
.index_logo img {
  height: 0.8rem;
  line-height: 0.8rem;
}

.index_landBox {
  padding: 0.3rem 0;
  border-bottom: 0.026667rem solid #eee;
}
.index_landBox a{
  color: #212121;
}

.index_location {
  height: 0.44rem;
  line-height: 0.44rem;
  padding-bottom: 0.3rem;
  border-bottom: 0.026667rem solid #eee;
}

.index_paddingBox {
  padding: 0 0.3rem;
  margin-bottom: 0.5rem;
  background: white;
}
.index_search_box {
  padding: 0.4rem;
  box-shadow: 0 0.053333rem 0.266667rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 0 0 0.426667rem 0.426667rem;
}
.index_location_tubiao {
  float: left;
  color: #bdbdbd;
  font-size: 0.32rem;
}
.index_location_text1 {
  float: left;
  font-size: 0.32rem;
  font-weight: 700;
  text-align: right;
  margin-left: 0.2rem;
}
.index_location_text2 {
  float: right;
  font-size: 0.24rem;
  font-weight: 700;
}
.index_time {
  height: 0.44rem;
  margin-top: 0.3rem;
  line-height: 0.44rem;
}

.index_time_tubiao,
.index_time_qian,
.index_time_hou {
  float: left;
}
.index_time_tubiao {
  color: #bdbdbd;
  font-size: 0.32rem;
}
.index_time_qian {
  margin-left: 0.2rem;
}
.index_time_sum {
  float: right;
}
.index_time_qian i,
.index_time_hou i {
  font-size: 0.32rem;
  font-weight: 700;
}
.index_time_qian em,
.index_time_hou em {
  margin: 0 0.1rem;
}
.index_landDetail {
  height: 0.5rem;
  line-height: 0.5rem;
  margin-top: 0.3rem;
}
.index_landDetail_tubiao {
  color: #cccccc;
  font-size: 0.32rem;
}
.index_landDetail_text {
  font-size: 16px;
  color: #bdbdbd;
  margin-left: 0.2rem;
}

.index_searchBtn {
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.32rem;
  text-align: center;
  margin-top: 0.3rem;
  background: #ff5f7a;
  color: white;
  border-radius: 0.5rem;
}

/* 四宫格部分 */
.index_searchLable {
  padding: 0 0.8rem 0.6rem 0.8rem;
  background: white;
}
.index_searchLable_list {
  display: flex;
  justify-content: space-between;
}
.index_searchLable_item {
  flex: 1;
  text-align: center;
}
.index_searchLable_item img {
  height: 0.8rem;
  width: 0.8rem;
  margin-bottom: 0.1rem;
}

/* 大家都在看 */
.index_playBox {
  padding: 0 0.3rem 0.6rem 0.3rem;
  background: white;
}
.index_playBox_title {
  height: 0.44rem;
  font-size: 0.36rem;
  line-height: 0.44rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}
.index_playBox_img img {
  width: 100%;
  border-radius: 0.2rem;
}

/* 热门民宿 */

.hotBox {
  padding: 0 0.3rem 0.2rem 0.3rem;
  background: white;
}

.index_hotBox_list {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  flex-wrap: wrap;
}
.index_hotBox_item {
  width: 48%;
  box-sizing: border-box;
  background: white;
  box-shadow: 0 0.053333rem 0.266667rem 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 0.2rem;
}
.index_hotBox_item_img {
  position: relative;
  height: 2.92rem;
  width: 100%;
}
.index_hotBox_item_img img {
  width: 100%;
  height: 100%;
  border-radius: 0.2rem;
}
.index_hotBox_item_tags {
  position: absolute;
  bottom: 0.4rem;
  left: 0;
  width: 100%;
}
.index_hotBox_item_tags1,
.index_hotBox_item_tags2 {
  margin-left: 0.25rem;
  background: rgba(33, 33, 33, 0.5);
  border-radius: 0.2rem;
  color: white;
  padding: 0.04rem 0.14rem;
  opacity: 0.8;
}

.index_hotBox_item_detail {
  padding: 0.16rem 0.12rem;
}
.index_hotBox_item_detail_desc{
  height: 1.2rem;
}
.index_hotBox_item_detail_desc1 {
  font-size: 0.28rem;
  font-weight: 700;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #212121;
}
.index_hotBox_item_detail_desc2 {
  font-size: 0.24rem;
  height: 0.3rem;
  line-height: 0.3rem;
  color: #757575;
  padding: 0.08rem 0;
}
.index_hotBox_item_detail_price {
  height: 0.44rem;
  line-height: 0.44rem;
}
.index_hotBox_item_detail_price1 {
  color: #ff5f7a;
  font-size: 0.36rem;
  font-weight: 700;
  margin-right: 0.1rem;
}
.index_hotBox_item_detail_price2 {
  font-size: 0.24rem;
  color: #bdbdbd;
}

/* 更好房源 */

.index_moreBox {
  padding: 0 0.3rem;
  background: white;
}
.index_moreBox_text {
  box-sizing: border-box;
  height: 1rem;
  width: 100%;
  line-height: 1rem;
  border: 1px solid #e0e0e0;
  text-align: center;
  border-radius: 0.2rem;
  background: white;
  font-weight: 700;
  font-size: 0.28rem;
  color: #212121;
}

.index_bottom_record {
  display: flex;
  flex-wrap: wrap;
  padding: 0.24rem 0.3rem 0.08rem 0.3rem;
  margin-top: 0.4rem;
  margin-bottom: 1.2rem;
  background: white;
}
.index_bottom_record span {
  margin: 0 0.3rem 0.16rem 0;
  font-size: 12px;
  color: #757575;
}



/* 遮罩层 */

.index_masking{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
}

.index_side{
  position: fixed;
  z-index: 120;
  top: 0;
  right: 0;
  height: 100%;
  width: 0rem;
  padding: 0;
  background: white;
  box-sizing: border-box;
  transition: all 0.5s;
}
.active{
   width: 3.3rem;
  /* padding: 0.3rem; */      
  /* 这有点问题 padding: ; */
}

.index_side_cha{
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  font-size: 0.32rem;
  font-weight: 700;
}

.index_side_list{
  padding-top: 0.8rem;
  text-align: center;
}

.index_side_list_item{
  border-bottom: .026667rem solid #ebebeb;
  padding-top: 0.4rem;
  margin-bottom: 0.2rem;
  font-size: 0.34rem;
  width: 2rem;
  text-align: center;
  margin: 0 auto;

}

.index_side_list_item i{
  font-size: 0.48rem;
  color: #cccccc;
 
}
.index_side_list_item p{
  margin-top: 0.2rem;
  margin-bottom: 0.68rem;
}
.index_side_img{
  width: 1.2rem;
  height: 0.6rem;
  position: absolute;
  bottom: 0.9rem;
  left: 50%;
  transform: translateX(-50%);
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAABaCAYAAAD3qreEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG0mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDUtMTZUMTU6MjU6NTYrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA3LTExVDE1OjM1OjQxKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA3LTExVDE1OjM1OjQxKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA2YjRhMDAwLWZlMDktNDAzYi04NGQ4LTczNGY0NjM4NTYxMiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjYyYjMxYzg1LTJiYTQtMWM0Ni1hODkzLThmODJmMWMwYjkzNSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmI1YTc4ZWI0LWI2OGItNGQyYi05N2Y2LWE0ODlmZjQwYTBkZCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjVhNzhlYjQtYjY4Yi00ZDJiLTk3ZjYtYTQ4OWZmNDBhMGRkIiBzdEV2dDp3aGVuPSIyMDE5LTA1LTE2VDE1OjI1OjU2KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Y2M2NGI5ZTAtYmIzNy00NGNhLWJlNzQtNzZiMzYwYzA1MWEzIiBzdEV2dDp3aGVuPSIyMDE5LTA1LTE2VDE2OjA1OjU1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDZiNGEwMDAtZmUwOS00MDNiLTg0ZDgtNzM0ZjQ2Mzg1NjEyIiBzdEV2dDp3aGVuPSIyMDE5LTA3LTExVDE1OjM1OjQxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBl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') no-repeat;
  background-size: cover;
}


/* 底部定位 */

.app_wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  height: 1.2rem;
  width: 100%;
  background: white;
  box-sizing: border-box;
}
.ledToAppHeader {
  box-sizing: border-box;
  padding: 0.24rem 0;
  overflow: hidden;
  border-top: 0.02rem solid #f5f5f5;
  border-bottom: 0.04rem solid #e0e0e0;
}
.ledToAppHeader_left {
  float: left;
}
.ledToAppHeader_left img {
  margin-left: 0.3rem;
  margin-right: 0.12rem;
  vertical-align: middle;
}
.xiaozhu_desc {
  display: inline-block;
  vertical-align: middle;

}
.xiaozhu_desc1 {
  font-size: 0.26rem;
  font-weight: 700;
  margin-bottom: 0.1rem;
}
.xiaozhu_desc2 {
  font-size: 0.24rem;
  color: #757575;
  height: 0.3rem;
  line-height: 0.3rem;
}

.ledToAppHeader_left img {
  width: 0.72rem;
}

.ledToAppHeader_right {
  box-sizing: border-box;
  float: right;
  margin-right: 0.3rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #ff5a7a;
  font-weight: 700;
  border: 0.02rem solid #ff5a7a;
  border-radius: 0.4rem;
  width: 1.84rem;
  font-size: 0.28rem;
}
.ledToAppHeader_right i{
  width: 0.3rem;
  height: 0.3rem;
  background: #ff5a7a;
  color: white;
  border-radius: 100%;
  font-size: 0.24rem;
  font-weight: 400;
  margin-left: 0.1rem;
}
</style>
