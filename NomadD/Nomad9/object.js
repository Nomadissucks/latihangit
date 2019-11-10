var hurufBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var hurufKecil = 'abcdefghijklmnopqrstuvwxyz'

function font(a) {
    var output = ''
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < hurufKecil.length; j++) {
            if (a[i] === hurufBesar[j]) {
                output += hurufKecil[j]
            } else if (a[i] === hurufKecil[j]) {
                output += hurufBesar[j]
            }
        }
    }
    return output
}
// console.log(font('akuAKU'))

//function reverse

function reverse(a){
    var output=''
    for(i = a.length;i>0;i--){
            output+=a[i-1]
        
    }return output
}
console.log(reverse('Negro'))