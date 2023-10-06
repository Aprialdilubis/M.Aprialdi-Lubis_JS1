//if else statement
function testNum(b) {
  let result;
  if (b > 3) {
    // jika b lebih dari 3 maka hasilnya positif jika minus maka tidak positif
    result = "benar";
  } else {
    result = "tidak benar";
  }
  return result;
}
//disini diisi dengan (4) dan hasil outputnya adalah benar
//jika diisi minus maka hasilnya tidak benar
document.getElementById("test").innerHTML = testNum(4);

//nested if
function testAge(age) {
  if (age < 20) {
    result = "usia kamu belum mencukupi <br> lamaran kamu ditolak karena persyaratan kamu belum memenuhi"; // jika usianya kurang dari 20
  } else {
    if (age >= 20 && age <= 24) {
      result = "usia kamu tercukupi <br> lamaran kamu diterima dan memenuhi persyaratan"; //jika usianya lebih dari 20 dan kurang dari 24
    } else {
      result = "usia kamu melebehi dari persyaratan <br> coba lagi ya!!"; //jika usianya lebih dari 24
    }
  }
  return result;
}
document.getElementById("test2").innerHTML = testAge(22); // hasilnya jika usianya 22 tahun

//switchcase
function yourHead(me) {
  switch (me) {
    case "buku":
      result = "saya punya buku"; //case pertama
      break;
    case "pensil":
      result = "saya punya pensil"; // case kedua
      break;
    default:
      result = "saya tidak punya buku dan pensil"; // case jika tidak terisi maka kembali ke default
      break;
  }
  return result;
}
document.getElementById("test3").innerHTML = yourHead("buku"); // hasilnya jika saya memilih buku

// for statement (loop)

const mapel = ["akuntansi", "bisnis", "ekonomi", "kewarganegaraan"];
let i = 2; //mengikuti mapel dari nilai 2 yaitu ekonomi
let len = mapel.length;
let matkul = "";
for (; i < len; ) {
  matkul += mapel[i + ""] + "<br>";
  i++; // i akan start dari 2 dan akhir dari mapel
}
document.getElementById("test4").innerHTML = matkul; //result dari statement

//while
const teman = ["laisa", "jaka", "dina", "klara"];
let text = "";
let a = 0; // a dimulai dari 0
while (a < teman.length) {
  text += teman[a] + "<br>";
  a++; //a akan bertambah hingga teman selesai
}
document.getElementById("test5").innerHTML = text; // hasil dari while

//do while
let clas = "";
let n = 0; //n dimulai dari 0 hingga meloop while sampai angka 5
do {
  clas += n + "<br>";
  n++;
} while (n < 10); //ini adalah yang diloop oleh n
document.getElementById("test6").innerHTML = clas;

//function
const myFunction = new Function("h", "i", "return h - i"); // function merubah objek h & i kemudian mereturn dalam bentuk yang telah ditentukan
document.getElementById("test7").innerHTML = myFunction(7, 6); // hasil dari 7-6
