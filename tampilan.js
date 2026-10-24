const wadahKartu = document.querySelector("#daftar-kartu");
function buatKartu(item) { 
    // label dibuat sebelum if supaya bisa dipakai di dalam template literal. Jika label dibuat di dalam if, maka tidak bisa dipakai di luar if karena lingkup variabel terbatas pada blok if saja.
    let label= "";
    if (item.buka) {
        // menggunakan backtick (`) agar ${...} bisa dipakai untuk menampilkan nilai variabel, jika menggunakan tanda kutip biasa (" atau ') maka ${...} akan dianggap sebagai teks biasa
        label = `<span class="inline-block px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded">Buka</span>`;
    } else {
        label = `<span class="inline-block px-2 py-1 text-xs font-semibold text-red-800 bg-red-200 rounded">Tutup</span>`;
    }
    return `
            <article class="flex flex-col gap-2 p-5 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 class="text-lg font-semibold">${item.nama}</h3>
                <p class="text-gray-600">Kategori: ${item.kategori}</p>
                <p class="text-gray-600">Harga Minimum: Rp ${item.hargaMin}</p>
                <p class="text-gray-600">Status Buka: ${label}</p>
                <p class="text-gray-600">Lokasi: ${item.lokasi}</p>
            </article>
        `;
}
function tampilkan(daftar) {
    if (daftar.length === 0) {
        wadahKartu.innerHTML = `<p class="text-gray-600">Tidak ada kafe yang sesuai dengan kategori ini.</p>`;
        return;
    }
    // menggunakan .map() untuk membuat setiap isi array menjadi sesuatu yang lain, lalu mengumpulkan hasilnya menjadi array baru dengan jumlah elemen yang sama.
    // menggunakan .join("") untuk menyambungnya jadi satu teks panjang tanpa pemisah.
    wadahKartu.innerHTML = daftar.map(buatKartu).join("");
}

tampilkan(daftarCafe);

const tombolFilter = document.querySelectorAll(".filter-btn");

for (const tombol of tombolFilter) {
    tombol.addEventListener("click", function() {
        const kategori = this.dataset.kategori;
        if (kategori === "semua") {
            tampilkan(daftarCafe);
        } else {
            const hasilFilter = daftarCafe.filter(item => item.kategori === kategori);
            tampilkan(hasilFilter);
        }
    });
}