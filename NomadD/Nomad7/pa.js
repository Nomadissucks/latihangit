// function litres(jam){
//     return Math.floor(0.5*jam)
// }
// var hasil = litres(6.7)
// console.log(hasil)


// function pangkat(x,y){
//     if (y == 1){
//         return x
//     }
//     else{
//         return x=x*pangkat(x,y-1)
//     }
// }
// console.log (pangkat(7,2))
// function faktorial(a){
//     for (i=a-1;i>0;i--){
//         a*=i
//     }
//     return a
// }
// console.log(faktorial(5))

// function sum(a){
//     var output=0
//     for(i=0;i<a.length;i++){
//         output+=a[i]
        
//     }
//      return output/a.length
// }
// console.log(sum([1,2,3,4,5]))

function sumstring(a){
    var newarr=a.split('')
    var output=0
    for(i=0;i<a.length;i++){
output+=parseInt(a[i])
    }
    return output
}
// console.log(sumstring('123456'))

var pr3 = ['Anlene' , 'Promina' , 'Hilo', 'Zee', 'Lmen']
function cek(dancow){
    for(let i=0;i<pr3.length;i++){
        if(pr3[i]==dancow){
            return true
        }
    }
    return false
}
// console.log(cek('Promina'))


function join(a,b){
    var output=''
    for(i=0;i<a.length;i++){
        if(i<a.length-1){
            output+=a[i]+b
        }else{
            output+=a[i]
        }
    }
    return output
}
    // console.log(join(['i','r','v','a','n'],'p'))

    var nama = ['Aldi', "riyman", 'zeintsu']
    function cek(a){
        for(let i=0;i<nama.length;i++){
            if(nama[i]==a){
                return true
            }
        }return false
    }
    console.log(cek('Aldi'))