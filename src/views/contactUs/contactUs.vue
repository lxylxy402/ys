<template>
    <div class='contactUs'>
        <img src="@/assets/images/lxwm.jpg" alt="" style="width:100%;height: 380px;">
        <div class='section' :style="{width: flag ? '1200px' : '100%'}">
            <left></left>
            <div class='right' :style="{width: flag ? '945px' : '100%'}">
                <el-row>
                    <el-col :xs='24' :sm='24'>
                        <div class='bgColor bgtitle'>
                            <span style='margin-left: 20px;'>联系我们</span>
                        </div>
                        <div class='text'>
                            <span class='textTitle'>打造优秀专业的学校</span>
                            <br>
                            <span>
                                学院有正、副教授等高级专业技术职称教师占38%，博士、硕士学位教师占53%，聘请了30多名闻名专家、教授为学院的特聘教授和学科带人引进了50多名知名度高的专家、教授为各专业课程带头人；每年邀请海内外专家、学者来校讲学交流，使教育教学充满活力，让学生拓展视野，提升文化涵养。
                            </span>
                        </div>
                        <hr>
                        <div style="width:100%;height:550px;" id="dituContent"></div>     
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
//标注点数组
let markerArr = [{title:"福州锦睿教育",content:"电话：12388888888",point:"119.208894|26.07334",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
        ];
import Left from '../left.vue'
export default {
    data () {
        return {
            flag: true
        }
    },
    components: {
        Left
    },
    methods: {
        initMap() {
            this.createMap();//创建地图
            this.setMapEvent();//设置地图事件
            this.addMapControl();//向地图添加控件
            this.addMarker();//向地图中添加marker
        },
        //创建地图函数：
        createMap() {
            var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
            var point = new BMap.Point(119.209389,26.070289);//定义一个中心点坐标
            map.centerAndZoom(point,15);//设定地图的中心点和坐标并将地图显示在地图容器中
            window.map = map;//将map变量存储在全局
        },
        //地图事件设置函数：
        setMapEvent(){
            map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
            map.enableScrollWheelZoom();//启用地图滚轮放大缩小
            map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
            map.enableKeyboard();//启用键盘上下左右键移动地图
        },
        
        //地图控件添加函数：
        addMapControl(){
                //向地图中添加缩放控件
            var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
            map.addControl(ctrl_nav);
                //向地图中添加缩略图控件
            var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
            map.addControl(ctrl_ove);
                //向地图中添加比例尺控件
            var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
            map.addControl(ctrl_sca);
        },
        //创建marker
        addMarker(){
            let _that = this
            for(var i=0;i<markerArr.length;i++){
                var json = markerArr[i];
                var p0 = json.point.split("|")[0];
                var p1 = json.point.split("|")[1];
                var point = new BMap.Point(p0,p1);
                var iconImg = this.createIcon(json.icon);
                var marker = new BMap.Marker(point,{icon:iconImg});
                var iw = this.createInfoWindow(i);
                var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
                marker.setLabel(label);
                map.addOverlay(marker);
                label.setStyle({
                            borderColor:"#808080",
                            color:"#333",
                            cursor:"pointer"
                });
                (function(){
                    var index = i;
                    var _iw = _that.createInfoWindow(i);
                    var _marker = marker;
                    _marker.addEventListener("click",function(){
                        _that.openInfoWindow(_iw);
                    });
                    _iw.addEventListener("open",function(){
                        _marker.getLabel().hide();
                    })
                    _iw.addEventListener("close",function(){
                        _marker.getLabel().show();
                    })
                    label.addEventListener("click",function(){
                        _marker.openInfoWindow(_iw);
                    })
                    if(!!json.isOpen){
                        label.hide();
                        _marker.openInfoWindow(_iw);
                    }
                })()
            }
        },
        //创建InfoWindow
        createInfoWindow(i){
            var json = markerArr[i];
            var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
            return iw;
        },
        //创建一个Icon
        createIcon(json){
            var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
            return icon;
        },
        // 监听是否是手机
        check() { 
            let userAgentInfo=navigator.userAgent; 
            let Agents =new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod")
            this.flag=true
            for(var v=0;v<Agents.length;v++) { 
                if(userAgentInfo.indexOf(Agents[v])>0) { 
                    this.flag = false
                    break
                } 
            }
        }
    },
    mounted () {
        this.initMap()
        window.onresize = () => {
            this.check()
        }
        this.check()
    }
}
</script>

<style lang='less'>
html,body{margin:0;padding:0;}
.iw_poi_title {color:#CC5522;font-size:1.2rem;font-weight:bold;overflow:hidden;padding-right:13px;white-space:nowrap}
.iw_poi_content {font:12px arial,sans-serif;overflow:visible;padding-top:4px;white-space:-moz-pre-wrap;word-wrap:break-word}
.contactUs {
    font-size: 1.2rem;
    .section {
        width:1200px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }
    .right {
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        // float: right;
        width:945px;
    }
    .text {
        padding: 30px;
        line-height: 2;
        color: #666666;
        font-size: 1.2rem;
    }
    .textTitle {
        color: rgb(7, 108, 224)
    }
}
</style>
