// Soal 1
function halo() {
    return ("Halo Sanbers!")
}

console.log(halo())

// Soal 2
function kalikan(num1, num2) {
    return num1 * num2
}

var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log(hasilKali)

// Soal 3
function introduce(name, age, addres, hobby) {


    return "Nama saya " + name + "," + " umur saya " + age + " tahun" + "," + " alamat saya di " + addres + "," + " dan saya punya hobby yaitu " + hobby + "!"
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)

// Soal 4
var arrayDaftarPeserta = {
    nama: "Asep",
    jenis_kelamin: "laki - laki",
    hobi: "baca buku",
    tahun_lahir: "1992"
}

console.log(arrayDaftarPeserta.nama);
console.log(arrayDaftarPeserta.jenis_kelamin);

// Soal 5
var buah = [{
        nama: " strawbery ",
        warna: " merah ",
        ada_bijinya: " tidak ",
        harga: 9000
    },
    {
        nama: " jeruk ",
        warna: " oranye ",
        ada_bijinya: " ada ",
        harga: 8000
    },
    {
        nama: " Semangka ",
        warna: " Hijau & Merah",
        ada_bijinya: " ada ",
        harga: 1000
    },
    {
        nama: " Pisang ",
        warna: " Kuning ",
        ada_bijinya: " tidak ",
        harga: 500
    }
]

var buahSegar = buah.filter(function (panen) {
    return panen.harga > 8000;
});

console.log(buahSegar)

// Soal 6
var dataFilm = []

function movie(nama, durasi, genre, tahun) {
    dataFilm.push({
        nama: "kumbang",
        durasi: " 1 jam",
        genre: "animal",
        tahun: 2008
    })
}
movie("nama", "durasi", "genre", "tahun")

console.log(dataFilm)