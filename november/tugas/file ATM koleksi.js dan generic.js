koleksi.js
// Fungsi generik menggunakan pola
function getElementAtIndex(array, index) {
    if (index >= 0 && index < array.length) {
        return array[index];
    }
    throw new Error("Indeks di luar jangkauan");
}

let angka = [100, 200, 300];
let kata = ["satu", "dua", "tiga"];

console.log(getElementAtIndex(angka, 1)); // Output: 20
console.log(getElementAtIndex(kata, 0)); // Output: "satu"


generic.js
// Menggunakan List (Array)
let listMahasiswa = ["Nanda", "Riqi", "Eko"];
listMahasiswa.push("Abel"); // Menambahkan elemen baru
console.log(listMahasiswa); // Output: ["Budi", "Siti", "Agus", "Ani"]

// Menggunakan Set
let setMahasiswa = new Set(["Nanda", "Riqi", "Ekp"]);
setMahasiswa.add("Abel");
setMahasiswa.add("Nanda"); // Tidak akan menambahkan karena Budi sudah ada
console.log(setMahasiswa); // Output: Set(4) {"Budi", "Siti", "Agus", "Ani"}

// Menggunakan Map
let mapNilai = new Map();
mapNilai.set("Nanda", 90);
mapNilai.set("Riqi", 85);
console.log(mapNilai.get("Nanda")); // Output: 90
