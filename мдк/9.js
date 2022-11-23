const q = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
const w = []
const e =[]
for(i = 0; i<q.length;i++){
    if(i%2==0&&i<3){
    e.push(i)
    }else if(i%2!==0&&i>1){   
    w.push(i)
}                  
}
let s = w.reduce(function(g,f){
    return g+f
})
let d =  e.reduce(function(g,f){
    return g+f
})
let f = s+d
console.log(f)
//9. Дан массив Z целых чисел, содержащий 35 элементов. Вычислить и вывести R = S + P, где S – сумма четных элементов, меньших 3, P – произведение нечетных элементов, больших 1. 





