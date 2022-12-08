const obj = {
    a:1,
    b:2,
    c: {
        d:5,
        e:{
            f:6
        }
    }
}

// WeakSet 用于存储递归过程中出现过的对象，防止递归循环的出现
const deepCopy1 = function(obj,set = new WeakSet()){
     if (obj instanceof Date) {
        return new Date(obj)
     }

     if (obj instanceof RegExp) {
        return new RegExp(obj)
     }

     if (typeof obj !== 'object') {
        return obj
     }
    
     if (set.has(obj)) {
        return obj
     } else {
        set.add(obj)
     }
     
     const newObj = new obj.constructor()
     for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopy1(obj[key],set)
        }
     }  

     return newObj
}

obj.c.e = obj.c
const copyObj = deepCopy1(obj)

console.log(copyObj);