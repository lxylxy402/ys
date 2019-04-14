<template>
  <div id="app">
    <div id="nav">
        <Header v-if='flag'></Header>
        <phoneHead v-else></phoneHead>
        <!-- <router-link to="/">Home</router-link>
        <router-link to="/contactUs">About</router-link> -->
        <router-view/>
    </div>
       
  </div>
</template>
<script>
import Header from '@/views/header/header.vue'
import PhoneHead from '@/views/header/header2.vue'
export default {
    data () {
        return {
            flag: true
        }
    },
    components: {
        Header,
        PhoneHead
    },
    methods: {
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
        this.check()
    }
}
</script>
<style lang="less">
a {
    text-decoration: none;
    out-line: none;
    color: #fff;
}
.bgColor {
    background:#076ce0;
    color:#fff;
}
</style>
