<template>
    <div class='enlist'>
        <div class='section' :style="{width: flag ? '1200px' : '100%','margin-top': flag ? '40px' : '0'}">
            <left></left>
            <div class='right' :style="{width: flag ? '945px' : '100%'}">
                <div class='bgColor bgtitle'>
                    <span style='margin-left: 20px;'>网上报名</span>
                </div>
                <div class='text'>
                   <el-row :gutter="18">
                       <el-col :xs='12' :sm='12'>
                           <img src="@/assets/images/esLeft.png" alt="" style='width:100%'>
                       </el-col>
                       <el-col :xs='12' :sm='12'>
                           <img src="@/assets/images/esRight.png" alt="" style='width:100%'>
                       </el-col>
                   </el-row>
                   <div class='marginTop'>
                       <div class='textColor lineHeight' style='font-size: 1.1rem'>
                           打造优秀专业的学校
                        </div>
                        <div class='lineHeight'>
                           学院有正、副教授等高级专业技术职称教师占38%，博士、硕士学位教师占53%，聘请了30多名闻名专家、教授为学院的特聘教授和学科带人引进了50多名知名度高的专家、教授为各专业课程带头人；每年邀请海内外专家、学者来校讲学交流，使教育教学充满活力，让学生拓展视野，提升文化涵养。
                        </div>
                   </div>
                   <el-row :gutter="40">
                        <el-col :xs='24' :sm='12'>
                            <div class='marginTop'>
                                <div class='textColor lineHeight' style='font-size: 1.1rem'>
                                    互动式教学模式
                                </div>
                                <div class='lineHeight' style='font-size: 0.8rem'>
                                    学国际班采用小班授课，互动式教学模式。英语语言能力强化以雅思为导向，注重学生“语言能力”和“学习能力”的培养，以适应全英授课和符合国外升学的要求由具有海外留学经验的导师全面负责学生的素质教育。
                                </div>
                            </div>
                        </el-col>
                        <el-col :xs='24' :sm='12' class='form' :style="flag ? 'border-left:1px solid #ddd' : '' ">
                            <div>网上报名</div>
                            <br>
                            <el-form ref="form" :model="form" label-width="5rem">
                                <el-form-item label="您的名字">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="您的电话">
                                    <el-input v-model="form.phone"></el-input>
                                </el-form-item>
                                <el-form-item label="您的专业">
                                    <el-input v-model="form.zy"></el-input>
                                </el-form-item>
                                <el-form-item label="报考证书">
                                    <el-input v-model="form.zs"></el-input>
                                </el-form-item>
                            </el-form>
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
.enlist {
    .section {
        margin: auto;
        display: flex;
        justify-content: space-between;
    }
    .text {
        background: #f9f9f9;
        padding: 1.3rem
    }
    .marginTop {
        margin-top: 1.2rem;
    }
    .lineHeight {
        line-height: 2.3rem;
    }
    .form {
        text-align: center;
    }
}

</style>
