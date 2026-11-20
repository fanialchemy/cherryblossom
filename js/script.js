/* =========================================================
   SCRIPT.JS — JavaScript CHERRYBLOSSOM
   File ini dipakai di semua halaman. Isinya:
   1. Data produk
   2. Fungsi bantu (format Rupiah)
   3. Keranjang (disimpan di localStorage) + angka di navbar
   4. Filter & pencarian produk (produk.html)
   5. Halaman detail produk (detail.html)
   6. Halaman keranjang (keranjang.html)
   7. Form kontak (kontak.html)
   Setiap bagian hanya berjalan jika elemennya ada di halaman itu.
   ========================================================= */


/* ===== 1. DATA PRODUK =====
   Semua produk disimpan dalam sebuah array berisi objek.
   - id       : kode unik, dipakai di URL detail.html?id=... dan nama file gambar
   - category : "Dewasa" atau "Anak"
   - jenis    : "Sepatu" atau "Sandal"
   Kartu produk di produk.html dan index.html ditulis langsung di HTML,
   jadi id, nama, harga, dan kategori di sana harus sama dengan data ini. */
var ukuranDewasa = [36, 37, 38, 39, 40];
var ukuranAnak = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34];

var products = [
    // ----- Dewasa · Sepatu -----
    {
        id: 'sakura-puni',
        name: 'Sakura Puni',
        category: 'Dewasa',
        jenis: 'Sepatu',
        image: 'images/produk/sakura-puni.jpg',
        price: 289000,
        color: 'Merah muda',
        sizes: ukuranDewasa,
        description: 'Sneaker pink-putih dengan tali pink yang manis banget. Pas buat jalan santai sambil cari jajanan kesukaan.'
    },
    {
        id: 'momo-fuwa',
        name: 'Momo Fuwa',
        category: 'Dewasa',
        jenis: 'Sepatu',
        image: 'images/produk/momo-fuwa.jpg',
        price: 299000,
        color: 'Pink gradasi',
        sizes: ukuranDewasa,
        description: 'Sneaker putih dengan gradasi pink lembut seperti langit sore. Ringan dipakai seharian, kalem tapi tetap gemas.'
    },
    {
        id: 'yume-kira',
        name: 'Yume Kira',
        category: 'Dewasa',
        jenis: 'Sepatu',
        image: 'images/produk/yume-kira.jpg',
        price: 319000,
        color: 'Biru muda',
        sizes: ukuranDewasa,
        description: 'Sneaker biru muda berpadu krem dengan tali krem yang tebal dan empuk. Adem dilihat, nyaman dipakai ke mana saja.'
    },
    {
        id: 'hana-mochi',
        name: 'Hana Mochi',
        category: 'Dewasa',
        jenis: 'Sepatu',
        image: 'images/produk/hana-mochi.jpg',
        price: 279000,
        color: 'Krem pastel',
        sizes: ukuranDewasa,
        description: 'Sneaker krem pastel dengan aksen kuning dan biru yang ceria. Gampang dipadukan dengan baju apa pun.'
    },

    // ----- Dewasa · Sandal -----
    {
        id: 'niji-pyon',
        name: 'Niji Pyon',
        category: 'Dewasa',
        jenis: 'Sandal',
        image: 'images/produk/niji-pyon.jpg',
        price: 189000,
        color: 'Pink nude',
        sizes: ukuranDewasa,
        description: 'Sandal slide pink nude bermotif beruang yang menggemaskan. Empuk dan santai dipakai di rumah atau jalan dekat.'
    },
    {
        id: 'riri-chuu',
        name: 'Riri Chuu',
        category: 'Dewasa',
        jenis: 'Sandal',
        image: 'images/produk/riri-chuu.jpg',
        price: 159000,
        color: 'Merah muda',
        sizes: ukuranDewasa,
        description: 'Sandal jepit platform pink yang bikin langkah sedikit lebih tinggi. Ringan dan imut buat jalan-jalan sore.'
    },
    {
        id: 'lulu-sora',
        name: 'Lulu Sora',
        category: 'Dewasa',
        jenis: 'Sandal',
        image: 'images/produk/lulu-sora.jpg',
        price: 229000,
        color: 'Krem cokelat',
        sizes: ukuranDewasa,
        description: 'Sandal slide krem dengan sol cokelat dan hiasan pita yang manis. Kalem, rapi, dan nyaman seharian.'
    },
    {
        id: 'nana-puru',
        name: 'Nana Puru',
        category: 'Dewasa',
        jenis: 'Sandal',
        image: 'images/produk/nana-puru.jpg',
        price: 199000,
        color: 'Pink stroberi',
        sizes: ukuranDewasa,
        description: 'Sandal rumah pink dengan pita motif stroberi yang segar. Bikin waktu santai di rumah makin manis.'
    },

    // ----- Anak · Sepatu -----
    {
        id: 'koko-tobi',
        name: 'Koko Tobi',
        category: 'Anak',
        jenis: 'Sepatu',
        image: 'images/produk/koko-tobi.jpg',
        price: 219000,
        color: 'Krem cokelat',
        sizes: ukuranAnak,
        description: 'Sneaker anak krem dengan aksen cokelat, seperti kue cokelat susu. Ringan untuk si kecil yang hobi lompat-lompat.'
    },
    {
        id: 'pipi-kumo',
        name: 'Pipi Kumo',
        category: 'Anak',
        jenis: 'Sepatu',
        image: 'images/produk/pipi-kumo.jpg',
        price: 209000,
        color: 'Putih pink',
        sizes: ukuranAnak,
        description: 'Sneaker anak putih-pink bergambar kartun lucu. Bikin si kecil semangat berangkat sekolah dan bermain.'
    },
    {
        id: 'mimi-usa',
        name: 'Mimi Usa',
        category: 'Anak',
        jenis: 'Sepatu',
        image: 'images/produk/mimi-usa.jpg',
        price: 229000,
        color: 'Pink glitter',
        sizes: ukuranAnak,
        description: 'Sepatu anak model tinggi warna pink yang berkilau. Langkah si kecil jadi makin percaya diri dan bersinar.'
    },
    {
        id: 'chibi-hoshi',
        name: 'Chibi Hoshi',
        category: 'Anak',
        jenis: 'Sepatu',
        image: 'images/produk/chibi-hoshi.jpg',
        price: 199000,
        color: 'Putih pink',
        sizes: ukuranAnak,
        description: 'Sepatu boots anak putih-pink dengan aksen ungu yang manis. Hangat dan imut untuk menemani petualangan si kecil.'
    },

    // ----- Anak · Sandal -----
    {
        id: 'nini-pyoko',
        name: 'Nini Pyoko',
        category: 'Anak',
        jenis: 'Sandal',
        image: 'images/produk/nini-pyoko.jpg',
        price: 129000,
        color: 'Hijau alpukat',
        sizes: ukuranAnak,
        description: 'Sandal clog anak hijau dengan hiasan alpukat yang menggemaskan. Ringan dan mudah dipakai sendiri.'
    },
    {
        id: 'tete-miru',
        name: 'Tete Miru',
        category: 'Anak',
        jenis: 'Sandal',
        image: 'images/produk/tete-miru.jpg',
        price: 139000,
        color: 'Pink unicorn',
        sizes: ukuranAnak,
        description: 'Sandal clog anak pink bergambar unicorn yang ajaib. Cocok buat si kecil yang suka dongeng dan warna ceria.'
    },
    {
        id: 'popo-niko',
        name: 'Popo Niko',
        category: 'Anak',
        jenis: 'Sandal',
        image: 'images/produk/popo-niko.jpg',
        price: 149000,
        color: 'Putih',
        sizes: ukuranAnak,
        description: 'Sandal slide anak putih bergambar wajah anak yang tersenyum. Simpel, lucu, dan nyaman untuk bersantai.'
    },
    {
        id: 'yuyu-puka',
        name: 'Yuyu Puka',
        category: 'Anak',
        jenis: 'Sandal',
        image: 'images/produk/yuyu-puka.jpg',
        price: 119000,
        color: 'Putih',
        sizes: ukuranAnak,
        description: 'Sandal clog anak putih dengan hiasan pita yang manis. Teman setia si kecil saat bermain di rumah.'
    }
];


/* ===== 2. FUNGSI BANTU ===== */

// Mengubah angka menjadi format Rupiah. Contoh: 289000 -> "Rp289.000"
function rupiah(angka) {
    return 'Rp' + angka.toLocaleString('id-ID');
}

// Mencari satu produk di array products berdasarkan id-nya
function cariProduk(id) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            return products[i];
        }
    }
    return null; // tidak ditemukan
}


/* ===== 3. KERANJANG (localStorage) =====
   localStorage = tempat penyimpanan kecil di browser.
   Isinya tetap ada walaupun halaman ditutup atau pindah halaman.
   Setiap barang di keranjang berisi: id produk, ukuran, dan jumlah. */

// Ambil keranjang yang tersimpan. Kalau belum ada, mulai dengan array kosong.
var cart = JSON.parse(localStorage.getItem('cherry-cart')) || [];

// Simpan keranjang lalu perbarui angka jumlah barang di navbar
function saveCart() {
    localStorage.setItem('cherry-cart', JSON.stringify(cart));

    var totalBarang = 0;
    for (var i = 0; i < cart.length; i++) {
        totalBarang = totalBarang + cart[i].quantity;
    }
    document.getElementById('cart-count').textContent = totalBarang;
}

// Jalankan sekali saat halaman dibuka agar angka di navbar benar
saveCart();


/* ===== 4. FILTER & PENCARIAN (produk.html) =====
   Kartu produk sudah ada di HTML. JavaScript hanya menyembunyikan
   atau menampilkan kartu sesuai pilihan:
   - kategori : Semua / Anak / Dewasa
   - jenis    : Semua / Sepatu / Sandal
   - kata yang diketik di kolom pencarian */
var search = document.getElementById('search');

if (search) {
    // Filter awal bisa dibaca dari URL, contoh: produk.html?kategori=Anak
    var params = new URLSearchParams(window.location.search);
    var kategoriDipilih = params.get('kategori') || 'Semua';
    var jenisDipilih = params.get('jenis') || 'Semua';

    var tombolKategori = document.querySelectorAll('[data-filter-kategori]');
    var tombolJenis = document.querySelectorAll('[data-filter-jenis]');
    var semuaKartu = document.querySelectorAll('.product-item');

    // Menampilkan kartu yang cocok dan menyembunyikan yang tidak
    function filterProducts() {
        var kataKunci = search.value.trim().toLowerCase();
        var jumlahTampil = 0;

        for (var i = 0; i < semuaKartu.length; i++) {
            var kartu = semuaKartu[i];
            var cocokKategori = (kategoriDipilih === 'Semua' || kartu.dataset.category === kategoriDipilih);
            var cocokJenis = (jenisDipilih === 'Semua' || kartu.dataset.jenis === jenisDipilih);
            var cocokNama = kartu.dataset.name.includes(kataKunci);

            if (cocokKategori && cocokJenis && cocokNama) {
                kartu.hidden = false;
                jumlahTampil++;
            } else {
                kartu.hidden = true;
            }
        }

        // Beri warna "active" pada tombol yang sedang dipilih
        for (var a = 0; a < tombolKategori.length; a++) {
            var aktifKategori = tombolKategori[a].dataset.filterKategori === kategoriDipilih;
            tombolKategori[a].classList.toggle('active', aktifKategori);
        }
        for (var b = 0; b < tombolJenis.length; b++) {
            var aktifJenis = tombolJenis[b].dataset.filterJenis === jenisDipilih;
            tombolJenis[b].classList.toggle('active', aktifJenis);
        }

        // Tulis jumlah produk & tampilkan pesan jika tidak ada yang cocok
        document.getElementById('result-count').textContent = jumlahTampil + ' produk untuk dijelajahi';
        document.getElementById('empty-results').hidden = (jumlahTampil > 0);
    }

    // Saat tombol kategori diklik
    for (var k = 0; k < tombolKategori.length; k++) {
        tombolKategori[k].addEventListener('click', function () {
            kategoriDipilih = this.dataset.filterKategori;
            filterProducts();
        });
    }

    // Saat tombol jenis diklik
    for (var j = 0; j < tombolJenis.length; j++) {
        tombolJenis[j].addEventListener('click', function () {
            jenisDipilih = this.dataset.filterJenis;
            filterProducts();
        });
    }

    // Saat pengunjung mengetik di kolom pencarian
    search.addEventListener('input', filterProducts);

    // Jalankan sekali saat halaman dibuka
    filterProducts();
}


/* ===== 5. HALAMAN DETAIL PRODUK (detail.html) =====
   Membaca ?id= dari URL, mencari produknya, lalu mengisi
   nama, harga, gambar, warna, dan pilihan ukuran.
   Jika id tidak ditemukan, yang tampil adalah produk pertama. */
var addForm = document.getElementById('add-form');

if (addForm) {
    var idDariUrl = new URLSearchParams(window.location.search).get('id');
    var product = cariProduk(idDariUrl) || products[0];

    // Isi teks halaman
    document.title = product.name + ' | CHERRYBLOSSOM';
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('crumb-name').textContent = product.name;
    document.getElementById('detail-price').textContent = rupiah(product.price);
    document.getElementById('detail-color').textContent = product.color;
    document.getElementById('detail-description').textContent = product.description;
    document.getElementById('detail-category').textContent =
        'KOLEKSI ' + product.category.toUpperCase() + ' · ' + product.jenis.toUpperCase();

    // Isi gambar
    var gambar = document.getElementById('detail-image');
    gambar.src = product.image;
    gambar.alt = product.name + ' berwarna ' + product.color.toLowerCase();

    // Buat pilihan ukuran (<option>) sesuai ukuran produk
    var pilihanUkuran = document.getElementById('size');
    for (var u = 0; u < product.sizes.length; u++) {
        var option = document.createElement('option');
        option.value = product.sizes[u];
        option.textContent = product.sizes[u];
        pilihanUkuran.appendChild(option);
    }

    // Saat tombol "Tambahkan ke keranjang" ditekan
    addForm.addEventListener('submit', function (event) {
        event.preventDefault(); // jangan muat ulang halaman

        var ukuran = Number(pilihanUkuran.value);
        var jumlah = Number(document.getElementById('quantity').value);
        var pesan = document.getElementById('add-status');

        // Cek apakah produk dengan ukuran yang sama sudah ada di keranjang
        var barangLama = null;
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].id === product.id && cart[i].size === ukuran) {
                barangLama = cart[i];
            }
        }

        if (barangLama) {
            // Sudah ada: tambahkan jumlahnya (maksimal 10 pasang)
            if (barangLama.quantity + jumlah > 10) {
                pesan.textContent = 'Maksimal 10 pasang untuk produk dan ukuran yang sama.';
                return;
            }
            barangLama.quantity = barangLama.quantity + jumlah;
        } else {
            // Belum ada: masukkan sebagai barang baru
            cart.push({ id: product.id, size: ukuran, quantity: jumlah });
        }

        saveCart();
        pesan.textContent = product.name + ' berhasil ditambahkan. Lihat keranjang untuk melanjutkan.';
    });
}


/* ===== 6. HALAMAN KERANJANG (keranjang.html) =====
   Menampilkan isi keranjang, mengubah jumlah, menghapus barang,
   dan menghitung total belanja (simulasi, tanpa pembayaran). */
var cartItems = document.getElementById('cart-items');

if (cartItems) {

    // Menggambar ulang daftar keranjang dan menghitung total
    function renderCart() {
        cartItems.innerHTML = '';
        var total = 0;

        // Jika keranjang kosong, tampilkan pesan
        if (cart.length === 0) {
            cartItems.innerHTML =
                '<div class="empty-state">' +
                    '<h2>Masih ada ruang untuk yang manis.</h2>' +
                    '<p>Keranjangmu masih kosong.</p>' +
                    '<a class="btn btn-cherry" href="produk.html">Jelajahi koleksi ↗</a>' +
                '</div>';
        }

        // Buat satu baris untuk setiap barang
        for (var i = 0; i < cart.length; i++) {
            var item = cart[i];
            var p = cariProduk(item.id);

            // Lewati barang yang produknya sudah tidak ada di data
            if (!p) {
                continue;
            }

            var subtotalBarang = p.price * item.quantity;
            total = total + subtotalBarang;

            var row = document.createElement('article');
            row.className = 'cart-row d-flex align-items-center gap-3';

            row.innerHTML = `
                <!-- Foto produk -->
                <img src="${p.image}" alt="${p.name}">

                <!-- Nama, ukuran, harga -->
                <div>
                    <h2><a href="detail.html?id=${p.id}">${p.name}</a></h2>
                    <p>Ukuran ${item.size} · ${rupiah(p.price)}</p>
                    <strong>${rupiah(subtotalBarang)}</strong>
                </div>

                <!-- Ubah jumlah & tombol hapus (sejajar tengah) -->
                <div class="ms-auto d-flex align-items-center gap-2">
                    <div>
                        <label class="cart-qty-label" for="qty-${i}">Jumlah</label>
                        <input id="qty-${i}" class="form-control cart-quantity" type="number"
                               value="${item.quantity}" min="1" max="10" data-index="${i}">
                    </div>
                    <button class="btn btn-sm remove align-self-end" type="button" data-index="${i}">Hapus</button>
                </div>
            `;

            cartItems.appendChild(row);
        }

        // Tampilkan total dan matikan tombol jika keranjang kosong
        document.getElementById('subtotal').textContent = rupiah(total);
        document.getElementById('total').textContent = rupiah(total);
        document.getElementById('simulate').disabled = (cart.length === 0);
    }

    // Saat jumlah barang diubah (angka 1 sampai 10)
    cartItems.addEventListener('change', function (event) {
        if (event.target.classList.contains('cart-quantity')) {
            var index = event.target.dataset.index;
            var jumlahBaru = Number(event.target.value);

            if (jumlahBaru >= 1 && jumlahBaru <= 10) {
                cart[index].quantity = jumlahBaru;
                saveCart();
            }
            renderCart();
            document.getElementById('checkout-status').textContent = '';
        }
    });

    // Saat tombol "Hapus" diklik
    cartItems.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove')) {
            var index = event.target.dataset.index;
            cart.splice(index, 1); // buang 1 barang pada posisi index
            saveCart();
            renderCart();
            document.getElementById('checkout-status').textContent = '';
        }
    });

    // Form "Data pengiriman": browser sudah memeriksa required, pattern,
    // dan minlength. Event submit hanya terjadi jika semua kolom valid.
    var checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', function (event) {
        event.preventDefault(); // jangan muat ulang halaman

        if (cart.length === 0) {
            return;
        }

        // Simpan total dulu, sebelum keranjang dikosongkan
        var totalPesanan = document.getElementById('total').textContent;

        // Kosongkan keranjang: simpan ke localStorage (angka navbar ikut 0),
        // lalu gambar ulang (tampil pesan kosong & tombol jadi nonaktif)
        cart = [];
        saveCart();
        renderCart();

        // Pesan sukses tetap tampil setelah keranjang kosong
        document.getElementById('checkout-status').textContent =
            'Terima kasih! Pesanan simulasi senilai ' + totalPesanan +
            ' berhasil dibuat. Tidak ada pembayaran atau pengiriman nyata.';
        checkoutForm.reset();
    });

    // Gambar keranjang saat halaman dibuka
    renderCart();
}


/* ===== 7. FORM KONTAK (kontak.html) =====
   HTML sudah memeriksa kolom wajib (required, email, minlength).
   JavaScript menambah satu pemeriksaan: nama dan pesan tidak boleh
   hanya berisi spasi. Pesan tidak dikirim ke mana pun (simulasi). */
var contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // jangan muat ulang halaman

        var nama = document.getElementById('name').value.trim();
        var pesan = document.getElementById('message').value.trim();
        var status = document.getElementById('form-status');

        if (nama.length < 2 || pesan.length < 10) {
            status.textContent = 'Isi nama minimal 2 karakter dan pesan minimal 10 karakter, bukan hanya spasi.';
            return;
        }

        status.textContent = 'Terima kasih! Pesanmu lolos validasi simulasi. Pesan tidak dikirim atau disimpan.';
        contactForm.reset();
    });
}
