const q = [1, 2, 3, 4,-5, 6, 7, 8, 9, -10, 11, 12, 13, 14]
const w = []
q.forEach(a=>{
    if(a<0){
    a = 3
    
    w.push(a)
  }
  }
  )
  console.log(w)
  console.log(q)
  ///15. Дан массив, содержащий 14 элементов. Все отрицательные элементы заменить на 3. Вывести исходный и полученный массив. 