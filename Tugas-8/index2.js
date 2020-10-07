var readBooksPromise = require('./promise.js')

var books = [{
        name: 'LOTR',
        timeSpent: 3000
    },
    {
        name: 'Fidas',
        timeSpent: 2000
    },
    {
        name: 'Kalkulus',
        timeSpent: 4000
    }
]

//soal nomor 2


let waktu = 10000;
let no_buku = 0;

function execute(waktu) {
    readBooksPromise(waktu, books[no_buku])
        .then(
            function (sisa) {
                if (sisa != 1000) {
                    no_buku++;
                    execute(sisa);
                }
            }
        )
}
execute(waktu)