/* =========================================================
   SCRIPT.JS — JavaScript dasar CHERRYBLOSSOM
   Isi:
   1. Data produk
   2. Fungsi bantu (format Rupiah)
   3. Keranjang (localStorage) + angka di navbar
   4. Filter & pencarian katalog (produk.html)
   5. Halaman detail produk (detail.html)
   6. Halaman keranjang (keranjang.html)
   7. Form kontak (kontak.html)
   8. Tombol jeda carousel (index.html)
   File ini dipakai di semua halaman. Setiap bagian hanya
   berjalan jika elemen yang dibutuhkan ada di halaman itu.
   ========================================================= */


/* ===== 1. DATA PRODUK =====
   Data lengkap 16 produk (8 Dewasa, 8 Anak).
   - id       : dipakai di URL detail.html?id=... dan nama file gambar
   - category : "Dewasa" atau "Anak"
   - jenis    : "Sepatu" atau "Sandal"
   - image    : path gambar dari folder root proyek
   Kartu di produk.html dan index.html ditulis langsung di HTML,
   jadi id, nama, harga, dan kategori di sana harus sama dengan data ini. */
const sizesDewasa = [36, 37, 38, 39, 40];
const sizesAnak = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34];

const products = [
    // ----- Dewasa · Sepatu -----
    {
        id: 'sakura-puni',
        name: 'Sakura Puni',
        category: 'Dewasa',
        jenis: 'Sepatu',
        image: 'images/produk/sakura-puni.jpg',
        price: 289000,
        color: 'Merah muda',
        sizes: sizesDewasa,
        description: 'Sepatu merah muda dengan tali putih yang empuk banget, kayak kue mochi. Siap nemenin jalan santai sambil cari jajanan manis.'
    },
    {
        id: 'momo-fuwa',
        name: 'Momo Fuwa',
        category: 'Dewasa',
        jenis: 'Sepatu',
        image: 'images/produk/momo-fuwa.jpg',
        price: 299000,
        color: 'Peach lembut',
        sizes: sizesDewasa,
        description: 'Warna peach lembut yang bikin hati ikut adem. Ringan dipakai seharian, cocok buat kamu yang suka tampil kalem tapi tetap gemas.'
    },
    {
        id: 'yume-kira',
        name: 'Yume Kira',
        category: 'Dewasa',
        jenis: 'Sepatu',
        image: 'images/produk/yume-kira.jpg',
        price: 319000,
        color: 'Lavender',
        sizes: sizesDewasa,
        description: 'Sepatu lavender dengan aksen berkilau kecil, seperti mimpi indah di siang hari. Pas buat ngopi cantik atau kencan santai.'
    },
    {
        id: 'hana-mochi',
        name: 'Hana Mochi',
        category: 'Dewasa',
        jenis: 'Sepatu',
        image: 'images/produk/hana-mochi.jpg',
        price: 279000,
        color: 'Krem susu',
        sizes: sizesDewasa,
        description: 'Krem susu yang hangat dan gampang dipadukan dengan baju apa saja. Sederhana, manis, dan bikin langkah terasa ringan.'
    },

    // ----- Dewasa · Sandal -----
    {
        id: 'niji-pyon',
        name: 'Niji Pyon',
        category: 'Dewasa',
        jenis: 'Sandal',
        image: 'images/produk/niji-pyon.jpg',
        price: 189000,
        color: 'Pastel warna-warni',
        sizes: sizesDewasa,
        description: 'Tali pastel warna-warni seperti pelangi kecil di kakimu, lengkap dengan pengikat pergelangan. Ceria buat hari yang penuh warna.'
    },
    {
        id: 'riri-chuu',
        name: 'Riri Chuu',
        category: 'Dewasa',
        jenis: 'Sandal',
        image: 'images/produk/riri-chuu.jpg',
        price: 159000,
        color: 'Merah muda',
        sizes: sizesDewasa,
        description: 'Sandal merah muda dengan aksen mint dan kuning. Imut, ringan, dan siap diajak jalan-jalan sore.'
    },
    {
        id: 'lulu-sora',
        name: 'Lulu Sora',
        category: 'Dewasa',
        jenis: 'Sandal',
        image: 'images/produk/lulu-sora.jpg',
        price: 229000,
        color: 'Ungu muda',
        sizes: sizesDewasa,
        description: 'Perpaduan ungu muda, merah muda, dan putih yang lembut seperti langit sore. Terinspirasi kelopak bunga di musim semi.'
    },
    {
        id: 'nana-puru',
        name: 'Nana Puru',
        category: 'Dewasa',
        jenis: 'Sandal',
        image: 'images/produk/nana-puru.jpg',
        price: 199000,
        color: 'Mint pastel',
        sizes: sizesDewasa,
        description: 'Sandal mint pastel yang segar seperti es krim di hari panas. Nyaman dipakai santai di rumah maupun saat liburan.'
    },

    // ----- Anak · Sepatu -----
    {
        id: 'koko-tobi',
        name: 'Koko Tobi',
        category: 'Anak',
        jenis: 'Sepatu',
        image: 'images/produk/koko-tobi.jpg',
        price: 219000,
        color: 'Biru pastel',
        sizes: sizesAnak,
        description: 'Sepatu biru pastel untuk si kecil yang hobi lompat-lompat. Ringan dan lentur, siap menemani petualangan seharian.'
    },
    {
        id: 'pipi-kumo',
        name: 'Pipi Kumo',
        category: 'Anak',
        jenis: 'Sepatu',
        image: 'images/produk/pipi-kumo.jpg',
        price: 209000,
        color: 'Biru langit',
        sizes: sizesAnak,
        description: 'Seempuk awan di langit biru! Sepatu yang bikin si kecil semangat berangkat sekolah dan bermain di taman.'
    },
    {
        id: 'mimi-usa',
        name: 'Mimi Usa',
        category: 'Anak',
        jenis: 'Sepatu',
        image: 'images/produk/mimi-usa.jpg',
        price: 229000,
        color: 'Pink stroberi',
        sizes: sizesAnak,
        description: 'Pink stroberi dengan sentuhan kelinci yang menggemaskan. Langkah kecilnya jadi makin lucu dan percaya diri.'
    },
    {
        id: 'chibi-hoshi',
        name: 'Chibi Hoshi',
        category: 'Anak',
        jenis: 'Sepatu',
        image: 'images/produk/chibi-hoshi.jpg',
        price: 199000,
        color: 'Kuning lemon',
        sizes: sizesAnak,
        description: 'Kuning lemon seceria bintang kecil. Gampang dipakai sendiri, cocok buat si kecil yang mulai belajar mandiri.'
    },

    // ----- Anak · Sandal -----
    {
        id: 'nini-pyoko',
        name: 'Nini Pyoko',
        category: 'Anak',
        jenis: 'Sandal',
        image: 'images/produk/nini-pyoko.jpg',
        price: 129000,
        color: 'Merah muda',
        sizes: sizesAnak,
        description: 'Sandal merah muda yang bikin langkah si kecil terdengar "pyoko-pyoko". Ringan dan nyaman untuk bermain.'
    },
    {
        id: 'tete-miru',
        name: 'Tete Miru',
        category: 'Anak',
        jenis: 'Sandal',
        image: 'images/produk/tete-miru.jpg',
        price: 139000,
        color: 'Lila',
        sizes: sizesAnak,
        description: 'Sandal lila bertali lembut yang manis dilihat. Pas buat jalan-jalan ke taman bunga bersama keluarga.'
    },
    {
        id: 'popo-niko',
        name: 'Popo Niko',
        category: 'Anak',
        jenis: 'Sandal',
        image: 'images/produk/popo-niko.jpg',
        price: 149000,
        color: 'Pastel warna-warni',
        sizes: sizesAnak,
        description: 'Warna-warni pastel yang bikin si kecil senyum terus. Talinya mudah diatur, cocok untuk liburan ke pantai.'
    },
    {
        id: 'yuyu-puka',
        name: 'Yuyu Puka',
        category: 'Anak',
        jenis: 'Sandal',
        image: 'images/produk/yuyu-puka.jpg',
        price: 119000,
        color: 'Peach',
        sizes: sizesAnak,
        description: 'Sandal peach mungil yang empuk dan adem. Teman setia si kecil saat bersantai di rumah.'
    }
];


/* ===== 2. FUNGSI BANTU =====
   Mengubah angka menjadi format Rupiah, contoh: 289000 -> "Rp289.000" */
const rupiah = value => 'Rp' + value.toLocaleString('id-ID');


/* ===== 3. KERANJANG (localStorage) =====
   Isi keranjang disimpan di localStorage dengan kunci "cherry-cart".
   Setiap barang berisi: id produk, ukuran, dan jumlah. */
let cart = [];

// Ambil keranjang yang tersimpan; jika rusak/kosong, mulai dari array kosong
try {
    cart = JSON.parse(localStorage.getItem('cherry-cart')) || [];
} catch (error) {
    cart = [];
}

if (!Array.isArray(cart)) {
    cart = [];
}

// Buang barang yang tidak valid (produk tidak ada, ukuran salah, jumlah di luar 1–10)
cart = cart.filter(item =>
    products.some(p => p.id === item.id && p.sizes.includes(Number(item.size))) &&
    Number.isInteger(item.quantity) &&
    item.quantity > 0 &&
    item.quantity <= 10
);

// Simpan keranjang dan perbarui angka jumlah barang di navbar
function saveCart() {
    try {
        localStorage.setItem('cherry-cart', JSON.stringify(cart));
    } catch (error) {
        /* Tetap dapat digunakan selama halaman terbuka. */
    }
    document.getElementById('cart-count').textContent =
        cart.reduce((total, item) => total + item.quantity, 0);
}

saveCart();


/* ===== 4. FILTER & PENCARIAN KATALOG (produk.html) =====
   Kartu produk sudah ditulis di HTML. JavaScript hanya
   menyembunyikan/menampilkan kartu sesuai filter:
   - kategori : Semua / Anak / Dewasa   (tombol data-filter-kategori)
   - jenis    : Semua / Sepatu / Sandal (tombol data-filter-jenis)
   - kata kunci pencarian
   Filter awal bisa diambil dari URL, misalnya produk.html?kategori=Anak */
const search = document.getElementById('search');

if (search) {
    const params = new URLSearchParams(location.search);
    let category = params.get('kategori') || 'Semua';
    let jenis = params.get('jenis') || 'Semua';

    // Pastikan nilai dari URL valid
    if (!['Semua', 'Anak', 'Dewasa'].includes(category)) {
        category = 'Semua';
    }
    if (!['Semua', 'Sepatu', 'Sandal'].includes(jenis)) {
        jenis = 'Semua';
    }

    // Menampilkan kartu yang cocok dan menghitung jumlahnya
    function filterProducts() {
        const keyword = search.value.trim().toLowerCase();
        let count = 0;

        document.querySelectorAll('.product-item').forEach(card => {
            const cocokKategori = category === 'Semua' || card.dataset.category === category;
            const cocokJenis = jenis === 'Semua' || card.dataset.jenis === jenis;
            const cocokNama = card.dataset.name.includes(keyword);
            const show = cocokKategori && cocokJenis && cocokNama;

            card.hidden = !show;
            if (show) {
                count++;
            }
        });

        // Tandai tombol filter yang sedang aktif
        document.querySelectorAll('[data-filter-kategori]').forEach(button => {
            const aktif = button.dataset.filterKategori === category;
            button.classList.toggle('active', aktif);
            button.setAttribute('aria-pressed', aktif);
        });
        document.querySelectorAll('[data-filter-jenis]').forEach(button => {
            const aktif = button.dataset.filterJenis === jenis;
            button.classList.toggle('active', aktif);
            button.setAttribute('aria-pressed', aktif);
        });

        document.getElementById('result-count').textContent = count + ' produk untuk dijelajahi';
        document.getElementById('empty-results').hidden = count > 0;
    }

    // Klik tombol kategori
    document.querySelectorAll('[data-filter-kategori]').forEach(button => {
        button.addEventListener('click', () => {
            category = button.dataset.filterKategori;
            filterProducts();
        });
    });

    // Klik tombol jenis
    document.querySelectorAll('[data-filter-jenis]').forEach(button => {
        button.addEventListener('click', () => {
            jenis = button.dataset.filterJenis;
            filterProducts();
        });
    });

    // Ketik di kolom pencarian
    search.addEventListener('input', filterProducts);

    filterProducts();
}


/* ===== 5. HALAMAN DETAIL PRODUK (detail.html) =====
   Membaca ?id= di URL, mencari produknya di array products,
   lalu mengisi nama, harga, gambar, warna, dan pilihan ukuran.
   Jika id tidak ditemukan, produk pertama yang ditampilkan. */
const addForm = document.getElementById('add-form');

if (addForm) {
    const id = new URLSearchParams(location.search).get('id');
    const product = products.find(p => p.id === id) || products[0];

    // Isi teks halaman
    document.title = product.name + ' | CHERRYBLOSSOM';
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('crumb-name').textContent = product.name;
    document.getElementById('detail-price').textContent = rupiah(product.price);
    document.getElementById('detail-color').textContent = product.color;
    document.getElementById('detail-category').textContent =
        'KOLEKSI ' + product.category.toUpperCase() + ' · ' + product.jenis.toUpperCase();
    document.getElementById('detail-description').textContent = product.description;

    // Isi gambar
    const image = document.getElementById('detail-image');
    image.src = product.image;
    image.alt = product.name + ' berwarna ' + product.color.toLowerCase();

    // Buat pilihan ukuran sesuai produk
    const size = document.getElementById('size');
    product.sizes.forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        size.appendChild(option);
    });

    // Tambahkan ke keranjang saat form dikirim
    addForm.addEventListener('submit', event => {
        event.preventDefault();
        const quantity = Number(document.getElementById('quantity').value);
        const existing = cart.find(item => item.id === product.id && item.size === Number(size.value));

        // Batas maksimal 10 pasang untuk produk + ukuran yang sama
        if (existing && existing.quantity + quantity > 10) {
            document.getElementById('add-status').textContent =
                'Maksimal 10 pasang untuk produk dan ukuran yang sama.';
            return;
        }

        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push({ id: product.id, size: Number(size.value), quantity });
        }

        saveCart();
        document.getElementById('add-status').textContent =
            product.name + ' berhasil ditambahkan. Lihat keranjang untuk melanjutkan.';
    });
}


/* ===== 6. HALAMAN KERANJANG (keranjang.html) =====
   Menampilkan isi keranjang, mengubah jumlah, menghapus barang,
   dan menghitung total belanja (simulasi, tanpa pembayaran). */
const cartItems = document.getElementById('cart-items');

if (cartItems) {
    // Gambar ulang daftar keranjang dan hitung total
    function renderCart() {
        cartItems.innerHTML = '';
        let total = 0;

        // Pesan jika keranjang kosong
        if (!cart.length) {
            cartItems.innerHTML =
                '<div class="empty-state">' +
                '<h2>Masih ada ruang untuk yang manis.</h2>' +
                '<p>Keranjangmu masih kosong.</p>' +
                '<a class="btn btn-cherry" href="produk.html">Jelajahi koleksi ↗</a>' +
                '</div>';
        }

        cart.forEach((item, index) => {
            const p = products.find(p => p.id === item.id);
            total += p.price * item.quantity;

            // Buat satu baris barang
            const row = document.createElement('article');
            row.className = 'cart-row';
            row.innerHTML = `
                <img src="${p.image}" alt="${p.name}">
                <div>
                    <h2><a href="detail.html?id=${p.id}">${p.name}</a></h2>
                    <p>Ukuran ${item.size} · ${rupiah(p.price)}</p>
                    <strong>${rupiah(p.price * item.quantity)}</strong>
                </div>
                <div class="cart-controls">
                    <label class="visually-hidden" for="qty-${index}">Jumlah ${p.name}</label>
                    <input id="qty-${index}" class="form-control cart-quantity" type="number" value="${item.quantity}" min="1" max="10">
                    <button class="remove" type="button" aria-label="Hapus ${p.name} ukuran ${item.size}">Hapus</button>
                </div>`;

            // Ubah jumlah (hanya 1–10)
            row.querySelector('input').addEventListener('change', event => {
                const q = Number(event.target.value);
                if (!Number.isInteger(q) || q < 1 || q > 10) {
                    event.target.value = item.quantity;
                    return;
                }
                item.quantity = q;
                saveCart();
                renderCart();
                document.getElementById('checkout-status').textContent = '';
            });

            // Hapus barang
            row.querySelector('button').addEventListener('click', () => {
                cart.splice(index, 1);
                saveCart();
                renderCart();
                document.getElementById('checkout-status').textContent = '';
            });

            cartItems.appendChild(row);
        });

        // Tampilkan total dan nonaktifkan tombol jika keranjang kosong
        document.getElementById('subtotal').textContent = rupiah(total);
        document.getElementById('total').textContent = rupiah(total);
        document.getElementById('simulate').disabled = !cart.length;
    }

    renderCart();

    // Tombol "Selesaikan simulasi"
    document.getElementById('simulate').addEventListener('click', () => {
        document.getElementById('checkout-status').textContent =
            'Simulasi selesai! Total pilihanmu ' + document.getElementById('total').textContent +
            '. Tidak ada pembayaran atau pesanan yang dibuat.';
    });
}


/* ===== 7. FORM KONTAK (kontak.html) =====
   Validasi tambahan: nama dan pesan tidak boleh hanya berisi spasi.
   Pesan tidak dikirim ke mana pun (simulasi). */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const nama = document.getElementById('name').value.trim();
        const pesan = document.getElementById('message').value.trim();

        if (nama.length < 2 || pesan.length < 10) {
            document.getElementById('form-status').textContent =
                'Isi nama minimal 2 karakter dan pesan minimal 10 karakter, bukan hanya spasi.';
            return;
        }

        document.getElementById('form-status').textContent =
            'Terima kasih! Pesanmu lolos validasi simulasi. Pesan tidak dikirim atau disimpan.';
        contactForm.reset();
    });
}


/* ===== 8. TOMBOL JEDA CAROUSEL (index.html) =====
   Menjeda/melanjutkan pergantian slide. Jika pengguna mengaktifkan
   "kurangi animasi" di perangkatnya, carousel langsung dijeda. */
const pause = document.getElementById('pause-carousel');

if (pause) {
    let paused = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const carousel = bootstrap.Carousel.getOrCreateInstance(document.getElementById('koleksiCarousel'));

    // Terapkan status jeda/jalan dan ganti ikon tombol
    function setPause() {
        if (paused) {
            carousel.pause();
        } else {
            carousel.cycle();
        }
        pause.textContent = paused ? '▷' : 'Ⅱ';
        pause.setAttribute('aria-label', paused ? 'Lanjutkan pergantian slide' : 'Jeda pergantian slide');
    }

    setPause();

    pause.addEventListener('click', () => {
        paused = !paused;
        setPause();
    });
}
