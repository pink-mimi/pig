
<template>
  <div class="city">
    <div class="float_top">
      <div class="close_icon"><i class="iconfont icon-cha1" @click="Return"></i></div>

      <div class="float_top_search">
        <i class="iconfont icon-fangdajing"></i>
        <input class="search" type="text" placeholder="城市/位置/地名" />
        <span class="empty">清空</span>
      </div>

      <div class="float_top_famous">
          <ul class="float_top_famous_list">
              <li class="float_top_famous_item" v-for="(arr,index) in arrs" :key="index" @click="huoqu(arr)">
                {{arr}}
              </li>
          </ul>
      </div>

      <div class="float_top_inout">
        <div class="float_top_inout_home " :class="{active:num==1}" @click="qiehuan(1)">国内(含港澳台)
          <i class="xiantiao" v-if="num==1"></i>
        </div>

        <div class="float_top_inout_overseas" :class="{active:num==2}"  @click="qiehuan(2)">海外城市
          <i class="xiantiao"  v-if="num==2"></i>
        </div>
      </div>
    </div>

    <div class="float_bottom">
      <div class="float_bottom_home" v-if="num==1">
        <div class="float_bottom_hotcity">
        热门城市
        </div>
        <div class="float_bottom_hotcity_tubiao">
          <div class="float_bottom_hotcity_item" v-for="(list,index) in lists" :key="index" @click="huoqu(list.name)">
            <i class="iconfont" :class="list.icon"></i>
            <p class="float_bottom_hotcity_item_desc">{{list.name}}</p>
          </div>
        </div>

        <div class="float_bottom_hotcity_list">
    
          <van-index-bar :index-list="indexList"   :sticky-offset-top=190>
            <van-index-anchor index="A"  >A</van-index-anchor>
              <van-cell v-bind:title="city"  @click="huoqu(city)" v-for="(city,index) in citys[0].name" :key="index" />

            <van-index-anchor index="B">B</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[1].name" :key="index" />

            <van-index-anchor index="C">C</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[2].name" :key="index" />

            <van-index-anchor index="D">D</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[3].name" :key="index" />

            <van-index-anchor index="E">E</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[4].name" :key="index" />

            <van-index-anchor index="F">F</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[5].name" :key="index" />

            <van-index-anchor index="G">G</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[6].name" :key="index" />

            <van-index-anchor index="H">H</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[7].name" :key="index" />

            <van-index-anchor index="J">J</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[8].name" :key="index" />

            <van-index-anchor index="K">K</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[9].name" :key="index" />

            <van-index-anchor index="L">L</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[10].name" :key="index" />

            <van-index-anchor index="M">M</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[11].name" :key="index" />

            <van-index-anchor index="N">N</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[12].name" :key="index" />

            <van-index-anchor index="P">P</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[13].name" :key="index" />

            <van-index-anchor index="Q">Q</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[14].name" :key="index" />

            <van-index-anchor index="R">R</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[15].name" :key="index" />

            <van-index-anchor index="S">S</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[16].name" :key="index" />

            <van-index-anchor index="T">T</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[17].name" :key="index" />

            <van-index-anchor index="W">W</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[18].name" :key="index" />

            <van-index-anchor index="X">X</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[19].name" :key="index" />

            <van-index-anchor index="Y">Y</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[20].name" :key="index" />

            <van-index-anchor index="Z">Z</van-index-anchor>
              <van-cell v-bind:title="city" @click="huoqu(city)" v-for="(city,index) in citys[21].name" :key="index" />

          </van-index-bar>
        </div>
      </div>

      <div class="float_bottom_overseas" v-if="num==2">
        <div class="float_bottom_hotcity">
        热门城市
        </div>
        <div class="float_bottom_hotcity_tubiao">
          <div class="float_bottom_hotcity_item">
            <i class="iconfont icon-city_dongjing"></i>
            <p class="float_bottom_hotcity_item_desc">东京</p>
          </div>

          <div class="float_bottom_hotcity_item">
            <i class="iconfont icon-city_daban"></i>
            <p class="float_bottom_hotcity_item_desc">大阪</p>
          </div>

          <div class="float_bottom_hotcity_item">
            <i class="iconfont icon-city_jingdu"></i>
            <p class="float_bottom_hotcity_item_desc">京都</p>
          </div>

          <div class="float_bottom_hotcity_item">
            <i class="iconfont icon-city_mangu"></i>
            <p class="float_bottom_hotcity_item_desc">曼谷</p>
          </div>

          <div class="float_bottom_hotcity_item">
            <i class="iconfont icon-city_pujidao"></i>
            <p class="float_bottom_hotcity_item_desc">普吉岛</p>
          </div>

          <div class="float_bottom_hotcity_item">
            <i class="iconfont icon-city_qingmai"></i>
            <p class="float_bottom_hotcity_item_desc">清迈</p>
          </div>

          <div class="float_bottom_hotcity_item">
            <i class="iconfont icon-city_batiya"></i>
            <p class="float_bottom_hotcity_item_desc">芭提雅</p>
          </div>

          <div class="float_bottom_hotcity_item">
            <i class="iconfont icon-city_sumeidao"></i>
            <p class="float_bottom_hotcity_item_desc">苏梅岛</p>
          </div>

        </div>

        <div class="float_bottom_hotcity_list">
          <div class="float_bottom_hotcity_initial">
            <div class="float_bottom_hotcity_name">爱丁堡</div>
            <div class="float_bottom_hotcity_name">艾克斯</div>
            <div class="float_bottom_hotcity_name">埃里温</div>
            <div class="float_bottom_hotcity_name">阿利坎特</div>
            <div class="float_bottom_hotcity_name">阿姆斯特丹</div>
          </div>
        </div>
      </div>
    
    </div>


  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {
      citys:[
        {
          letter:'A',
          name:['鞍山','安阳','安庆','安康','澳门','阿克苏','阿拉尔','阿里','阿坝','阿拉善盟','安顺','阿勒泰']
        },
        

         {
          letter:'B',
          name:['北京','保定','包头','滨州','宝鸡','蚌埠','本溪','白城','亳州','保山','巴音郭楞','博尔塔拉','巴中','巴彦淖尔市','白山','白银','百色','北海','毕节','白沙','保亭']
        },
         {
          letter:'C',
          name:['成都','长沙','重庆','长春','常州','沧州','常德','郴州','赤峰','承德','长治','楚雄','昌吉','长葛','昌都','朝阳','巢湖','池州','滁州','潮州','崇左','澄迈']
        },
         {
          letter:'D',
          name:['东莞','大连','德州','东营','大庆','丹东','大同','大理','定州','德阳','迪庆','德宏','达州','定西','大兴','安岭','大丰','定安']
        },
         {
          letter:'E',
          name:['鄂尔','多斯恩施','鄂州']
        },
         {
          letter:'F',
          name:['福州','佛山','抚顺','阜阳','阜新','抚州','防城港']
        },
         {
          letter:'G',
          name:['广州','贵阳','桂林','贵港','固原','赣州','馆陶','广安','广元','甘孜','果洛','甘南']
        },
         {
          letter:'H',
          name:['杭州','哈尔滨','海口','合肥','呼和浩特','惠州','衡阳','邯郸','湖州','衡水','汉中','淮安','黄石','海拉尔','菏泽','怀化','黄冈','河池','哈密','红河','鹤岗','鹤壁','淮南','淮北','黄山','和田','黄南','海西','海南','海东','海北','呼伦贝尔','葫芦岛','河源','贺州','黑河','和县','霍邱']
        },
        
  
         {
          letter:'J',
          name:['济南','济宁','嘉兴','江门','金华','吉林','揭阳','九江','焦作','晋城','荆州','佳木斯','鸡西','吉安','金昌','晋中','锦州','景德','镇荆门','嘉峪关','酒泉','济源']
        },
         {
          letter:'K',
          name:['昆明','克拉玛依','巴音郭楞','开封','喀什','克孜勒苏','垦利','昆明','克拉玛依']
        },
         {
          letter:'L',
          name:['兰州','洛阳','廊坊','临沂','聊城','连云港','吕梁','乐山','辽阳','辽源','拉萨','临汾','龙岩','临夏','柳州','漯河','泸州','丽水','丽江','六安','莱芜','临猗','临沧','林芝','凉山','娄底','陇南','来宾','六盘水','陵水']
        },
         {
          letter:'M',
          name:['绵阳','茂名','马鞍山','牡丹','江明','港梅州','眉山']
        },
         {
          letter:'N',
          name:['南京','南昌','宁波','南宁','南阳','南通','内江','宁德','南充','怒江','那曲']
        },
         {
          letter:'P',
          name:['平顶山','盘锦','萍乡','平凉','濮阳','攀枝花','莆田','普洱']
        },
         {
          letter:'Q',
          name:['青岛','泉州','秦皇岛','齐齐哈尔','衢州','清远','钦州','曲靖','黔东南','庆阳','黔南','黔西','南七台河','潜江','清徐','琼海','琼中']
        },
         {
          letter:'R',
          name:['日照','日喀则','瑞安']
        },
         {
          letter:'S',
          name:['上海','深圳','苏州','沈阳','石家庄','汕头','宿州','绍兴','十堰','三明','韶关','商丘','沭阳','宿迁','绥化','邵阳','三亚','顺德','松原','三门峡','汕尾','随州','石河子','山南','遂宁','商洛','朔州','石嘴山','上饶','四平','双鸭山','神农架','三沙']
        },
         {
          letter:'T',
          name:['天津','太原','唐山','泰安','台州','泰州','台湾','铁岭','天水','吐鲁番','图木舒克','铜川','通辽','通化','铜陵','铜仁','天门','台山','桐城','塔城','儋州','屯昌']
        },
         {
          letter:'W',
          name:['武汉','无锡','潍坊','乌鲁木齐','温州','威海','芜湖','梧州','瓦房店','渭南','文山','乌海','五家渠','吴忠','乌兰察布','武威','五指山','武夷山','万宁','文昌']
        },
         {
          letter:'X',
          name:['西安','厦门','徐州','湘潭','襄阳','新乡','邢台','孝感','西宁','许昌','香港','忻州','宣城','西双版纳','锡林郭勒盟','咸阳','信阳','兴安','盟新','余湘','西仙桃','咸宁','锡林郭勒']
        },
         {
          letter:'Y',
          name:['烟台','延安','扬州','宜昌','盐城','岳阳','银川','延边','鹰潭','玉溪','运城','宜春','营口','榆林','宜宾','永州','阳江','阳春','阳泉','禹州','鄢陵','玉林','伊犁','雅安','玉树','益阳','云浮','伊春','永新','义乌','乐清']
        },
         {
          letter:'Z',
          name:['郑州','珠海','张家口','中山','淄博','株洲','漳州','湛江','肇庆','枣庄','镇江','周口','正定','驻马店','自贡','张家界','资阳','遵义','舟山','章丘','赵县','诸城','昭通','中卫','张掖','张北','庄河']
        }
           
        
      ],
      num:1,
      indexList:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'],
      arrs:["迪士尼乐园",'南锣鼓巷','银座','心斋桥','祇园','宽窄巷子','西湖','塔佩门','广州长隆','四面佛'],
      lists:[
        {
          icon:"icon-wodefujin",
          name:"我的附近"
        },
         {
          icon:"icon-beijingbeikao",
          name:"北京"
        },
         {
          icon:"icon-qiyerendingbeifen",
          name:"上海"
        },
         {
          icon:"icon-city_chengdu",
          name:"成都"
        },
         {
          icon:"icon-guangzhou",
          name:"广州"
        },
         {
          icon:"icon-shenzhen1",
          name:"深圳"
        },
         {
          icon:"icon-xianggang",
          name:"香港"
        },
         {
          icon:"icon-city_sanya",
          name:"三亚"
        },
         {
          icon:"icon-city_zhongqing",
          name:"重庆"
        }
      ]
   
    };
  },
  name: "City",
  methods: {
    Return(){
      this.$router.go(-1)
    },
    qiehuan(e){
      // console.log(e);
      this.num=e
    },
    huoqu(name){
      console.log(name);
      this.$router.push({path: '/', query: {city:name}})
    }
  },
};
</script>


<style lang="css" scoped>
.city {
  position: relative;
}

/* 顶部定位 */
.float_top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  box-sizing: border-box;
  background: white;
}
.close_icon {
  margin: 0.3rem;
}
.close_icon i {
  font-size: 0.48rem;
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

.float_top_famous_list{
    margin: 0.2rem 0.4rem;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    
}
.float_top_famous_list::-webkit-scrollbar {
    display: none;
    background-color: transparent;
}

.float_top_famous_item{
  flex-shrink:0;
    line-height: 0.48rem;
    box-sizing: border-box;
    border: 0.02rem solid #e0e0e0;
    color: #757575;
    padding: 0 0.1rem;
    margin-right: 0.1rem;
    border-radius: 0.1rem;
}

.float_top_inout{
  margin: 0.6rem 0 0.2rem 0;
  display: flex;
  justify-content: center;
}

.float_top_inout_home,.float_top_inout_overseas{
  width: 2rem;
  font-size: 0.28rem;
  font-weight: 700;
  text-align: center;
  position: relative;
  line-height: 0.6rem;
}
.active{
  color: #ff4081;
}

.xiantiao{
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0.4rem;
  height: 0.02rem;
  background: #ff4081;
  transform: translateX(-50%);
}


/* 下面城市 */

.active1{
  display: none;
}

.float_bottom{
  padding-top: 4.2rem;
}
.float_bottom_hotcity{
  margin-top: 0.4rem;
  padding-left: 0.3rem;
  line-height: 0.4rem;
  font-size: 0.24rem;
  color: #bdbdbd;
  background: #f3f3f3;
}
.float_bottom_hotcity_tubiao{
  padding: 0.2rem 0 0.1rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.float_bottom_hotcity_item{
  width: 1.2rem;
  margin: 0.2rem;
  color: #333;
  background: white;
  text-align: center;
}
.float_bottom_hotcity_item i{
  display: inline-block;
  text-align: center;
  line-height: 1rem;
  font-size: 0.56rem;
  width: 1rem;
  height: 1rem;
  box-sizing: border-box;
      border: 0.02rem dashed #999;
    border-radius: 100%;
    margin-bottom: 0.1rem;
    color: #212121;
}


.float_bottom_hotcity_title{
  padding-left: 0.4rem;
  line-height: 0.4rem;
  background: #f3f3f3;
  font-size: 0.24rem;
}
.float_bottom_hotcity_name{
  box-sizing: border-box;
   padding-left: 0.4rem;
  line-height: 0.8rem;
  font-size: 0.28rem;
  font-weight: 700;
  background: white;
  border-bottom: 0.02rem solid #e0e0e0;
}


/* 右侧定位导航 */

.float_right{
  position: fixed;
  right: 5px;
  top:4.4rem;
  padding: 0.16rem 0;
}
.float_right div{
  font-size: 0.24rem;
  color:#bdbdbd;
  width: 0.32rem;
  height: 0.32rem;
  text-align: center;
  line-height: 0.32rem;
} 
</style>
