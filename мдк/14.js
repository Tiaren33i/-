const q = [1, 2, 3, 4,-5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15]
const w = []
q.forEach(a=>{
    if(a>0){
    a = Math.pow(a,3)
w.push(a)
    }else{
    a = a*2
w.push(a)
}
}
)
console.log(q)
console.log(w)
///14. Дан массив, содержащий 15 элементов. Все положительные элементы возвести в квадрат, а отрицательные умножить на 2. Вывести исходный и полученный массив