//start ganjilgenap

function cek(splitPlat,tanggal){
    var splitPlat=splitPlat.split(' ',3)[1]%2
    var tanggal= parseInt(tanggal)%2
    output=''
    if(splitPlat===tanggal){
        output='Mobil Boleh Lewat'
    }else{
        output='Mobil Tidak Bisa Lewat'
    }
    return output
}
// console.log(cek('B 3 BBJ',1))
 
// end of ganjil genap

//start of diskon

function diskon(hargaasli, persen){
    var hargaasli=parseInt(hargaasli)
    var persen = parseInt(persen)/100
    output=hargaasli-(hargaasli*persen)
    return output
}
// console.log(diskon(45000, 5))

//end of diskon

//start of median


function middle(kata){
    let median
    if(kata.length%2==0){
        const med1=kata[(kata.length/2)-1]
        const med2=kata[(kata.length/2)]
        median=(med1+med2)
        // console.log(med1)//j
        // console.log(med2)//i
    }else{
        median=kata[Math.floor(kata.length/2)]
    }
    return median
}
    // console.log(middle('anjing'))//ji
    // console.log(middle('irvan'))//v

//end of median

//start of domain
var domain="https://www.youtube.com/"
var pisah=domain.split('.')
// console.log(pisah) // [ 'https://www', 'youtube', 'com/' ]

//end of testing

function getDomain(domain){
    var domain=domain.split('.')[1]
    return domain
}
console.log(getDomain('https://www.youtube.com/')) //youtube
console.log(getDomain('https://www.twitter.com/')) //twitter
console.log(getDomain("http://www.zombie-bites.com")) //zombie-bites

//end of domain