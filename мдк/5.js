const q = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
let w = []
q.forEach(z=>{
    if(z%5==0){ 
        w.push(z)
}
}
)
let s = w.reduce((function(g,f){
    return g+f
}))
console.log(s,'\n',w)

//5. Дан массив A целых чисел, содержащий 30 элементов. Вычислить и вывести сумму тех элементов, которые кратны 5.