<template>
    <div style="height:100%" class="main_index">
        <div class="block" >
        
            <el-carousel trigger="click" arrow="never"  :style="{height:flag?'25rem':'10rem'}" class="telcss" >
                <el-carousel-item >
                    <img class="body_img" :style="{height:flag?'25rem':'10rem'}" src="../../assets/images/headerup1.jpg" alt="" style="width:100%">
                </el-carousel-item>
                <el-carousel-item >
                    <img class="body_img" :style="{height:flag?'25rem':'10rem'}"  src="../../assets/images/headerup2.jpg" alt="" style="width:100%">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div :class="flag?'neck common_block':'tel_neck common_block' " >
            <el-row class='irow'>
                <el-col :sapn=24 style="text-align:center;padding-top: 1rem;">
                    <span style="color:rgba(121, 136, 199, 0.9);">快速通道</span>
                </el-col>
            </el-row>
            <el-row class='irow2'>
                <el-col :span=4>
                    <span class="neck_span">
                        <img class="body_img" src="../../assets/images/body3.png" alt="">
                        <span class="neck_name">招生简章</span>
                    </span>

                </el-col>
                <el-col :span=4>
                    <span class="neck_span">
                        <img class="body_img" src="../../assets/images/body2.png" alt="">
                    <span  class="neck_name">宣传视频</span>
                    </span>

                </el-col>
                <el-col :span=4>
                    <span class="neck_span">
                        <img class="body_img" src="../../assets/images/body5.png" alt="">
                    <span  class="neck_name">申报流程</span>
                    </span>
                </el-col>
                <el-col :span=4>
                    <span class="neck_span">
                        <img class="body_img" src="../../assets/images/body4.png" alt="">
                    <span  class="neck_name">专业介绍</span>
                    </span>
                </el-col>
                <el-col :span=4>
                    <span class="neck_span">
                        <img  class="body_img" src="../../assets/images/body1.png" alt="">
                        <span  class="neck_name">在线报名</span>
                    </span>
                </el-col>
                <el-col :span=4>
                    <span class="neck_span">
                        <img class="body_img" src="../../assets/images/body6.png" alt="">
                        <span  class="neck_name">录取查询</span>
                    </span>
                </el-col>
            </el-row>
        </div>
        <div v-if='flag' class="body common_block" :style="{paddingTop:flag?'1px':'1rem'}">
            <el-row :style="{height:flag?'17rem':'6rem'}">
                <el-col :span=6>
                    <div class='body_blockimg' >
                        <div :style="{position: 'relative',top:flag?'3.5rem':'1rem',zIndex: 3}">
                            <span :style="{fontSize:flag?'1.2rem':'0.7rem',color:'white'}">
                                走进我们
                            </span>
                            <hr style="width:2rem">
                            <span style="display:inline-block;width:80%;font-size:0.3rem;color:white">
                    欢饮走进我们学院，各个学项均获得世界教育认可</span>
                            <div :class="flag?'button_tel':'button'">提交</div>
                        </div>
                        <img class="body_img" src="../../assets/images/bodyf1.png" alt="" 
                        :style="{position:'relative',top:flag?'-8.6rem':'-9rem'}">
                    </div>
                </el-col>
                <el-col :span=6>
                    <div class='body_blockimg'>
                        <div v-show="bodyshowf" @mouseenter="bodyshowf=true" @mouseleave="bodyshowf=false"
                             class='body_div' :style="{lineHeight:flag?'10rem':'6rem',fontSize:flag?'1.2rem':'0.6rem'}"
                        >
                            <span>国家任务生</span>
                        </div>
                        <img class="body_img" @mouseenter="bodyshowf=true" @mouseleave="bodyshowf=false"
                             :style="{position:'relative',top:bodyshowf?(flag?-17+'rem':-6+'rem'):0+'rem'}" src="../../assets/images/bodyf4.png" alt="">
                    </div>
                </el-col>
                <el-col :span=12>
                    <div class='body_blockimg'>
                        <div v-show="bodyshows" @mouseenter="bodyshows=true" @mouseleave="bodyshows=false"
                             class='body_div'
                        >
                            <div :style="{paddingTop:flag?'3rem':'1rem',paddingLeft:flag?'1rem':'0.5rem',fontSize:flag?'1.2rem':'0.6rem'}">
                                <span style="display:block">实现2个对接</span>
                                <span>课程兼容中外双方优势，小班授课，双语</span>
                            </div>

                        </div>
                        <img class="body_img"  @mouseenter="bodyshows=true" @mouseleave="bodyshows=false"
                             :style="{position:'relative',top:bodyshows?(flag?-17+'rem':-6+'rem'):0+'rem'}"
                             src="../../assets/images/header2.png" alt="">
                    </div>
                </el-col>
            </el-row>
            <el-row :style="{height:flag?'17rem':'6rem'}">
                <el-col :span=6>
                    <div class='body_blockimg'>
                        <img class="body_img" src="../../assets/images/bodyf5.png" alt="">
                    </div>
                </el-col>
                <el-col :span=6>
                    <div class='body_blockimg'>
                        <img class="body_img" src="../../assets/images/bodyf2.png" alt="">
                    </div>
                </el-col>
                <el-col :span=6>
                    <div class='body_blockimg'>
                        <img class="body_img" src="../../assets/images/bodyf6.png" alt="">
                    </div>
                </el-col>
                <el-col :span=6>
                    <div class='body_blockimg'>
                        <img class="body_img" src="../../assets/images/bodyf3.png" alt="">
                    </div>
                </el-col>
            </el-row>

        </div>
        <div v-else>
            <el-row style="margin:1rem auto">
                <el-col :span='24' style="text-align:center;font-size:1.3rem">
                    <span >互动教学模式</span>
                </el-col>
            </el-row>
            <el-row style="margin:1rem auto">
                <el-col :span="11">
                    <div  style="text-align:center">
    
                        <img style="width:95%;height:12rem;margin-left:1rem"
                              src="../../assets/images/bodyf3.png" alt="">
                              <span style="display:block;margin-top:1rem">2+2国际版</span>
                    </div> 
                </el-col>
                <el-col :span='2'>
                    <br>
                </el-col>
                 <el-col :span="11">
                    <div style="text-align:center">
                        <img style="width:95%;height:12rem;margin-right:1rem"
                              src="../../assets/images/bodyf5.png" alt="">
                               <span style="display:block;margin-top:1rem">国家任务生</span>
                    </div> 
                </el-col>
            </el-row>
             <el-row style="margin:1rem auto">
                <el-col :span="11">
                    <div  style="text-align:center">
    
                        <img style="width:95%;height:12rem%;margin-left:1rem"
                              src="../../assets/images/bodyf6.png" alt="">
                              <span style="display:block;margin-top:1rem">坚守1标准</span>
                    </div> 
                </el-col>
                <el-col :span='2'>
                    <br>
                </el-col>
                 <el-col :span="11">
                    <div style="text-align:center">
                        <img style="width:95%;height:12rem%;margin-right:1rem"
                              src="../../assets/images/bodyf2.png" alt="">
                               <span style="display:block;margin-top:1rem">实现2对接</span>
                    </div> 
                </el-col>
            </el-row>
        </div>
        <div class="body_table common_block" style='border:0px solid white'>
            <el-row>
                <el-col :span=flag?12:24 >
                    <table style=" border:1px solid rgba(141, 153, 153, 0.7);">
                        <thead class="body_table_head">
                        <tr :style="{color:'white',font:flag?'1rem':'0.6rem'}">
                            <td>学校新闻</td>
                            <td>MORE+</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in table1" :key='item.key'  >
                            <td>{{item.name}}</td>
                            <td>{{item.time}}</td>
                        </tr>

                        </tbody>
                    </table>
                </el-col>
                <el-col :span=flag?12:24 :style="{marginTop:flag?'':'0.5rem',paddingLeft:flag?'2px':''}">
                    <table style=" border:1px solid rgba(141, 153, 153, 0.7);">
                        <thead class="body_table_head">
                        <tr  :style="{color:'white',font:flag?'1rem':'0.6rem'}">
                            <td> 学校新闻</td>
                            <td>MORE+</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in table2" :key='item.key'  >
                            <td>{{item.name}}</td>
                            <td>{{item.time}}</td>
                        </tr>

                        </tbody>
                    </table>
                </el-col>
            </el-row>
        </div>
        <dir class="footer common_block" style="text-align:center" >
            <marquee id="affiche" align="middle"   behavior="alternate"
                     bgcolor="white" direction="left" height="176" width="90%"
                     hspace="50" vspace="20" loop="-1" scrollamount="10"
                     scrolldelay="100" style="margin:20px 0px;background-color:rgba(248, 248, 248, 0.5);text-align:center"
                     :style="{marginTop:flag?'3rem':'1rem',width:flag?'90%':'17rem'}"
                     onMouseOut="this.start()" onMouseOver="this.stop()">
                <img src="../../assets/images/footer1.png" alt="">
                <img src="../../assets/images/footer2.png" alt="">
                <img src="../../assets/images/footer3.png" alt="">
                <img src="../../assets/images/footer4.png" alt="">
                <img src="../../assets/images/footer5.png" alt="">
                <img src="../../assets/images/footer1.png" alt="">
            </marquee>
        </dir>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                table1:[{name:'留学分享会丨你所不知道的留学生活',time:'2019-2-10',key:1},
                    {name:'学校举办新增遴选研究生导师专题培训会',time:'2019-2-10',key:2},
                    {name:'学校领导带队赴北京大学“招贤选才”',time:'2019-2-10',key:3},
                    {name:'促进全要素融合融通 探索“三全育人”新机制',time:'2019-2-10',key:4},
                    {name:' 财经学院2019年春季田径运动会顺利举办',time:'2019-2-10',key:5}],
                table2:[
                    {name:'学校领导带队赴北京大学“招贤选才”',time:'2019-2-10',key:3},
                    {name:'学校举办新增遴选研究生导师专题培训会',time:'2019-2-10',key:2},
                    {name:'留学分享会丨你所不知道的留学生活',time:'2019-2-10',key:1},
                    {name:' 财经学院2019年春季田径运动会顺利举办',time:'2019-2-10',key:5},
                    {name:'促进全要素融合融通 探索“三全育人”新机制',time:'2019-2-10',key:4}],
                bodyshowf:false,//图片1是否显示
                bodyshows:false,//图片2是否显示
                flag:true,//是否为手机端
                flag_bodycss:300,
                flag_bodycss_tel:300,

            }
        },
        mounted(){
            this.check();
        },
        methods:{
            check() {
                console.log(4545)
                let userAgentInfo=navigator.userAgent;
                let Agents =new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod")
                this.flag=true;
                for(var v=0;v<Agents.length;v++) {
                    if(userAgentInfo.indexOf(Agents[v])>0) {
                        this.flag = false;
                     
                        break
                    }
                }
            
            },
            bodycss(){
                
            },
        },
    }
</script>

<style lang="less">
    .main_index{
        .el-carousel__container{
            height:420px 
        }
        .body_img{
            width:100%;
        height:100%;
        }

        .button{
            width:2rem;
            height:1rem;
            border:1px solid white;
            color:white;
            font-size:0.6rem;
            line-height: 1rem;
            text-align:center;
            margin:14px auto;
        }
        .button_tel{
            width:4rem;
            height:2rem;
            border:1px solid white;
            color:white;
            font-size:1rem;
            line-height: 2rem;
            text-align:center;
            margin:14px auto;
        }
        .common_block{
            width:90%;
            background-color: rgba(248, 248, 248, 1);
            border:1px solid rgba(141, 153, 153, 0.7);
            text-align: center;
            margin: 5px auto;
            border-radius:5px;
        }
        .irow {
            height: 3rem;
            border-bottom:1px solid rgba(141, 153, 153, 0.7);
        }
        .irow2 {
            padding-bottom: 1rem;
        }
        .neck{
            // padding: 5px;
            // height:350px;
            /* border:1px solid red; */
        }
        .tel_neck{
            width:100%;
            height:140px;
            margin-top: 20px;
            font-size: 0.6rem;
        }
        .neck_span{
            text-align: center;
            margin-top: 0.2rem;
            display: inline-block;

        }
        .neck_name{
            display:block;
            font-size: 0.5rem;
            color:rgb(119, 119, 119);

        }
        .telcss{
           
            overflow: hidden;
        }
        .body .el-row{
        
        }
        .body_div{
            width:100%;
            height:100%;
            position: relative;
            z-index: 3;
            background:rgba(7, 108, 224, 0.698);
            color:white;
            text-align:center;
            font-size: 0.7rem;
        }
        .body .el-row .el-col{
            height:100%;
        }
        .body_blockimg{
            /* border:1px solid red; */
            height:100%;
        }
        .body_table{
           // height:10rem;
            // padding-right:5px;
        }
        .body_table table{
            text-align:left;
            width:100%;
            height:10rem;
            background-color:  rgba(248, 248, 248, 1);
            color:#666666;
            font-size:0.6rem;
            border-radius: 5px;
        }
        .body_table .el-row .el-col:first-child{
            // padding-right:1rem;
    
        }
        .body_table .el-row .el-col:last-child{
          
            // padding-left:1rem;
        }

        .body_table table tr td:first-child{
            width:80%;
            margin:3px 4px;
            padding-left:0.6rem;
        }
        .body_table table td{
            /* border-bottom: 1px solid red; */
        }
        .body_table_head{
            height:35px;
            color:white;
            line-height: 35px;
            background-color: #419cc7;
        }
        .footer{
            height:231px;
            padding:0px 0px !important;
        }
        .el-carousel__item h3 {
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 150px;
            margin: 0;
        }

        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        }
    }
   
</style>
<style >
    
</style>