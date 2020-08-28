// tugas
// buat 6 variable x1 hingga x6
// isi variable x1 = 2, x2 = 4 , x3 = 6
// isi variable x4 = 4, x5 = 8 , x6 = 12
let x1 = 2;
let x2 = 4;
let x3 = 6;
let x4 = 4;
let x5 = 8;
let x6 = 12;
// tugas 1 => bandingkan variable x1 dengan x4
console.log(x1 > x4);
// tugas 2 => jika tugas 1 bernilai false, buat agar saat perbandingan x1 bernilai true saat dibandingkan dengan x4 [boleh menggunakan aritmatika]
if (x1 < x4) {
    console.log(`perbandingan ${x1} < ${x2} bernilai ${x1<x2}`);
} 
// tugas 3 => buat conditional statement dengan membandingkan x2 dengan x4, dan tampilkan pesan "perbandingan antara x2 yang bernilai [nilai dari x2] dengan x4 yang bernilai [nilai dari x4] adalah [perbandingan x2 dengan x4]" menggunakan template literal (ada di challange ketiga)
if (x2 == x4) {
    console.log(`perbandingan antara x2 yang bernilai ${x2} dengan x4 yang bernilai ${x4} adalah ${x2 == x4}`);
}
// tugas 4 => buat conditional statement yang membandingkan apakah x1 hingga x6 lebih besar daripada 10? dan tampilkan pesan "ya, [nilai dari variable tersebut] lebih besar dari 10" (conditional statement if , dan else if saja [if hanya boleh satu])
if (x1 > 10) {
    console.log(`ya, ${x1} lebih besar dari 10`);
} else if (x2 > 10) {
    console.log(`ya, ${x2} lebih besar dari 10`);
} else if (x3 > 10) {
    console.log(`ya, ${x3} lebih besar dari 10`);
} else if (x4 > 10) {
    console.log(`ya, ${x4} lebih besar dari 10`);
} else if (x5 > 10) {
    console.log(`ya, ${x5} lebih besar dari 10`);
} else if (x6 > 10) {
    console.log(`ya, ${x6} lebih besar dari 10`);
}
// tugas 5 => buat conditional statement yang membandingkan apakah x1 ~ x6 lebih kecil dari 1? dan tampilkan pesan "ya, [nilai dari variable tersebut] lebih kecil dari 1" tambahkan kondisi else dan tampilkan pesan "tidak ada variable yang memiliki nilai kecil dari 1" 
if (x1 < 1) {
    console.log(`ya, ${x1} lebih kecil dari 1`);
} else if (x2 < 1) {
    console.log(`ya, ${x2} lebih kecil dari 1`);
} else if (x3 < 1) {
    console.log(`ya, ${x3} lebih kecil dari 1`);
} else if (x4 < 1) {
    console.log(`ya, ${x4} lebih kecil dari 1`);
} else if (x5 < 1) {
    console.log(`ya, ${x5} lebih kecil dari 1`);
} else if (x6 < 1) {
    console.log(`ya, ${x6} lebih kecil dari 1`);
} else {
    console.log("tidak ada variable yang memiliki nilai kecil dari 1");
}