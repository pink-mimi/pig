<template>
    <div class="photo">
        <div class="password_top">
            设置新密码
        </div>
        <div class="log_box">
            <div class="tab_con">
                <div class="login_tip">
                    <div class="login_tip_img">
                        <img src="https://m.xiaozhu.com/static/images/r_top_ico.png" alt="">
                    </div>
                    <div class="login_tip_text">
                        验证短信已发送至手机号码<br>
                        <em>+<span>86</span>&nbsp;&nbsp;<i class="myphoto">{{photo}}</i></em>
                        <span class="amendtphoto" @click="Return">(修改)</span>
                    </div>
                </div>
                
                <div class="tab_content1">
                    <div class="verification_box">
                        <i class="iconfont icon-dunpaisuo"></i>
                        <input class="verification" v-model="verification" type="text" placeholder="动态验证码" />
                        <div class="hq_box">再次获取</div>
                    </div>

                    <div class="mail_box">
                        <i class="iconfont icon-yonghu"></i>
                        <input class="mail" type="text" v-model="username"  placeholder="用户名" />
                    </div>

                    <div class="password_box">
                        <i class="iconfont icon-dunpaisuo"></i>
                        <input class="password" type="password" v-model="password" placeholder="密码" />
                    </div>

                    <div class="login_btn" @click="login">完成</div>
                </div>
            </div>
        </div>

        
        <div class="popout">
            <div class="popout1" v-if="show1"> 
                请输入手机验证码
            </div>
            <div class="popout2" v-if="show2">
                请输入用户名和新密码
            </div>
            <div class="popout3" v-if="show3">
                输入参数不对
            </div>
        </div>
    </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    data() {
        return {
            photo:'',
            verification:'',
            username:'',
            password:'',
            show1:false,
            show2:false,
            show3:false,
        };
    },
    name: "Photo",
    methods:{

        login(){
            
            if(this.verification == ''||!this.verification.match(/^(?!(\s+$))/)){
                this.show1=true
                setTimeout(()=>{
                    this.show1=false
                },3000)
                return
            }
            if(this.password == ''||!this.password.match(/^(?!(\s+$))/)||this.username == ''||!this.username.match(/^(?!(\s+$))/)){
                this.show2=true
                setTimeout(()=>{
                    this.show2=false
                },3000)
                return
            }
            if(this.verification!=123456){
                this.show3=true
                setTimeout(()=>{
                    this.show3=false
                },3000)
                return
            }
            var date1=new Date()
            date1.setTime(date1.getTime()+7*24*60*60*1000);  ///七天储存
            date1=date1.toGMTString()
            const username=this.username
            const password=this.password
            document.cookie="username="+username+";expires="+date1
            document.cookie="password="+password+";expires="+date1
            this.verification=''
            this.username=''
            this.password=''

             this.$router.push({path: '/login'})
        },
        Return(){
            this.$router.go(-1)
        }
    },
    mounted(){
             this.photo=this.$route.query.photo
    }
 
};
</script>

<style lang="css" scoped>
.photo{
    position: relative;
    width: 100%;
    box-sizing: border-box;
}
.password_top{
    line-height: 0.9rem;
    border-bottom: .266vw solid #eee;
    box-sizing: border-box;
    font-size: 0.34rem;
    text-align: center;
    margin-bottom: 0.6rem;
}

.log_box{
    padding: 0 0.2rem;
}
.tab_con{

    width: 100%;
}
.login_tip{
    display: flex;
        margin: 0 auto 0.6rem;
    justify-content: center;
}
.login_tip_img img{
    width: 0.72rem;
    height: 0.72rem;
}
.login_tip_text{
    padding-left: 0.2rem;
    line-height: initial;
}
.amendtphoto{
    color: #ff4081;
}




.tab_content{
    width: 100%;
}
.mail_box,
.password_box,
.verification_box {
  padding: 0 0.3rem;
  margin-bottom: 0.3rem;
  border: 0.02rem solid #eee;
  position: relative;
}

.mail,
.password,
.verification {
  outline: none;
  border: none;
  height: 0.72rem;
  width: 60%;
  padding-left: 0.3rem;
}

.mail_box i,
.password_box i,
.verification_box i {
  font-size: 0.34rem;
}

.login_btn {
  margin-top: 0.6rem;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.32rem;
  background: #f05b72;
  border-radius: 0.04rem;
  color: #fff;
}
.hq_box{
    position: absolute;
    top: 0.24rem;
    right: 0.3rem;
    width: 1.7rem;
    border-left: 1px solid #959ea7;
    color: black;
    font-size: 0.26rem;
    text-align: right;
}




/* 弹框 */
.popout{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
}
.popout1,.popout2,.popout3{
  font-size: 0.28rem;
  color: white;
  padding: 0.2rem;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.1rem;
}
</style>
