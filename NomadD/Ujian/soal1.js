function lelang(waktu){
 var output=10000
 for(i=1;i<=waktu;i++){
     if(i%4==0){
         output+=Math.ceil((output*(10/100)))
     }else{
         output+=Math.ceil((output*(20/100)))
     }
 }
 return output>30000000?'Barang sudah terjual' :output
}
console.log(lelang(2))
console.log(lelang(50))
console.log(lelang(49))

//gagal 