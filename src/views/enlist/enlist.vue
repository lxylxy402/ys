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
.enlist {
    .section {
        margin: auto;
        display: flex;
        justify-content: space-between;
    }
    .text {
        padding: 1.3rem
    }
   
}

</style>
