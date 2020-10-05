// Soal no 1
const luasLingkaran = (r) => {
    let luas = Math.PI * r * r;
    return luas
}
console.log("luas lingkaran = " + luasLingkaran(3))

const kelilingLingkaran = (r) => {
    let keliling = 2 * Math.PI * r;
    return keliling
}
console.log("keliling lingkaran = " + kelilingLingkaran(3))

// Soal nomer 2

const tambahkan = {
    kata_1: 'saya',
    kata_2: 'adalah',
    kata_3: 'seorang',
    kata_4: 'frontend',
    kata_5: 'developer'
}

let kalimat = `${tambahkan.kata_1} ${tambahkan.kata_2} ${tambahkan.kata_3} ${tambahkan.kata_4} ${tambahkan.kata_5}`;
console.log(kalimat)

// soal nomer 3
const newFunction = function literal(firstName, lastName) {
    return {
        firstName,
        lastName,
        fullName: function () {
            console.log(firstName + " " + lastName)
        }
    }
}

newFunction("William", "Imoh").fullName()

// soal nomer 4
let newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {
    firstName,
    lastName,
    destination,
    occupation
} = newObject

console.log(firstName, lastName, destination, occupation)

// soal nomer 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

let combined = [...west, ...east]

console.log(combined)