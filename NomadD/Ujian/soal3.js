function cekkoin(koin){
    var coin=[25, 10, 5, 1]
    var jumlahcoin=0
    var result=0
    var sisa=0
    for(var i=0;i<coin.length;i++){
        if(i){
            var a=Math.floor(sisa/coin[i])
            if(a<1){
                continue
            }
            jumlahcoin+=sisa/coin[i]
            result=sisa.coin[i]
            if(result===0){
                break
            }
            sisa=result
        }else{
            jumlahcoin=Math.floor(koin/coin[i])
            if(jumlahcoin<1){
                continue
            }
            result=koin%coin[i]
            if(result===0){
                break
            }
            sisa=koin%coin[i]

        }
    }
    return Math.floor(jumlahcoin)
}
console.log(cekkoin(29))
console.log(cekcoin(44))
console.log(cekkoin(53))



//gagal 