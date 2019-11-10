var onNamechange=()=>{
    if(document.getElementById('nama').value){
        document.getElementsByTagName('h5')[0].innerHTML=`Nama Sudah Diisi`

    }else{
        document.getElementsByTagName('h5')[0].innerHTML=`Harap Diisi`
    }
}
const onBtnResclick=()=>{
    var nama=document.getElementById('nama').value
    var usia=document.getElementById('usia').value
}