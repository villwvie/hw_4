var arr = [null,  undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, 'uioo']
const obj=[], numb=[], str=[], undef=[], newArray=[]
for (let i of arr){
  if(typeof i === 'object') {
    obj.push(i)
  }else if(typeof i=== 'number') {
    numb.push(i)
  }else if(typeof i === 'string'){
    str.push(i)
  }else if(typeof i === 'undefined'){
    undef.push(i)
  }
}
newArray.push(obj,numb,str,undef)

const res = newArray.sort((a, b) => b.length - a.length)
console.log(res);


// switch (typeof i){
//   case 'object':
//     obj.push(i)
//     break
//   case 'number':
//     obj.push(i)
//     break
//   case 'string':
//     obj.push(i)
//     break
//   case 'undefined':
//     obj.push(i)
//     break
// }




