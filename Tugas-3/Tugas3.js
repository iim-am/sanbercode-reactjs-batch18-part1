// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var besar_pertama = kataKedua.charAt(0);
var sebagian = besar_pertama.toUpperCase();
var gabung_tulisan = sebagian + kataKedua.substr(1);

var upper = kataKeempat.toUpperCase();

var gabung_1 = kataPertama.concat(" ", gabung_tulisan);
var gabung_2 = kataKetiga.concat(" ", upper);

var hasil = gabung_1.concat(" ", gabung_2);

console.log(hasil)

//Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var a = Number(kataPertama);
var b = Number(kataKedua);
var c = Number(kataKetiga);
var d = Number(kataKeempat);

hasil = a + b + c + d;
console.log(hasil)

//Soal 3
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31)

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);

//Soal 4
var nilai = 56;

if (nilai >= 80) {
    console.log("indeksnya A")
} else if (nilai >= 70 && nilai < 80) {
    console.log("indeksnya B")
} else if (nilai >= 60 && nilai < 70) {
    console.log("indeksnya c")
} else if (nilai >= 50 && nilai < 60) {
    console.log("indeksnya D")
} else if (nilai < 50) {
    console.log(" indeksnya E")
}

//Soal 5
var tanggal = "1";
var bulan = "Mei";
var tahun = "1992";

var a = tanggal.concat(" ", bulan);
var Mei = a.concat(" ", tahun);

var bln = 5;
switch (bln) {
    case 1: {
        console.log("Januari");
        break;
    }

    case 2: {
        console.log("Februari");
        break;
    }
    case 3: {
        console.log("Maret");
        break;
    }
    case 4: {
        console.log("April");
        break;
    }

    case 5: {
        console.log(Mei);
        break;
    }
    case 6: {
        console.log("Juni");
        break;
    }
    case 7: {
        console.log("Juli");
        break;
    }
    case 8: {
        console.log("Agustus");
        break;
    }
    case 9: {
        console.log("September");
        break;
    }
    case 10: {
        console.log("Oktober");
        break;
    }
    case 11: {
        console.log("November");
        break;
    }
    case 12: {
        console.log("Desember");
        break
    }
}