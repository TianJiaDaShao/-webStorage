/**
 * Created by Administrator on 2016/9/22.
 */
function setStorage(StorageType, key,value) {
    /*StorageType:true is local,false is session
    key is StorageKey
    value is StorageValue*/
    if(StorageType==true){
        localStorage.setItem(key,String(value));
    }else {
        sessionStorage.setItem(key,String(value));
    }
}
function removeStorage(key) {
    if(!key){
        localStorage.clear();
    }else {
        localStorage.removeItem(key);
    }
}

function getStorage(StorageType, key,valueType,fn) {
    //valueType:"string","nub","bool","object","Array"
    if(StorageType==true){
        if(valueType=="string"){
            return fn(sessionStorage.getItem(key));
        }else if(valueType=="nub"){
            return fn(parseFloat(sessionStorage.getItem(key)));
        }else if(valueType=="bool"){
            if(sessionStorage.getItem(key)==true){
                return fn(Boolean([]));
            }else {
                return fn(Boolean(0));
            }
        }else if(valueType=="object"){
            return fn(eval("("+sessionStorage.getItem(key)+")"));
        }else if(valueType=="Array"){
            var data=sessionStorage.getItem(key);
            var Array=data.split(",");
            return fn(Array);
        }
    }else {
        if(valueType=="string"){
            return fn(sessionStorage.getItem(key));
        }else if(valueType=="nub"){
            return fn(parseFloat(sessionStorage.getItem(key)));
        }else if(valueType=="bool"){
            if(sessionStorage.getItem(key)==true){
                return fn(Boolean([]));
            }else {
                return fn(Boolean(0));
            }
        }else if(valueType=="object"){
            return fn(eval("("+sessionStorage.getItem(key)+")"));
        }else if(valueType=="Array"){
            var data=sessionStorage.getItem(key);
            var Array=data.split(",");
            return fn(Array);
        }
    }
}