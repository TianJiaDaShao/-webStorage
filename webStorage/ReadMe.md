#webStorage操作

##功能
简化webStorage操作，通过三个函数的调用，实现对webStorage的增删改查，并且可以使用一个函数对localStorage和sessionStorage进行操作。

再取出webStorage的过程中可以自动转化webStorage为您想要的类型。

##如何使用
1.添加组件至您的项目

2.直接调用函数

##参数说明
setStorage(StorageType, key,value)

    StorageType:true is local,false is session

    key is StorageKey

    value is StorageValue

removeStorage(key)

    key is localStorage.removeItem(key)

    !key is localStorage.clear()

getStorage(StorageType, key,valueType,fn)

    StorageType:true is local,false is session

    key is localStorage.removeItem(key)

    !key is localStorage.clear()

    valueType:"string","nub","bool","object","Array"

    fn:backfn