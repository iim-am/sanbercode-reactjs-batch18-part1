// soal nomer 1
var judul_1 = 'LOOPING PERTAMA';
var a = 0;
var atribut1 = "I love coding";


console.log(judul_1)
while (a < 20) {
    a += 2;
    console.log(a + " - " + atribut1);
}

var judul_2 = 'LOOPING KEDUA';
var atribut2 = "I will become a frontend"
var b = 22;

console.log(judul_2)
while (b > 2) {
    b -= 2;
    console.log(b + " - " + atribut2);
}


// soal nomer 2
for (var gue = 1; gue <= 20; gue++) {
    if (gue % 2 == 0) {
        console.log(gue + " - " + 'Berkualitas');
    } else if (gue % 3 == 0 && gue % 2 == 1) {
        console.log(gue + " - " + 'I Love Coding');
    } else {
        console.log(gue + " - " + 'santai')
    }
}

// soal nomer 3
for (var i = 1; i <= 7; i++) {
    console.log('#'.repeat(i))
}

// soal nomer 4
var kalimat = "saya sangat senang belajar javascript"
var baru = kalimat.split(" ")
console.log(baru)

// Soal Nomer 5
// Soal nomer 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
for (i = 0; i < daftarBuah.length; i++) {
    var urut = daftarBuah.sort();
    console.log(urut[i]);
}