<template>
    <div class="head">
        <header class='header' style='width:1200px;margin:auto'>
            <div class="header-left">
            <h1>
                <span style="color: rgb(7, 108, 224)">School</span>
                &nbsp;Design
            </h1>
            </div>
            <el-input class="inputWidth">
                <el-button slot="append" icon="el-icon-search"  class="bgColor bottom"></el-button>
            </el-input>
            <div class='header-right'>
                <img src="@/assets/images/phone.png" alt="" style="margin-right:20px;">
                <div style="display:inline-block">
                    <div>全国咨询热线</div>
                    <div style="font-size: 20px; color: rgb(7, 108, 224);">020-12345678</div>
                </div>
            </div>
        </header>
        <section class="section bgColor">
            <div style='width:1200px;margin:auto'>
                <div class="menu">
                    <!-- <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown> -->
                    <span v-for="(item, index) in title"
                        :key="index" @click="handleLink(item)"
                        :class="chooseLink ===+index ? 'bgColor2' : ''">
                       {{item.name}}
                    </span>
                </div>
                <!-- <el-carousel indicator-position="outside">
                    <el-carousel-item>
                        <img src='@/assets/images/header1.png' alt="" style="width:100%;height: 595px;">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src='@/assets/images/header2.png' alt="" style="width:100%;height: 595px;">
                    </el-carousel-item>
                </el-carousel> -->
            </div>
        </section>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
    data () {
        return {
            carousel: [
                { name: 'header1' },
                { name: 'header2' }
            ]
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
        }
    }
}
</script>
<style lang="less" scoped>
.head {
    .el-button {
        line-height: 1.15;
    }
    .header {
        // width: 100%;
        text-align: center;
        padding:30px;
        &-left {
            position: absolute;
            top: 8px;
            cursor: pointer;
            min-height: 40px;
            text-align: left;
            white-space: nowrap;
            color: rgb(204, 204, 204)
        }
        .inputWidth{
            text-align: center;
            margin-left: 245px;
            width:258px;
        }
        &-right {
            float: right;
            display: inline-block;
            // margin-right: 40px;
        }
    }
    .bgColor {
        background:#076ce0;
        color:#fff;
    }
    .bgColor2 {
        background:#fff;
        color: #076ce0;
        a {
            color: #076ce0;
        }
    }
    .bottom {
        border-radius: 0px 5px 5px 0px;
    }
    .section {
        height:50px;
        line-height: 50px;
        .menu {
            font-size: 16px;
            line-height: 50px;
            color: #fff;
            span {
                margin: auto;
                text-align: center;
                cursor:pointer;
                display: inline-block;
                width: 100px;
            }
        }
        .el-dropdown {
            color:#fff;
        }
    }
}
</style>
