<template>
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

</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    data() {
    return {
        num:2,
    };
    },
    name: "Menu",
    methods:{
        show(){
        this.num=1
        },
        hide(){
        this.num=2
        }
    }
};
</script>


<style lang="css" scoped>

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
</style>
