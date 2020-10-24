
<template>
  <div class="search_box">
    <div class="close_icon"><i class="iconfont icon-cha1" @click="Return"></i></div>

    <div class="float_top_search">
      <i class="iconfont icon-fangdajing"></i>
      <input class="search" type="text" placeholder="位置/地名/房源" />
      <span class="empty">清空</span>
    </div>


  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {};
  },
  name: "Search",
  methods: {
    Return(){
        this.$router.go(-1)
    }
  },
};
</script>


<style lang="css" scoped>

.close_icon {
  margin: 0.3rem;
}
.close_icon i {
  font-size: 0.48rem;
  color: #ccc;
}


.float_top_search {
  margin: 0.2rem 0.4rem 0 0.4rem;
  box-sizing: border-box;
  position: relative;
}
.float_top_search i{
  position: absolute;
  font-size: 0.4rem;
      top: 14px;
    left: 10px;
    color: white;
}
.search {
  box-sizing: border-box;
  width: 100%;
  outline: none;
  line-height: 0.7rem;
  background: #ff5f7a;
  border-radius: 0.7rem;
  border: none;
  padding: 0.12rem 0.9rem 0.16rem 0.74rem;
  color: #fff;
  font-size: 0.4rem;
}

input::-webkit-input-placeholder {
  color: #fff;
     font-size: 0.4rem;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #fff;
  font-size: 0.4rem;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #fff;
  font-size: 0.4rem;
}
.empty{
    position: absolute;
    top: 0.36rem;
    right: 0.3rem;
    font-size: 0.26rem;
    color: white;
    display: none;
}
</style>
