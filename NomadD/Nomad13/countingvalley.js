function checkpass(str){
    var hilangSpasi=str.split(' ','')
    if(hilangSpasi.length>5){
        var arrstring=hilangSpasi.split('')
        var angka=false
        var huruf=false
        for(var i=0;i<arrstring.length;i++){
            if(arrstring[i]>=0){
                angka=true
            }else{
                huruf=true
            }
        }
        if(angka==true&&huruf==true){
            return 'Password Benar'
        }else if(angka==false&&huruf==true){
            return 'Harus Ada Angkanya'
        }else{
            return 'Harus ada Hurufnya'
        }
    }else{
        return 'harus ada 6 karakter'
    }
}

function timeout(fn, time){
    for(i=0;i<=time*1000000;i++){
        
    }
    fn()
}
timeout(()=> console.log('jc11'), 2000)