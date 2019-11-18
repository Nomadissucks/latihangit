function cekkoin(koin){
    var pecahan=[25,10,5,1]
    for(i=0;i<pecahan.length;i++){
        koin==koin.sum(pecahan[i])
    }
    return koin
    

}
console.log(cekkoin(12))