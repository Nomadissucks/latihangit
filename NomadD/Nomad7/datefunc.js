// // console.log(tanggal)
// function yesterday(a, b){
//     var tanggal = new Date()
//     var hari=['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
//     var bulan=['Januari', 'February', 'March', 'April', 'Mei', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//     var c=['2019']
//     var hari = hari[a] 
//     var bulan = bulan[b]  
//     var output = hari + ' ' + bulan
//     return output
        // }
    
// console.log(yesterday(, ))


function formatDate(date) {
    var namabulan = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ]
    var namahari = ['Sunday','Monday', 'Tuesday', 'Weednesday', 'Thursday', 'Fryday', 'Sabturday']
    
    var day = date.getDate()
    var month = date.getMonth()
    var year = date.getFullYear()
    var hari = date.getDay()
  
    return namahari[hari] + ',' + day + ' ' + namabulan[month] + ' ' + year
  }
  
//   console.log(formatDate(new Date()))


const cloneincl=function(a='', b){
    if(b.length==1){
        for(i=0;i<a.length;i++){
            if(b==a[i]){
                return true
            }
        }
        return false
    }else{
        for(i=0;i<a.length;i++){
            if(b==a.substr(i,b.length)){
                return true
            }
        }
        return false
    }
}
// console.log(cloneincl('hello','el'))

function breakDown(a){
    var number = a.toString().split('')
    return number.map(function(digit,a){
        return digit*Math.pow(10, number.length-a-1)
    } )
}
console.log(breakDown(1234))