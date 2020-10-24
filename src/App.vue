<template>
  <div id="app">
    <router-view></router-view>


  </div>
</template>

<script>
(function () {
  function w() {
    var r = document.documentElement;
    var a = r.getBoundingClientRect().width;
    console.log(r, a);
    if (a > 750) {
      a = 750;
    }
    var rem = a / 7.5;
    r.style.fontSize = rem + "px";
  }
  w();
  var t;
  window.addEventListener(
    "resize",
    function () {
      clearTimeout(t);
      t = setTimeout(w, 300);
    },
    false
  );
})();
</script>


<style>

 .van-calendar__header-title{
    font-size: 0.4rem !important;
   text-align: left !important;;

}
.van-calendar__month-title,
.van-calendar__header-subtitle{
  font-weight: 700 !important;
}
.van-calendar{
  padding: 0 0.3rem 0.9rem;
}
.van-calendar__footer{
  width: 100% !important;
  box-sizing: border-box;
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0 !important;
}
.van-calendar__confirm{ 
  display: inline-block;
   line-height: 0.8rem !important;
    width: 100% !important;
    box-sizing: border-box;
    font-size: 0.3rem !important; 
}


/* 城市 */
.van-index-bar__sidebar{
  z-index: 999 !important;
}
.van-index-anchor{
  padding-left: 0.4rem ;
  line-height: 0.4rem !important;
  background: #f3f3f3 !important;
  font-size: 0.24rem !important;
}
.van-cell{
  box-sizing: border-box;
   padding-left: 0.4rem;
  line-height: 0.8rem;
  font-size: 0.28rem;
  font-weight: 700;
  background: white;
  border-bottom: 0.02rem solid #e0e0e0;
}
.van-cell::after{
  border: none !important;
}
</style>