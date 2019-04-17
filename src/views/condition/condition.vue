<template>
    <div class='condition'>
        <div class='section' :style="{width: flag ? '1200px' : '100%','margin-top': flag ? '40px' : '0'}">
            <left></left>
            <div class='right' :style="{width: flag ? '945px' : '100%'}">
                <div class='bgColor bgtitle'>
                    <span style='margin-left: 20px;'>学院概况</span>
                </div>
                <div class='text' :style="{'padding': flag ? '2rem' : '1rem'}">
                    <img src="@/assets/images/conditionBody.png" alt="" style='width:100%'>
                   <div class='marginTop'>
                       <div class='textColor lineHeight' style='font-size: 1.1rem'>
                           打造优秀专业的学校
                        </div>
                        <div class='lineHeight'>
                           学院有正、副教授等高级专业技术职称教师占38%，博士、硕士学位教师占53%，聘请了30多名闻名专家、教授为学院的特聘教授和学科带人引进了50多名知名度高的专家、教授为各专业课程带头人；每年邀请海内外专家、学者来校讲学交流，使教育教学充满活力，让学生拓展视野，提升文化涵养。
                        </div>
                   </div>
                   <el-row :gutter="18" style='margin-top:2rem'>
                       <el-col :xs='12' :sm='12'>
                           <img src="@/assets/images/conLeft.png" alt="" style='width:100%'>
                           <div class='lineHeight'>
                               现有一级学科国家重点学科11个，二级学科国家重点学科19个，国
                                家重点学科覆盖的二级学科博士点占全校博士点总数的61.8%，有1
                                5个学科领域进入ESI全球前1%
                           </div>
                       </el-col>
                       <el-col :xs='12' :sm='12'>
                           <img src="@/assets/images/conRight.png" alt="" style='width:100%'>
                           <div class='lineHeight'>
                               学校有一大批高水准的科研机构。全校有科研机构410个，其中国家重点实验室5个，省部级重点实验室32个、省部级工程研究中心6个，教育部人文社会科学重点研究基地8个。
                           </div>
                       </el-col>
                   </el-row>
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
            form: {}
            // isText: true
        }
    },
    components: {
        Left
    },
    methods: {
    },
    mounted () {
        this.flag = isPc()
    }
}
</script>
<style lang='less'>
.condition {
    .section {
        margin: auto;
        display: flex;
        justify-content: space-between;
    }
    .text {
        background: #f9f9f9;
    }
    .marginTop {
        margin-top: 1.2rem;
    }
    .lineHeight {
        margin-top: 1rem;
        line-height: 2rem;
        font-size: 0.9rem;
    }
    .form {
        text-align: center;
    }
}

</style>
