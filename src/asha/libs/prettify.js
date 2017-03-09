var prettify = {}

prettify.timeFormat = function(date,fmt){
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds(), //毫秒
        "w+": date.getDay(),
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(String(o[k]).length)));
    return fmt;
}

prettify.time = function(t,fmt){
    if(typeof t=="string")t = new Date(t.substring(0,19).replace(/-/g,'/'))
    else if(!(t instanceof Date))t = new Date(t)
    if(typeof fmt=="string")return prettify.timeFormat(t,fmt)
    var now = new Date()
    var today = new Date(now.toDateString())
    var seconds = (now.getTime() - t.getTime())/1000
    if(seconds<60)return "刚刚";
    if(seconds<3600)return parseInt(seconds/60)+"分钟前"
    var tday = new Date(t.toDateString())
    var days = (today.getTime()-tday.getTime())/86400000
    var time = t.toTimeString().substr(0,5)
    if(days<1)return "今天 "+time
    if(days<2)return "昨天 "+time
    if(today.getYear()==t.getYear())return (t.getMonth()+1)+"-"+t.getDate()+" "+time
    return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+time
}

module.exports = prettify
