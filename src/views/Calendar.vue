
<template>
  <div class="calendar">



     <div class="calendarHeaderTop">
         <div class="close_icon">
             <i class="iconfont icon-cha1" @click="Return"></i>
         </div>
         <!-- <div class="calendar_header">
             选择入住离开日期
         </div> -->
     </div>
<!-- <van-cell title="选择日期区间" :value="date" @click="show = true" /> -->
<van-calendar title="选择入住离开日期" color="#ff4081"  type="range" @confirm="onConfirm" :poppable="false" :formatter="formatter" />


     <!-- <div class="calendar_wrap">
         <div class="calendar_content">
             <div class="calendar_box">
                 <div class="year_wrap">
                     2020 . 10
                 </div>
                 <div class="week_wrap">
                     <div class="week">一</div>
                     <div class="week">日</div>
                     <div class="week">二</div>
                     <div class="week">三</div>
                     <div class="week">四</div>
                     <div class="week">五</div>
                     <div class="week">六</div>
                 </div>
                 <div class="days">
                     <div class="grid empty">1</div>
                     <div class="grid empty">2</div>
                     <div class="grid empty">3</div>
                     <div class="grid empty">4</div>
                     <div class="grid empty">5</div>
                     <div class="grid empty">6</div>
                     <div class="grid empty">7</div>
                     <div class="grid empty">1</div>
                     <div class="grid empty">2</div>
                     <div class="grid empty">3</div>
                     <div class="grid empty">4</div>
                     <div class="grid empty">5</div>
                     <div class="grid empty">6</div>
                     <div class="grid empty">7</div>
                 </div>
             </div>

                 <div class="calendar_box">
                 <div class="year_wrap">
                     2020 . 10
                 </div>
                 <div class="week_wrap">
                     <div class="week">一</div>
                     <div class="week">日</div>
                     <div class="week">二</div>
                     <div class="week">三</div>
                     <div class="week">四</div>
                     <div class="week">五</div>
                     <div class="week">六</div>
                 </div>
                 <div class="days">
                     <div class="grid empty">1</div>
                     <div class="grid empty">2</div>
                     <div class="grid empty">3</div>
                     <div class="grid empty">4</div>
                     <div class="grid empty">5</div>
                     <div class="grid empty">6</div>
                     <div class="grid empty">7</div>
                     <div class="grid empty">1</div>
                     <div class="grid empty">2</div>
                     <div class="grid empty">3</div>
                     <div class="grid empty">4</div>
                     <div class="grid empty">5</div>
                     <div class="grid empty">6</div>
                     <div class="grid empty">7</div>
                 </div>
             </div>

                 <div class="calendar_box">
                 <div class="year_wrap">
                     2020 . 10
                 </div>
                 <div class="week_wrap">
                     <div class="week">一</div>
                     <div class="week">日</div>
                     <div class="week">二</div>
                     <div class="week">三</div>
                     <div class="week">四</div>
                     <div class="week">五</div>
                     <div class="week">六</div>
                 </div>
                 <div class="days">
                     <div class="grid empty">1</div>
                     <div class="grid empty">2</div>
                     <div class="grid empty">3</div>
                     <div class="grid empty">4</div>
                     <div class="grid empty">5</div>
                     <div class="grid empty">6</div>
                     <div class="grid empty">7</div>
                     <div class="grid empty">1</div>
                     <div class="grid empty">2</div>
                     <div class="grid empty">3</div>
                     <div class="grid empty">4</div>
                     <div class="grid empty">5</div>
                     <div class="grid empty">6</div>
                     <div class="grid empty">7</div>
                 </div>
             </div>

                 <div class="calendar_box">
                 <div class="year_wrap">
                     2020 . 10
                 </div>
                 <div class="week_wrap">
                     <div class="week">一</div>
                     <div class="week">日</div>
                     <div class="week">二</div>
                     <div class="week">三</div>
                     <div class="week">四</div>
                     <div class="week">五</div>
                     <div class="week">六</div>
                 </div>
                 <div class="days">
                     <div class="grid empty">1</div>
                     <div class="grid empty">2</div>
                     <div class="grid empty">3</div>
                     <div class="grid empty">4</div>
                     <div class="grid empty">5</div>
                     <div class="grid empty">6</div>
                     <div class="grid empty">7</div>
                     <div class="grid empty">1</div>
                     <div class="grid empty">2</div>
                     <div class="grid empty">3</div>
                     <div class="grid empty">4</div>
                     <div class="grid empty">5</div>
                     <div class="grid empty">6</div>
                     <div class="grid empty">7</div>
                 </div>
             </div>

                 <div class="calendar_box">
                 <div class="year_wrap">
                     2020 . 10
                 </div>
                 <div class="week_wrap">
                     <div class="week">一</div>
                     <div class="week">日</div>
                     <div class="week">二</div>
                     <div class="week">三</div>
                     <div class="week">四</div>
                     <div class="week">五</div>
                     <div class="week">六</div>
                 </div>
                 <div class="days">
                     <div class="grid empty">1</div>
                     <div class="grid empty">2</div>
                     <div class="grid empty">3</div>
                     <div class="grid empty">4</div>
                     <div class="grid empty">5</div>
                     <div class="grid empty">6</div>
                     <div class="grid empty">7</div>
                     <div class="grid empty">1</div>
                     <div class="grid empty">2</div>
                     <div class="grid empty">3</div>
                     <div class="grid empty">4</div>
                     <div class="grid empty">5</div>
                     <div class="grid empty">6</div>
                     <div class="grid empty">7</div>
                 </div>
             </div>

                 <div class="calendar_box">
                 <div class="year_wrap">
                     2020 . 10
                 </div>
                 <div class="week_wrap">
                     <div class="week">一</div>
                     <div class="week">日</div>
                     <div class="week">二</div>
                     <div class="week">三</div>
                     <div class="week">四</div>
                     <div class="week">五</div>
                     <div class="week">六</div>
                 </div>
                 <div class="days">
                     <div class="grid empty">1</div>
                     <div class="grid empty">2</div>
                     <div class="grid empty">3</div>
                     <div class="grid empty">4</div>
                     <div class="grid empty">5</div>
                     <div class="grid empty">6</div>
                     <div class="grid empty">7</div>
                     <div class="grid empty">1</div>
                     <div class="grid empty">2</div>
                     <div class="grid empty">3</div>
                     <div class="grid empty">4</div>
                     <div class="grid empty">5</div>
                     <div class="grid empty">6</div>
                     <div class="grid empty">7</div>
                 </div>
             </div>

                 <div class="calendar_box">
                 <div class="year_wrap">
                     2020 . 10
                 </div>
                 <div class="week_wrap">
                     <div class="week">一</div>
                     <div class="week">日</div>
                     <div class="week">二</div>
                     <div class="week">三</div>
                     <div class="week">四</div>
                     <div class="week">五</div>
                     <div class="week">六</div>
                 </div>
                 <div class="days">
                     <div class="grid empty">1</div>
                     <div class="grid empty">2</div>
                     <div class="grid empty">3</div>
                     <div class="grid empty">4</div>
                     <div class="grid empty">5</div>
                     <div class="grid empty">6</div>
                     <div class="grid empty">7</div>
                     <div class="grid empty">1</div>
                     <div class="grid empty">2</div>
                     <div class="grid empty">3</div>
                     <div class="grid empty">4</div>
                     <div class="grid empty">5</div>
                     <div class="grid empty">6</div>
                     <div class="grid empty">7</div>
                 </div>
             </div>








             <div class="confirmFbtn">
                 <div class="confirmBtn">确认</div>
             </div>
         </div>
     </div> -->
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
// import Bus from '../../src/assets/js/bus'

export default {
  data() {
    return {
        date: '',
     
    };
  },
  name: "Calendar",
  methods: {
    Return(){
        this.$router.go(-1)       ///左上角返回按钮
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    
    onConfirm(date) {               /////点击确认后的 函数
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;

      this.$router.push({path: '/', query: {data:this.date.replace(/\//g,".").split('-'),
      day:[date[0].getDay(),date[1].getDay()]}})
       console.log(this.date.replace(/\//g,".").split('-'));

       console.log(date[0].getDay());
     
    },
    formatter(day) {        
        if (day.type === 'start') {
        day.bottomInfo = '入住';
        } else if (day.type === 'end') {
        day.bottomInfo = '离店';
        }

        return day;
    },
  }
};
</script>


<style lang="css" scoped>


.van-calendar__footer{
    position: fixed !important ;
    bottom: 0 !important;
}

.calendarHeaderTop{
    padding: 0 0.3rem;
}
.close_icon{
    padding: 0.2rem 0;
    /* line-height: 0.7rem; */
}
.close_icon i{
    font-size: 0.6rem;
    color: #cccccc;
}
.calendar_header{
    line-height: 1rem;
    font-size: 0.4rem;
}


/* 下面日历部分 */
.calendar_wrap{
    padding: 0 0.3rem 0.9rem;
}
.calendar_content{
    position: relative;
}

.calendar_box{
    padding-bottom: 0.3rem;
    margin-bottom: 0.3rem;
}

.year_wrap{
    line-height: 0.74rem;
    font-size: 0.28rem;
    text-align: center;
    font-weight: 700;
}
.week_wrap{
    display: flex;
    justify-content: space-between;
}
.week{
    flex: 1;
    font-size: 0.24rem;
    color: #757575;
    line-height: 0.74rem;
    text-align: center;
    margin-bottom: 0.2rem;
}
.days{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

}
.grid{
    width: 14.2%;
    line-height: 0.6rem;
    font-size: 0.26rem;
    padding: 0.02rem;
    box-sizing: border-box;
    text-align: center;
}


/* 定位确定 */

.confirmFbtn{
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0.3rem 0.3rem;
    width: 100%;
    box-sizing: border-box;
    z-index: 99;
    background: white;
}
.confirmBtn{
    line-height: 0.8rem;
    color: #fff;
    background: #ff4081;
    text-align: center;
    font-size: 0.3rem;
    border-radius: 0.4rem;
}
</style>
