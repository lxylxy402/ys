<template>
    <div class='left' v-if='flag'>
        <div class='shadow'>
            <div class='contact'>
                <span class='margLeft'>
                    联系我们
                </span>
            </div>
            <div  v-for='(item,index) in title' :key='index'>
                <div class='body' @click='handleLink(item)'>
                    <span class='margLeft' :style="{color: chooseLink === index ? '#076ce0' : '#666666'}">
                        {{item.name}}
                    </span>
                </div>
                <div class='border-size' v-show='item.haveBorder'></div>
            </div>
        </div>
        <br><br>
        <div class='shadow'>
            <div class='contact'>
                <span class='margLeft'>
                    在线客服
                </span>
            </div>
            <div class=" showqq">
                <a rel="nofollow" hidefocus="true" href="//wpa.qq.com/msgrd?v=3&amp;uin=25850650&amp;site=qq&amp;menu=yes" target="_blank">
                    <span class="serOnline-img0 qqImg0">&nbsp;</span>
                    <span>
                        客服一
                    </span>
                </a>
            </div>
            <div class=" showqq">
                <a rel="nofollow" hidefocus="true" href="//wpa.qq.com/msgrd?v=3&amp;uin=25850650&amp;site=qq&amp;menu=yes" target="_blank">
                    <span class="serOnline-img0 qqImg0">&nbsp;</span>
                    <span>
                        客服一
                    </span>
                </a>
            </div>
            <div class='border-size'></div>
            <div>
                <div>
                    <span class='tiemJpg png'></span>
                    <span class='timeText'>工作时间</span>
                </div>
                <div class='timeChild'>周一至周五： 8.30-17.30</div>
                <div class='timeChild'>周六至周日： 9.00-17.00</div>
            </div>
            <div class='border-size'></div>
            <div>
                <div>
                    <span class='wxpng png'></span>
                    <span class='timeText'>联系方式</span>
                </div>
                <div class='timeChild'>客服热线：400-xx6-8888</div>
                <div class='timeChild'>邮箱： abc@qq.com</div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
    data () {
        return {
            flag: true
        }
    },
   computed:{
        ...mapState({
            title: state=> state.title,
            chooseLink: state=> state.chooseLink
        })
    },
    methods: {
        handleLink (param) {
            this.$store.commit('changeChoose', param.num)
            this.$router.push(param.link)
        },
        check() { 
            let userAgentInfo=navigator.userAgent; 
            let Agents =new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod")
            this.flag=true
            console.log('this.flag')
            console.log(this.flag)
            for(var v=0;v<Agents.length;v++) { 
                if(userAgentInfo.indexOf(Agents[v])>0) { 
                    this.flag = false
                    break
                } 
            }
        }
    },
    mounted () {
        window.onresize = () => {
            this.check()
            console.log('很棒棒 啊')
        }
        this.check()
    }
}
</script>
<style lang='less'>
.left {
    width: 210px;
    .shadow {
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
    .contact {
        
        background: #076ce0;
        color: #fff;
        height: 45px;
        line-height: 45px;
    }
    .margLeft {
        margin-left: 15px
    }
    .body {
        height: 26px;
        line-height: 26px;
        color: #666666;
        font-weight: normal;
        font-size: 1.4 rem;
        padding: 7px 10px;
        cursor: pointer;
    }
    .body :hover{
        color:#076ce0;
    }
    .border-size {
        border-bottom: 1px dashed #eee;
    }
    a {
        color: #666
    }
    .qqImg0 {
        background: url(../assets/images/qq.jpg) no-repeat;
    }
    .showqq {
        height: 35px;
        line-height: 2;
    }
    .serOnline-img0 {
        width: 30px;
        height: 30px;
        display: inline-block;
        margin-left: 8px;
    }
    .png {
        width: 30px;
        height: 30px;
        display: inline-block;
        margin-left: 8px;
        margin-top: 10px;
    }
    .tiemJpg {
        background: url(../assets/images/time.png) no-repeat;
    }
    .timeText {
        position: absolute;
        margin-top: 12px;
    }
    .timeChild {
        padding: 0 15px 5px;
        color: #666;
        font-size: 1.4rem;
    }
    .wxpng {
        background: url(../assets/images/wx.png) no-repeat;
    }
}
</style>
