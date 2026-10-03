# Tugas 1A — Data & Logika

**Materi:** Pertemuan 1 · **Dikumpulkan:** sebelum Pertemuan 2 dimulai, lewat Pull Request
**Branch:** `tugas1a-nama-anda`

> Ini tahap pertama dari **satu produk** yang kalian bangun sampai akhir kelas. Data yang kalian tulis di sini akan ditampilkan sebagai halaman web di Pertemuan 2, lalu dipakai terus sampai akhir. Pilih tema yang kalian suka.

---

## Yang Dikerjakan

### Bagian 1 — `data.js`: data tema kalian sendiri

Isi array `daftarItem` dengan data tema kalian (katalog kuliner, direktori UMKM, katalog buku, destinasi wisata, atau tema lain yang **datanya berbentuk daftar item dengan detail**).

- Minimal **6 item**
- Tiap item wajib punya: `id` (angka, tidak boleh kembar), `nama` (teks), `kategori` (teks)
- Plus **satu properti angka** — namanya bebas sesuai tema (`harga`, `halaman`, `rating`, `tiket`, ...)
- Plus **satu properti `true`/`false`** — namanya bebas (`tersedia`, `buka`, `dipinjam`, ...)
- Minimal **2 kategori berbeda**, dan minimal **1 item** yang bernilai `false`

### Bagian 2 — `logika.js`: empat fungsi

| Fungsi | Mengembalikan | Kalau tidak ada hasil |
|---|---|---|
| `hitungTersedia(daftar)` | jumlah item yang bernilai `true` | `0` |
| `cariBerdasarkanId(daftar, id)` | satu item yang `id`-nya cocok | `null` |
| `saringKategori(daftar, kategori)` | **array baru** berisi item berkategori itu | `[]` |
| `rataRataTersedia(daftar)` | rata-rata properti angka, **hanya** dari item bernilai `true` | `null` |

Kalau kata "tersedia" tidak cocok dengan tema kalian (misalnya UMKM yang `buka`), **ganti nama fungsinya** supaya sesuai makna — misalnya `hitungYangBuka`. Nama yang tepat ikut dinilai.

## Aturan Wajib

**1. Langkah dulu, kode belakangan.** Di atas tiap fungsi, tulis tiga blok komentar — persis seperti di kelas:

```javascript
// LANGKAH 1 — PAHAMI   : masukannya apa, keluarannya apa
// LANGKAH 2 — CONTOH   : hasil yang diharapkan dari data kalian + kasus tepinya
// LANGKAH 3 — LANGKAH  : langkah-langkahnya dalam bahasa Indonesia
```

**2. Pakai `for...of` dan `if`.** Jangan pakai `.map()`, `.filter()`, `.find()`, atau `.reduce()` dulu. Bukan karena salah — kalian akan memakainya mulai Pertemuan 3. Tapi tugas ini melatih logika di balik method-method itu, dan logika itu hanya terlatih kalau ditulis sendiri.

**3. Uji tiap fungsi minimal dua kali** di bagian `UJI`: satu kasus normal, satu **kasus tepi** (daftar kosong, `id` yang tidak ada, kategori yang tidak ada, tidak ada item bernilai `true`).

**4. Minimal satu komentar ALASAN di tiap fungsi** — bukan "apa" yang dilakukan baris itu, tapi **kenapa** kalian memilih cara itu. Contoh:

```javascript
// return di dalam loop: begitu ketemu, berhenti — tidak perlu memeriksa sisanya
```

**5. Kebijakan AI.** AI **boleh** kalian pakai untuk bertanya (kenapa error ini muncul, bedanya `let` dan `const` apa). AI **tidak boleh** dipakai untuk menulis kode tugas ini.

## Cara Mengumpulkan

```bash
git checkout -b tugas1a-nama-anda
git add .
git commit -m "feat: data tema dan empat fungsi logika"
git push -u origin tugas1a-nama-anda
```

Lalu di GitHub: **Compare & pull request** → judul `Tugas 1A — Nama Anda` → **Create pull request**.

---

## Kriteria Penilaian

| Bobot | Aspek | Yang dilihat |
|:--:|---|---|
| **30%** | Langkah (pseudocode) | Langkah 1–3 ada, masuk akal, dan tiap baris kode punya pasangannya di langkah |
| **30%** | Kebenaran, termasuk kasus tepi | Keempat fungsi benar untuk kasus normal **dan** kasus tepi |
| **20%** | Komentar alasan | Menjelaskan **kenapa**, bukan mengulang apa yang sudah terbaca |
| **10%** | Penamaan | Nama variabel & fungsi menjelaskan maknanya (`jumlahTersedia`, bukan `x`) |
| **10%** | Data & Pull Request | Data memenuhi aturan, PR dari branch sendiri, commit bermakna |

**Verifikasi lisan.** Di sesi breakout, mentor akan menunjuk satu baris di kode kalian dan bertanya kenapa. Tugas yang tidak bisa dijelaskan penulisnya dinilai **tidak lengkap**, berapa pun rapinya.

> Tampilan tidak dinilai sama sekali — memang belum ada tampilan. Yang dinilai: **apakah kalian bisa memikirkan langkahnya, dan apakah kalian memikirkan kasus yang bisa bikin fungsinya gagal.**
