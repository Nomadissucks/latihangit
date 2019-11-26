function noSpace(x) {
  var x = x.replace(/\s/g, '');
  return x;
}
//   console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
//   console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))
//   console.log(noSpace('8aaaaa dddd r     '))

function removeUrlAnchor(url) {
  var remove = url.split('#')
  var removed = remove[0]
  return removed
}
//   console.log(removeUrlAnchor('www.codewars.com#about'))
function solution(str) {
  var str = str
  var pisah = str.split('')
  if (str % 2 == 0) {
    return pisah
  }
}

// console.log(gabung)

// phone number

function createPhoneNumber(arr) {
  let str = arr.join('');
  return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`
}
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

//from the big

function minMax(arr){
  var output=[]
  sNumber=arr.toString()
  for(i=0;i<sNumber.length;i++){
    output.push(sNumber[i])
  }
  output.sort((a,b)=>b-a)
  // console.log(output)
  return output.join('')
}
// console.log(minMax(42156))

// reverse string


function solution(str){
  return(String(str).split("").reverse().join(""))
}

// console.log(solution('BEBEK'))

//gsp vs connor mcgregor


var quote = function(fighter) {
  if (fighter === 'george saint pierre') {
    return  "I am not impressed by your performance.";
  } else if (fighter ===  'Conor McGregor') {
  return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
  } else if (fighter === 'George Saint Pierre') {
  return  "I am not impressed by your performance.";
  } else if (fighter ===  'conor mcgregor'){
 return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
  } else if (fighter === 'GEORGE SAINT PIERRE') {
  return  "I am not impressed by your performance.";
  } else if (fighter ===  'CONOR MCGREGOR'){
 return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
  } 
};
// console.log(quote('conor mcgregor'))


// counting sheep

var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}
console.log(countSheep(4))

//end of counting sheep

//growth of population

function nbYear(p0, percent, aug, p) {
  var penduduk=p0
    var tahun=0
    do{
        penduduk+=pendatang+(penduduk*(persen/100))
        tahun++
    }while(penduduk<target)
    return tahun+ ' Tahun '
}

// reverse

function reverser(sentence) {
	return(String(sentence).split("").reverse().join(""))
}
console.log(reverser('Hi mom'))

//parseInt : membuat string menjadi integer
//parseFloat: menentukan apakah karakter pertama dalam string yang ditentukan adalah angka. Jika ya, mem-parsing string hingga mencapai akhir nomor,
//      dan mengembalikan nomor sebagai nomor, bukan sebagai string.hanya no pertama yg dikembalikan,jika karakter tidak tidak bisa dikonvesrsikan sebagai angka maka parsefloat mengembalikan NaN
//      Jika argumen berlalu adalah integer, nilai tidak akan bulat contoh 1.6=1
//toFixed: berapa angka di belakang koma yang kita inginkan 
//toString: mengubah tipe data angka menjadi string
//math.random: menghasilkan angka secara acak
//math.min: melihat nagka terkecil 
//math.max: melihat angka terbesar
//math.round(): cara membulatkan angka ke angka terdekatnya 
//math.ceil():  cara membulatkan angka menjadi ygb lebih besar ex:23,3=(24)
// math.floor(): membulatkan angka ke bawah ex: 23,3==(23)
//toUpperCase: mengubah semua huruf menjadi huruf besar
//toLowerCase: mengubah semua huruf menjadi huruf kecil
//replace: mengubah atau menggantikan. ex:('a','b') (mengganti a dengan b)
//subString: mengambil bagian tertentu dimana ada 2 parameter atau 2 nilai yg harus kita masukan di antara (),
//      yg pertama mulai dari mana & ke 2 berakhir dari mana ,dua2nya harus tipe angka dan dimulai dari angka 0. 
//      ex: var nama: hilman \n var hasil=nama.subString(0,5)=Hilma
//substr: hampir sama namun yg pertama mulai dari mana dan yg ke-2 panjangnya berapa yang ingin kita ambil
//return: ketika kita memanggil satu fungsi kita mau ngebalikin satu nilai 
// != : artinya tidak sama dengan