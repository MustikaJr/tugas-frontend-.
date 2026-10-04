// TODO: ganti isi array ini dengan data TEMA KALIAN SENDIRI.
// Aturan (lihat soal.md):
//   - minimal 6 item
//   - tiap item WAJIB punya: id (angka, tidak kembar), nama (teks), kategori (teks)
//   - plus SATU properti angka (mis. harga, halaman, rating)
//   - plus SATU properti true/false (mis. tersedia, buka, dipinjam)
//   - minimal 2 kategori berbeda, dan minimal 1 item yang bernilai false

// data.js - Study Cafe Directory in Padang

const daftarCafe = [
  {
    id: 1,
    nama: "Kopkit (Kopi Kita)",
    kategori: "Nugas",
    hargaMin: 18000,
    buka: true,
    lokasi: "Jl. Rimbo Kaluang, Padang Barat"
  },
  {
    id: 2,
    nama: "Dari Sini Coffee",
    kategori: "WFC",
    hargaMin: 20000,
    buka: true,
    lokasi: "Jl. Dr. Moh. Hatta, Pasar Baru, Pauh (Dekat UNAND)"
  },
  {
    id: 3,
    nama: "Menza Coffee",
    kategori: "Diskusi",
    hargaMin: 18000,
    buka: true,
    lokasi: "Jl. Raden Saleh, Padang Barat"
  },
  {
    id: 4,
    nama: "Tjuna Coffee",
    kategori: "Nugas",
    hargaMin: 15000,
    buka: false, // Diset false untuk pengujian kafe tutup
    lokasi: "Jl. KIS Mangunsarkoro, Padang Timur"
  },
  {
    id: 5,
    nama: "Duds Coffee",
    kategori: "WFC",
    hargaMin: 22000,
    buka: true,
    lokasi: "Jl. Pasar Baru, Pauh (Dekat UNAND)"
  },
  {
    id: 6,
    nama: "Ago Coffee",
    kategori: "Diskusi",
    hargaMin: 18000,
    buka: false, // Diset false untuk pengujian kafe tutup
    lokasi: "Jl. Dr. Moh. Hatta, Pauh (Dekat UNAND)"
  }
];
