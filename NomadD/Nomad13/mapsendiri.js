var mapalakita=(arr,fn)=>{
    var output=[]
    for(i=0;i<arr.length;i++){
       if(fn(arr[i])){
           output.push(arr[i])
       }
    }
    return output
}
var arr=[1,2,3,4]
console.log(mapalakita(arr, (val)=>val>3))

const berapatahun=(awal, persen, pendatang, target)=>{
    var penduduk=awal
    var tahun=0
    do{
        penduduk+=pendatang+(penduduk*(persen/100))
        tahun++
    }while(penduduk<target)
    return tahun+ ' Tahun '
}
console.log(berapatahun(1000,5,50,1200))