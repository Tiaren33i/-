let s =`Приятно, граждане, наблюдать, как сделанные на базе интернет-аналитики выводы будут объявлены нарушающими общечеловеческие нормы этики и морали. Как принято считать, сделанные на базе интернет-аналитики выводы объединены в целые кластеры себе подобных.`

function as(str){
    const s = str.match(/[,i.]/gi)
    return s ? s.length : 0
}
console.log(as(s))
//31. Написать метод, который подсчитывает количество знаков препинания в переданной строке. С его помощью обработать пять разных строк и отобразить результаты на экране. 