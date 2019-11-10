// var x=2
// var y=3
// var v='tambah'
// function operator(x,y,z){
//     if(x+y>=1){
//         return x
//     }
// }


// console.log(operator)
// var hasiloperator=operator(2,3,'kurang')
// console.log(hasiloperator)
// function operator(x,y,operator){
//     var hasil
//     if (operator=="tambah"){
//         hasil=x+y
//     }else if(operator=='kurang'){
//         hasil=x-y
//     }else if(operator=='Kali'){
//         hasil=x*y
//     }else{
//         hasil=x/y

//     }
//     return hasil
// }


// var gajipekerja=posisi(1,7,'manager')
// console.log(gajipekerja)
// var masuk=''
// var keluar=''
// function posisi(masuk,keluar,posisi){
//     var gaji
//     if(posisi=='Staff'){
//         gaji=(keluar-masuk)*2000
//     }else if(posisi=='ceo'){
//         gaji=(keluar-masuk)*1000
//     }else if(posisi=='manager'){
//         gaji=(keluar-masuk)*700
//     }else{
//         gaji=0
//     }
//     return gaji
//     }
// function angkaurut(angka){

//     var angka2=''
//     for(i=0;i<angka;i++){
//         if((i+1)%3==0&&(i)%5==0){
//             angka2+='PurwaDhika '
//         }else if((i+1)%3==0){
//             angka2+='Purwa '
//         }else if((i+1)%5==0){
//             angka2+='Dhika '
//         }else{
//             angka2+=(i+1)+' '
//         }
//     }
//     return angka2
// }
// console.log(angkaurut(100))
// function permen(hari){

//     var output=0
//     for(i=1;i<=hari;i++){
//         if(i%10==0){
//             output+=2
//         }else if(i%2==0){
//             output++
//         }
//     }return output
// }console.log(permen(100))

function output(angka){
    var output=''
    for(i=1;i<=20;i++){

        output+=angka+'X'+i+'='+(angka*i)
        output+='\n'
    }
    return output
}  
console.log(output(9))