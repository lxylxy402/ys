export const isPc = () => {
    let userAgentInfo=navigator.userAgent; 
    let Agents =new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod")
    let flag = true
    for(var v=0;v<Agents.length;v++) { 
        if(userAgentInfo.indexOf(Agents[v])>0) { 
            flag = false
            break
        } 
    }
    console.log('很棒棒啊')
    return flag
}