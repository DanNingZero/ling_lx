import storage from './storage.js'
var api = {}
var API = "http://api.tederen.com"//"http://localhost:8090"//
var token = storage("api")

api.callJson = function(uri){
    return function(data){
        return new Promise(function(resolve,reject){
            fetch(API+uri,{credentials: 'include',body:JSON.stringify(data),method: "POST",headers:{'content-type':'application/json','WHOSYOURDADDY':'inu1255','X-Auth-Token':token.value}}).then(function(res){
                if(res.ok)return res.json();
            }).then(function(res){
                if(!res) reject(404)
                if(typeof res.code=="undefined")resolve(res)
                if(res.code==0)resolve(res.data)
                else reject(res.msg)
            }).catch(function(){
                reject()
            })
        })
    }
}
api.getJson = function(uri){
    return function(){
        return new Promise(function(resolve,reject){
            fetch(API+uri,{credentials: 'include',headers:{'content-type':'application/json','WHOSYOURDADDY':'inu1255','X-Auth-Token':token.value}}).then(function(res){
                if(res.ok)return res.json();
            }).then(function(res){
                if(!res) reject(404)
                if(typeof res.code=="undefined")resolve(res)
                if(res.code==0)resolve(res.data)
                else reject(res.msg)
            }).catch(function(e){
                reject(e)
            })
        })
    }
}
api.setUrl = function(url){
    API = url
    return api
}
api.setToken = function(t){
    token.value = t
    token.saveStorage()
}
api.getToken = function(){
    return token.value
}
api.cloneObj = function(obj){
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(obj), //系列化对象
        newobj = JSON.parse(str); //还原
    } else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ? 
            cloneObj(obj[i]) : obj[i]; 
        }
    }
    return newobj;
}
module.exports = api
