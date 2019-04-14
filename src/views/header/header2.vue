<template>
<div>
    <div class='header2'>
        <img src="@/assets/images/three.jpg" alt="" @click='handleShowMenu'>
        <el-input>
        </el-input>
        <img src="@/assets/images/user.jpg" alt="">
    </div>
    <div style='height: 3.15rem;'></div>
    <div style='z-index: 500;position: absolute;' v-if='showMenu'>
        <el-menu>
            <el-menu-item v-for='(item,index) in title' :key='index' @click='handleLink(item)'>
                <!-- <i class="el-icon-menu"></i> -->
                <span slot="title">{{item.name}}</span>
            </el-menu-item>
        </el-menu>
    </div>
</div>
    
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
    data () {
        return {
            showMenu: false
        }
    },
    computed:{
        ...mapState({
            title: state=> state.title,
            // chooseLink: state=> state.chooseLink
        })
    },
    methods:{
        handleShowMenu () {
            this.showMenu = !this.showMenu
        },
        handleLink (param) {
            console.log('很棒棒')
            // this.$store.commit('changeChoose', param.num)
            this.$router.push(param.link)
            this.showMenu = false
        }
    }
}
</script>
<style lang='less'>
.header2 {
    display: -webkit-box;
    display: -ms-flexbox;
    z-index: 50;
    position: fixed;
    width: 100%;
    background: #fff;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 3.15rem;
    padding-left: .5rem;
    padding-right: .5rem;
    border-bottom: 1px solid #eee;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    .el-input {
        display: contents;
    }
    .el-input__inner {
        border-radius: 20px;
        // width: 80%;
    }

}
</style>

