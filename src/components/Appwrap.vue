<template>
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
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {
        
    };
  },
  name: "Appwrap",

};
</script>


<style lang="css" scoped>
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
