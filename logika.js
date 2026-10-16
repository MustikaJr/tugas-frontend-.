// Tugas 1A — Data & Logika
// ATURAN: untuk TIAP fungsi, tulis LANGKAH 1–3 sebagai komentar DULU, baru kode.
// Pakai for...of + if. JANGAN pakai .map / .filter / .find / .reduce dulu (lihat soal.md).

console.table(daftarCafe);

// ─────────────────────────────────────────────
// FUNGSI 1 — hitungTersedia(daftar)
// Berapa banyak item yang properti true/false-nya bernilai true?
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI : Masukan: array daftar kafe. Keluaran: angka (jumlah kafe yang berstatus buka = true).
// LANGKAH 2 — CONTOH : (daftarCafe) -> 4. Array kosong [] -> 0.
// LANGKAH 3 — LANGKAH :
// - Jika daftar kosong atau tidak ada, kembalikan angka 0.
// - Siapkan variabel hitung = 0.
// - Untuk setiap item dalam daftar:
//   - Jika item.buka === true, tambah hitung + 1.
// - Kembalikan nilai hitung.
// LANGKAH 4 — TERJEMAHKAN

function hitungTersedia(daftar) {
  // Pengecekan kasus tepi jika daftar kosong agar tidak error
  if (!daftar || daftar.length === 0) {
    return 0;
  }

  let hitung = 0;
  for (const item of daftar) {
    // Memeriksa apakah kafe sedang berstatus buka
    if (item.buka === true) {
      hitung++;
    }
  }
  return hitung;
}

// ─────────────────────────────────────────────
// FUNGSI 2 — cariBerdasarkanId(daftar, id)
// Kembalikan item yang id-nya cocok. Kalau tidak ada, kembalikan null.
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI : Masukan: array daftar kafe dan angka ID target. Keluaran: objek kafe atau null.
// LANGKAH 2 — CONTOH : (daftarCafe, 1) -> Objek Kopkit. (daftarCafe, 99) -> null.
// LANGKAH 3 — LANGKAH :
// - Untuk setiap item dalam daftar:
//   - Jika item.id === id, kembalikan item tersebut.
// - Jika seluruh item selesai diperiksa dan tidak ketemu, kembalikan null.
// LANGKAH 4 — TERJEMAHKAN

function cariBerdasarkanId(daftar, id) {
  for (const item of daftar) {
    // Membandingkan ID tiap item dengan ID yang dicari
    if (item.id === id) {
      return item; // Langsung mengembalikan item jika ID cocok
    }
  }
  // Mengembalikan null jika ID tidak ditemukan dalam daftar
  return null;
}

// ─────────────────────────────────────────────
// FUNGSI 3 — saringKategori(daftar, kategori)
// Kembalikan ARRAY BARU berisi item dengan kategori itu. Kalau tidak ada, array kosong [].
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI : Masukan: array daftar kafe dan string kategori. Keluaran: array baru berisi kafe yang cocok.
// LANGKAH 2 — CONTOH : (daftarCafe, "WFC") -> Array 2 kafe. (daftarCafe, "Lesehan") -> [].
// LANGKAH 3 — LANGKAH :
// - Buat array kosong bernama hasil.
// - Untuk setiap item dalam daftar:
//   - Jika item.kategori === kategori, masukkan item ke array hasil.
// - Kembalikan array hasil.
// LANGKAH 4 — TERJEMAHKAN

function saringKategori(daftar, kategori) {
  const hasil = [];
  for (const item of daftar) {
    // Memeriksa kesesuaian kategori kafe dengan parameter
    if (item.kategori === kategori) {
      hasil.push(item);
    }
  }
  return hasil; // Mengembalikan array hasil (berisi item atau kosong)
}

// ─────────────────────────────────────────────
// FUNGSI 4 — rataRataTersedia(daftar)
// Rata-rata properti angka, HANYA dari item yang bernilai true.
// Kalau tidak ada satu pun yang true, kembalikan null.
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI : Masukan: array daftar kafe. Keluaran: angka rata-rata hargaMin kafe yang buka, atau null.
// LANGKAH 2 — CONTOH : (daftarCafe) -> 19500. Array kosong [] -> null.
// LANGKAH 3 — LANGKAH :
// - Siapkan variabel totalHarga = 0 dan jumlahBuka = 0.
// - Untuk setiap item dalam daftar:
//   - Jika item.buka === true, tambahkan item.hargaMin ke totalHarga dan tambah jumlahBuka + 1.
// - Jika jumlahBuka === 0, kembalikan null (mencegah pembagian dengan nol).
// - Kembalikan totalHarga / jumlahBuka.
// LANGKAH 4 — TERJEMAHKAN

function rataRataTersedia(daftar) {
  let totalHarga = 0;
  let jumlahBuka = 0;

  for (const item of daftar) {
    // Memeriksa hanya kafe yang berstatus buka
    if (item.buka === true) {
      totalHarga += item.hargaMin;
      jumlahBuka++;
    }
  }

  // Mencegah error pembagian dengan nol jika tidak ada kafe yang buka
  if (jumlahBuka === 0) {
    return null;
  }

  return totalHarga / jumlahBuka;
}

// ─────────────────────────────────────────────
// UJI — minimal 2 panggilan per fungsi: satu kasus normal, satu kasus tepi
// ─────────────────────────────────────────────

console.log("=== UJI FUNGSI 1: hitungTersedia ===");
console.log("F1 normal :", hitungTersedia(daftarCafe));
console.log("F1 kosong :", hitungTersedia([])); 

console.log("\n=== UJI FUNGSI 2: cariBerdasarkanId ===");
console.log("F2 normal :", cariBerdasarkanId(daftarCafe, 1));
console.log("F2 tak ada:", cariBerdasarkanId(daftarCafe, 99)); 

console.log("\n=== UJI FUNGSI 3: saringKategori ===");
console.log("F3 normal :", saringKategori(daftarCafe, "WFC"));
console.log("F3 tak ada:", saringKategori(daftarCafe, "Lesehan")); 

console.log("\n=== UJI FUNGSI 4: rataRataTersedia ===");
console.log("F4 normal :", rataRataTersedia(daftarCafe));
console.log("F4 kosong :", rataRataTersedia([])); 