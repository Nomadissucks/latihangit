// var a=485
// var tahun=Math.floor(a/360)
// a=a%360
// var bulan=Math.floor(a/30)
// a=a%30
// console.log(tahun+' tahun, ' + bulan + ' bulan, '+ a+ ' hari. ')

// var a=60/60
// var b=40/60
// var harsil = a+b
// var menit=120/harsil
// console.log(menit)

// var a=120
// var b=60+40
// var jam=a/b
// var menit= jam*60
// console.log(menit)
var a=new Date()


var tanggal= a.getDate()
var tahun = a.getFullYear()
var bulan= a.getMonth() + 1

console.log('kemarin tanggal '+(tanggal-1) + '-' +bulan + '-' + tahun)
console.log('hari ini tanggal '+tanggal + '-' +bulan + '-' + tahun)
console.log('besok tanggal '+(tanggal+1) + '-' +bulan + '-' + tahun)