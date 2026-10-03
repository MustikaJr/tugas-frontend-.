# Proyek Frontend — Metro Institute Season 2

Repositori ini adalah **produk kamu sendiri** yang akan terus dikembangkan selama kelas Frontend:
dari data dan logika, menjadi halaman web, aplikasi React, sampai online di internet.

---

## Mulai di sini (sekali saja)

1. Klik tombol hijau **Use this template** → **Create a new repository**.
2. Beri nama repositori, misalnya `frontend-namakamu`, lalu klik **Create repository**.
3. Di repositori barumu: **Settings → Collaborators → Add people** → tambahkan **`samythh`** (mentor).
4. Ambil repositori ke laptop:

```bash
git config --global user.name "Nama Lengkap"
git config --global user.email "email-github@contoh.com"

git clone https://github.com/<username-kamu>/<nama-repo>.git
cd <nama-repo>
```

> Pastikan yang di-clone adalah **repositori milikmu**, bukan repositori template ini.

---

## Cara mengerjakan & mengumpulkan tugas

Setiap tugas dikerjakan di **branch** tersendiri dan dikumpulkan lewat **Pull Request**.

```bash
# 1. Buat branch untuk tugas
git checkout -b tugas1a-namakamu

# 2. Kerjakan tugasnya, lalu simpan & kirim
git add .
git commit -m "feat: data tema dan fungsi logika"
git push -u origin tugas1a-namakamu
```

3. Buka repositorimu di GitHub → klik **Compare & pull request** → judul `Tugas 1A — Nama Kamu` → **Create pull request**.

Kesulitan memakai terminal? Gunakan **GitHub Desktop** sebagai alternatif.

---

## Isi repositori

| File | Kegunaan |
|---|---|
| `index.html` | Penghubung file JavaScript ke browser. Buka file ini, lalu tekan **F12 → Console** |
| `data.js` | Data tema produkmu (Tugas 1A) |
| `logika.js` | Fungsi-fungsi logika (Tugas 1A) |
| `docs/tugas-1a.md` | Soal dan kriteria penilaian Tugas 1A |

---

## Aturan main

- **Kode tugas ditulis sendiri.** Boleh bertanya ke mentor, teman, atau referensi lain untuk memahami konsep.
- **Siap menjelaskan setiap baris kode.** Mentor akan menanyakan alasan di balik kodemu secara acak.
- **Langkah dulu, kode belakangan.** Tulis langkah penyelesaian sebagai komentar sebelum menulis kode.

## Kalau macet

Tanyakan di grup dengan format:

```
1. Yang saya coba   : ...
2. Yang saya harap  : ...
3. Yang terjadi     : ... (+ screenshot error)
4. Yang sudah dicoba: ...
```
