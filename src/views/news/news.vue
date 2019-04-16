<template>
    <div class='news'>
        <div class='section' :style="{width: flag ? '1200px' : '100%','margin-top': flag ? '40px' : '0'}">
            <left></left>
            <div class='right' :style="{width: flag ? '945px' : '100%'}">
                <div class='bgColor bgtitle'>
                    <span style='margin-left: 20px;'>新闻动态</span>
                </div>
                <div class='text'>
                    <div v-for='index in 3' :key='index'>
                        <div class='sec' @click='handleShowText(1)'>
                            <div class='title'>
                                <span>学校领导与全国“两会”代表委员进行座谈</span>
                                <span v-show='flag'>2019-4-20</span>
                            </div>
                            <div class='zhengw'>
                                2月25日下午，党委书记钟福国与即将赴京参加2019年全国“两会”的我校教师、第十三届全国人大代表马晖玲教授，全国
                            </div>
                            <div class='border'></div>
                        </div>
                        <div class='sec' @click='handleShowText(2)'>
                            <div class='title'>
                                <span>国际马铃薯中心中亚地区代表来访我校</span>
                                <span v-show='flag'>2019-4-20</span>
                            </div>
                            <div class='zhengw'>
                                2月23日至27日，应优势作物种质改良甘肃省国际科技合作基地邀请，由塔吉克斯坦科学院植物生理及遗传研究所、乌兹别克斯坦瓜类及马铃薯研究所、吉尔吉斯斯坦大学作物生产及保护系一行专家4人组成的国际马铃薯中心中亚地区代表团来访我校，就联合开展科学研究、人员培训和留学生交流等工作开展对接。
                            </div>
                            <div class='border'></div>
                        </div>
                    </div>
                    
                </div> 
            </div>
        </div>
        <router-view/>
    </div>
</template>
<script>
import Left from '../left.vue'
import {isPc} from '@/lib/main.js'
export default {
    data () {
        return {
            flag: true,
            // isText: true
        }
    },
    components: {
        Left
    },
    methods: {
        handleShowText (id) {
            // this.isText = false
            this.$router.push({path:'/newsDetails', query:{id: id}})
        }
    },
    mounted () {
        this.flag = isPc()
    }
}
</script>
<style lang='less'>
.news {
    .section {
        margin: auto;
        display: flex;
        justify-content: space-between;
    }
    .text {
        font-size: 0.9rem;
        line-height: 2rem;
        background: #efefef;
    }
    .sec {
        cursor: pointer;
        padding:0.4rem 1rem;
    }
    .zhengw {
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        -webkit-text-overflow: ellipsis;
        -moz-text-overflow: ellipsis;
        white-space: nowrap;
    }
    .title :hover{
        color:#076ce0;
        // background: #fff;
    }
    .title {
        justify-content: space-between;
        display: flex;
    }
    .border {
        border: 2px dashed #e5e5e5;
        margin: 1.4rem 0 0.7rem 0;
        border-top: none;
    }
}

</style>
