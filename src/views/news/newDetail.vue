<template>
    <div class='newDetail'>
        <div  class='detailBody' :style="{width:flag ? '1200px' : '100%','margin-top':flag ? '20px' : '0'}">
            <div v-if='flag'>
                <span class='detailLeft'></span>
                <span class='detailColor'>新闻详情</span>
                <div class='border'></div>
            </div>
            <div class='detailText'>
                <div class='h1'>{{detail.titile}}</div>
                <div class='time'>
                    <span v-if='flag'>发表时间：</span>
                    <span>{{detail.time}}</span>
                </div>
                <div class='border' v-if='flag'></div>
                <div>
                    <div v-html="detail.text"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {isPc} from '@/lib/main.js'
export default {
    data () {
        return {
            showId: 0,
            flag: false,
            details:[
                {titile: '学校领导与全国“两会”代表委员进行座谈',time: '2019-04-20 19:01', text: '<div>2月23日至27日，应优势作物种质改良甘肃省国际科技合作基地邀请，由塔吉克斯坦科学院植物生理及遗传研究所、乌兹别克斯坦瓜类及马铃薯研究所、吉尔吉斯斯坦大学作物生产及保护系一行专家4人组成的国际马铃薯中心中亚地区代表团来访我校，就联合开展科学研究、人员培训和留学生交流等工作开展对接。</div><div>副校长毕阳，国际交流与社会合作处、科学技术发展研究院负责人及相关领域专家参加了座谈。毕阳简要介绍了我校发展概况、特色学科、师资队伍等情况，他说，甘肃农业大学马铃薯产业创新科研团队实力雄厚，成果突出，形成了马铃薯种植资源创新、生物技术育种、脱毒种薯生产、优质高效节水生产、病虫害综合防控、安全防腐贮藏、马铃薯联合收获机、马铃薯淀粉加工及副产物综合利用技术集成为一体的完整研究链，希望通过此次对接，学校能与“一带一路”沿线国家的研究机构建立稳定的沟通交流机制，推进中亚地区农业生产尤其是马铃薯等主要粮食作物的提质增效。</div><div>座谈期间，中亚代表团专家分别就各自国家的基本情况和农业生产现状作了介绍，并希望与我校尽快启动种质资源交流、联合科研、技术培训、学生培养等工作。访问团一行还在我校国合基地人员的陪同下，先后参观了学校认知馆、国家重点实验室培育基地、农学院、生命科学技术学院、机电工程学院的实验实践教学基地，并与我校作物抗逆研究团队开展了学术交流，主要围绕联合组织申报项目、抗逆种质资源交换以及师生交流等达成初步意向。此外，中亚代表团一行深入农业农村部农业贸易中心、中国农科院蔬菜花卉研究所、国际马铃薯中心亚太分中心延庆基地、定西香泉乡等与我校有合作项目的科研院所和企业，进行了实地考察。</div>'},
                {titile: '学校领导与全国“两会”代表委员进行座谈',time: '2019-04-20 19:01', text: '<div>2月25日下午，党委书记钟福国与即将赴京参加2019年全国“两会”的我校教师、第十三届全国人大代表马晖玲教授，全国政协十三届委员柴强教授，进行了座谈。两位教授分享了一年来履职尽责的经验体会，并就今年“两会”准备的议案和提案作了交流。学校办公室、党委宣传部、党委统战部、科学技术发展研究院相关人员参加了座谈。</div><div>钟福国指出，两位老师作为全国人大代表和全国政协委员，肩负着重要政治使命和广大师生厚望，希望两位老师充分发挥自身优势，积极反映社情民意，不负使命、认真履职、精彩发声，以饱满的政治热情和严谨务实的精神展示甘农风采，提升学校知名度、美誉度。钟福国表示，学校将一如既往地为代表委员履行职责、参政议政提供支持，通过建立常态机制，每年在“两会”召开前，组织有关部门与两位老师进行座谈，通报学校改革发展总体情况，听取代表委员对学校工作的意见建议。</div><div>马晖玲、柴强表示，“两会”结束后，自己将会以多种方式向广大师生传达“两会”精神，也会切实把“两会”精神落实到人才培养、日常教学和科学研究工作中去。</div>'}
            ],
            detail: {}
        }
    },
    mounted () {
        let {id} = this.$route.query
        this.showId = id
        this.flag = isPc()
        this.detail = this.details[this.showId]
        console.log('this.detail')
        console.log(this.detail)
    }
}
</script>
<style lang='less'>
.newDetail {
    .detailBody {
        margin: auto;
        // margin-top: 2rem
    }
    .detailLeft {
        border-left: 6px solid #076ce0;
        margin: 0 15px 0 4px;
    }
    .detailColor {
        color: #076ce0
    }
    .border {
        margin: 5px 0;
        border-bottom:1px solid #eee
    }
    .detailText {
        padding: 1rem
    }
    .h1 {
        font-weight: 400;
        font-size: 1.2rem
    }
    .time {
        color: #333;
        font-size: 0.8rem;
        margin: 2rem 0;
    }
}
</style>
