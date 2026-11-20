/* =========================================================
   SCRIPT.JS — JavaScript CHERRYBLOSSOM
   File ini dipakai di semua halaman. Isinya:
   1. Data produk
   2. Fungsi bantu (format Rupiah)
   3. Keranjang (disimpan di localStorage) + angka di navbar
   4. Filter & pencarian produk (produk.html)
   5. Halaman detail produk (detail.html)
   6. Halaman keranjang (keranjang.html)
   6b. Halaman pengiriman + pop-up pesanan (checkout.html)
   7. Form kontak + pop-up (kontak.html)
   Setiap bagian hanya berjalan jika elemennya ada di halaman itu.
   ========================================================= */


/* ===== 1. DATA PRODUK =====
   Semua produk disimpan dalam sebuah array berisi objek.
   - id       : kode unik, dipakai di URL detail.html?id=... dan nama file gambar
   - category : "Dewasa" atau "Anak"
   - jenis    : "Sepatu" atau "Sandal"
   - material : bahan singkat, tampil di kotak "Bahan & perawatan" (detail.html)
   - care     : cara merawat sesuai bahan, tampil di kotak yang sama
   - images   : daftar foto untuk slider di detail.html. Foto pertama
                selalu sama dengan "image" (dipakai kartu & keranjang)
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
        images: ['images/produk/sakura-puni.jpg', 'images/produk/sakura-puni2.jpg'],
        price: 289000,
        color: 'Merah muda',
        sizes: ukuranDewasa,
        description: 'Sneaker pink-putih dengan tali pink tebal yang manis banget, plus garis putih di samping dan bordir pita kecil yang bikin senyum. Bagian dalamnya empuk, jadi kaki tetap nyaman walau dipakai jalan lama. Pas buat jalan santai sambil cari jajanan kesukaan. Padukan dengan rok plisket atau celana jeans biru muda.',
        material: 'Kulit sintetis, sol karet',
        care: 'Lap bagian luar dengan kain lembap, lalu keringkan di tempat teduh. Lepas tali pinknya dan cuci terpisah dengan sabun lembut agar warnanya tetap cerah. Hindari menjemur di bawah terik matahari langsung.'
    },
    {
        id: 'momo-fuwa',
        name: 'Momo Fuwa',
        category: 'Dewasa',
        jenis: 'Sepatu',
        image: 'images/produk/momo-fuwa.jpg',
        images: ['images/produk/momo-fuwa.jpg', 'images/produk/momo-fuwa2.jpg', 'images/produk/momo-fuwa3.jpg'],
        price: 299000,
        color: 'Pink gradasi',
        sizes: ukuranDewasa,
        description: 'Sneaker putih dengan gradasi pink lembut seperti langit sore, lengkap dengan tali pita lebar yang menjuntai manis. Bobotnya ringan dan solnya empuk, jadi nyaman dipakai dari pagi sampai malam. Cocok untuk kuliah, kerja santai, atau nongkrong di kafe. Makin gemas dipadukan dengan kaus putih dan rok denim.',
        material: 'Kulit sintetis, sol karet',
        care: 'Bersihkan noda dengan kain lembap dan sedikit sabun lembut, jangan digosok terlalu keras agar gradasi pinknya tidak pudar. Tali pita bisa dilepas dan dicuci tangan. Keringkan di tempat teduh berangin.'
    },
    {
        id: 'yume-kira',
        name: 'Yume Kira',
        category: 'Dewasa',
        jenis: 'Sepatu',
        image: 'images/produk/yume-kira.jpg',
        images: ['images/produk/yume-kira.jpg', 'images/produk/yume-kira2.jpg', 'images/produk/yume-kira3.jpg'],
        price: 319000,
        color: 'Biru muda',
        sizes: ukuranDewasa,
        description: 'Sneaker biru muda berpadu krem dengan tali tebal bergelombang yang empuk seperti marshmallow. Ada hiasan bunga kecil di sampingnya yang manis kalau dilihat dari dekat. Solnya tebal tapi tetap ringan, nyaman untuk jalan-jalan ke taman atau pusat kota. Serasi dengan kemeja putih, celana kulot, atau dress pastel.',
        material: 'Kulit sintetis, sol karet',
        care: 'Lap permukaan sepatu dengan kain lembap setelah dipakai. Tali krem yang tebal sebaiknya dilepas dan dicuci tangan dengan air sabun, lalu dijemur di tempat teduh. Simpan di tempat kering agar sepatu tidak lembap.'
    },
    {
        id: 'hana-mochi',
        name: 'Hana Mochi',
        category: 'Dewasa',
        jenis: 'Sepatu',
        image: 'images/produk/hana-mochi.jpg',
        images: ['images/produk/hana-mochi.jpg', 'images/produk/hana-mochi2.jpg', 'images/produk/hana-mochi3.jpg'],
        price: 279000,
        color: 'Krem pastel',
        sizes: ukuranDewasa,
        description: 'Sneaker krem pastel dengan aksen kuning dan biru yang ceria, seperti es krim tiga rasa. Tali kremnya tebal dan solnya sedikit tinggi, jadi langkah terasa mantap sekaligus empuk. Asyik dipakai untuk jalan-jalan akhir pekan atau piknik bareng teman. Gampang dipadukan dengan celana jeans, overall, atau kaus warna netral.',
        material: 'Kulit sintetis, sol karet',
        care: 'Lap bagian luar dengan kain lembap dan sabun lembut, terutama pada bagian krem yang mudah terlihat kotor. Sikat sol karet dengan sikat gigi bekas. Keringkan di tempat teduh, jangan dimasukkan ke mesin pengering.'
    },

    // ----- Dewasa · Sandal -----
    {
        id: 'niji-pyon',
        name: 'Niji Pyon',
        category: 'Dewasa',
        jenis: 'Sandal',
        image: 'images/produk/niji-pyon.jpg',
        images: ['images/produk/niji-pyon.jpg'],
        price: 189000,
        color: 'Pink nude',
        sizes: ukuranDewasa,
        description: 'Sandal slide pink nude dengan wajah beruang kecil di bagian depan yang bikin gemas. Solnya tebal, empuk, dan ringan, rasanya seperti menginjak awan. Pas dipakai bersantai di rumah, ke minimarket, atau jalan-jalan sore di taman. Cocok dipadukan dengan celana kulot putih atau setelan santai warna pastel.',
        material: 'EVA (karet ringan)',
        care: 'Cukup bilas dengan air dan sabun lembut, lalu lap sampai kering. Bersihkan sela wajah beruang dengan sikat lembut. Jauhkan dari panas langsung seperti terik matahari atau dekat kompor agar bentuknya tidak berubah.'
    },
    {
        id: 'riri-chuu',
        name: 'Riri Chuu',
        category: 'Dewasa',
        jenis: 'Sandal',
        image: 'images/produk/riri-chuu.jpg',
        images: ['images/produk/riri-chuu.jpg', 'images/produk/riri-chuu2.jpg', 'images/produk/riri-chuu3.jpg'],
        price: 159000,
        color: 'Merah muda',
        sizes: ukuranDewasa,
        description: 'Sandal jepit platform pink dengan hiasan kucing kecil berpita di bagian tali yang imut banget. Solnya tebal sehingga langkah terasa sedikit lebih tinggi, tapi tetap ringan dan empuk. Cocok untuk jalan-jalan sore, ke pantai, atau main ke rumah teman. Padukan dengan dress katun atau celana pendek denim.',
        material: 'EVA (karet ringan)',
        care: 'Bilas dengan air bersih setelah dipakai, apalagi setelah dari pantai. Gosok sol dengan sabun lembut, lalu lap hingga kering. Jangan dijemur terlalu lama di bawah matahari agar sol platform tidak melengkung.'
    },
    {
        id: 'lulu-sora',
        name: 'Lulu Sora',
        category: 'Dewasa',
        jenis: 'Sandal',
        image: 'images/produk/lulu-sora.jpg',
        images: ['images/produk/lulu-sora.jpg', 'images/produk/lulu-sora2.jpg', 'images/produk/lulu-sora3.jpg'],
        price: 229000,
        color: 'Krem cokelat',
        sizes: ukuranDewasa,
        description: 'Sandal slide krem dengan sol cokelat dan hiasan beruang kecil berpita yang manis. Bagian atasnya bergelombang lembut, jadi kaki terasa nyaman dan tidak mudah lecet. Kalem dan rapi untuk dipakai di rumah, ke kafe, atau jalan dekat. Serasi dengan setelan warna krem, cokelat susu, atau putih.',
        material: 'EVA (karet ringan)',
        care: 'Lap bagian krem dengan kain lembap dan sedikit sabun agar tetap bersih. Hiasan beruang cukup dibersihkan dengan sikat lembut, jangan ditarik. Keringkan di tempat teduh dan jauhkan dari sumber panas.'
    },
    {
        id: 'nana-puru',
        name: 'Nana Puru',
        category: 'Dewasa',
        jenis: 'Sandal',
        image: 'images/produk/nana-puru.jpg',
        images: ['images/produk/nana-puru.jpg', 'images/produk/nana-puru2.jpg'],
        price: 199000,
        color: 'Pink stroberi',
        sizes: ukuranDewasa,
        description: 'Sandal rumah pink dengan bulu lembut dan pita besar bermotif stroberi yang segar. Begitu dipakai, kaki langsung terasa hangat dan empuk, cocok untuk pagi yang dingin. Teman setia saat santai di rumah, nonton film, atau sarapan di akhir pekan. Makin manis dipadukan dengan piyama atau baju rumah warna pastel.',
        material: 'Kain lembut berbulu, sol karet',
        care: 'Bersihkan bulu dengan sikat lembut atau lap lembap, jangan direndam. Jika perlu dicuci, kucek perlahan dengan air dingin dan sabun lembut, lalu angin-anginkan sampai benar-benar kering. Sisir bulu perlahan agar tetap halus.'
    },

    // ----- Anak · Sepatu -----
    {
        id: 'koko-tobi',
        name: 'Koko Tobi',
        category: 'Anak',
        jenis: 'Sepatu',
        image: 'images/produk/koko-tobi.jpg',
        images: ['images/produk/koko-tobi.jpg', 'images/produk/koko-tobi2.jpg'],
        price: 219000,
        color: 'Krem cokelat',
        sizes: ukuranAnak,
        description: 'Sneaker anak krem dengan aksen cokelat dan tali tebal yang lucu, seperti kue cokelat susu. Bobotnya ringan untuk si kecil yang hobi lompat-lompat, dan solnya bergerigi agar tidak licin. Bagian dalamnya empuk dan mudah dipakai. Cocok untuk sekolah atau bermain di taman, serasi dengan overall dan kaus warna cerah.',
        material: 'Kulit sintetis, sol karet',
        care: 'Lap bagian luar dengan kain lembap setiap selesai bermain. Lepas tali tebalnya dan cuci terpisah dengan sabun lembut. Keringkan di tempat teduh agar warna krem tidak menguning.'
    },
    {
        id: 'pipi-kumo',
        name: 'Pipi Kumo',
        category: 'Anak',
        jenis: 'Sepatu',
        image: 'images/produk/pipi-kumo.jpg',
        images: ['images/produk/pipi-kumo.jpg', 'images/produk/pipi-kumo2.jpg'],
        price: 209000,
        color: 'Putih pink',
        sizes: ukuranAnak,
        description: 'Sneaker anak putih-pink bergambar kartun lucu dengan tali perekat yang praktis. Si kecil bisa memakainya sendiri tanpa repot mengikat tali. Bobotnya ringan dan solnya tidak licin, jadi aman untuk berlari dan bermain. Bikin semangat berangkat sekolah, dan cocok dipadukan dengan rok, celana jeans, atau seragam olahraga.',
        material: 'Kulit sintetis, sol karet',
        care: 'Lap gambar kartun dengan kain lembap, jangan disikat keras agar gambarnya tidak rusak. Bersihkan perekat dari rambut atau serat kain supaya tetap rekat. Keringkan di tempat teduh.'
    },
    {
        id: 'mimi-usa',
        name: 'Mimi Usa',
        category: 'Anak',
        jenis: 'Sepatu',
        image: 'images/produk/mimi-usa.jpg',
        images: ['images/produk/mimi-usa.jpg', 'images/produk/mimi-usa2.jpg'],
        price: 229000,
        color: 'Pink glitter',
        sizes: ukuranAnak,
        description: 'Sepatu anak model tinggi berwarna pink yang berkilau, lengkap dengan hiasan hati dan perekat yang praktis. Si kecil bisa memakai dan melepasnya sendiri dengan mudah. Solnya tidak licin dan bobotnya ringan, jadi tetap lincah saat bermain di luar. Cantik dipadukan dengan dress, rok tutu, atau legging motif.',
        material: 'Kanvas glitter, sol karet',
        care: 'Sikat pelan bagian kanvas dengan sikat lembut dan sedikit air sabun, jangan digosok keras agar glitter tidak rontok. Bersihkan sol karet dengan lap basah. Keringkan di tempat teduh, jangan dimasukkan mesin cuci.'
    },
    {
        id: 'chibi-hoshi',
        name: 'Chibi Hoshi',
        category: 'Anak',
        jenis: 'Sepatu',
        image: 'images/produk/chibi-hoshi.jpg',
        images: ['images/produk/chibi-hoshi.jpg', 'images/produk/chibi-hoshi2.jpg', 'images/produk/chibi-hoshi3.jpg'],
        price: 199000,
        color: 'Putih pink',
        sizes: ukuranAnak,
        description: 'Sepatu boots anak putih-pink dengan aksen ungu dan hiasan bunga yang manis. Bagian dalamnya lembut dan hangat, nyaman untuk kaki mungil saat cuaca dingin. Ada perekat di samping sehingga mudah dipakai sendiri, dan solnya tidak licin. Cocok untuk jalan-jalan keluarga, dipadukan dengan jaket, legging, atau celana panjang.',
        material: 'Kulit sintetis, sol karet',
        care: 'Lap bagian luar dengan kain lembap, lalu keringkan di tempat teduh. Bagian dalam yang lembut cukup diangin-anginkan agar tidak lembap dan bau. Jaga perekat tetap bersih supaya mudah ditutup.'
    },

    // ----- Anak · Sandal -----
    {
        id: 'nini-pyoko',
        name: 'Nini Pyoko',
        category: 'Anak',
        jenis: 'Sandal',
        image: 'images/produk/nini-pyoko.jpg',
        images: ['images/produk/nini-pyoko.jpg', 'images/produk/nini-pyoko2.jpg'],
        price: 129000,
        color: 'Hijau alpukat',
        sizes: ukuranAnak,
        description: 'Sandal clog anak hijau alpukat dengan hiasan alpukat dan karakter kecil yang menggemaskan. Bahannya ringan dan empuk, ditambah tali belakang agar sandal tidak mudah lepas. Si kecil bisa memakainya sendiri, dan solnya tidak licin untuk main di teras atau taman. Lucu dipadukan dengan kaus kuning atau celana pendek hijau.',
        material: 'EVA (karet ringan)',
        care: 'Lepas hiasan alpukat dulu, lalu cuci sandal dengan air dan sabun lembut. Lap sampai kering dan pasang kembali hiasannya. Jangan dijemur di bawah terik matahari agar bentuk sandal tetap bagus.'
    },
    {
        id: 'tete-miru',
        name: 'Tete Miru',
        category: 'Anak',
        jenis: 'Sandal',
        image: 'images/produk/tete-miru.jpg',
        images: ['images/produk/tete-miru.jpg', 'images/produk/tete-miru2.jpg'],
        price: 139000,
        color: 'Pink unicorn',
        sizes: ukuranAnak,
        description: 'Sandal clog anak pink bergambar unicorn dan tulisan warna-warni yang ajaib. Bobotnya ringan, mudah dipakai sendiri, dan tali belakangnya membantu sandal tetap di kaki saat berlari. Solnya tidak licin, cocok untuk main air, ke taman, atau liburan. Pas untuk si kecil yang suka dongeng, dipadukan dengan dress atau kaus ceria.',
        material: 'EVA (karet ringan)',
        care: 'Bilas dengan air bersih setelah main air atau ke taman. Gambar unicorn cukup dilap dengan kain lembut, jangan disikat keras. Keringkan di tempat teduh dan jauhkan dari benda panas.'
    },
    {
        id: 'popo-niko',
        name: 'Popo Niko',
        category: 'Anak',
        jenis: 'Sandal',
        image: 'images/produk/popo-niko.jpg',
        images: ['images/produk/popo-niko.jpg', 'images/produk/popo-niko2.jpg'],
        price: 149000,
        color: 'Putih',
        sizes: ukuranAnak,
        description: 'Sandal slide anak putih dengan gambar wajah anak perempuan berpita merah yang tersenyum. Modelnya simpel tanpa tali, jadi si kecil bisa langsung memakainya sendiri. Bahannya ringan, empuk, dan solnya tidak licin di lantai basah. Cocok untuk bersantai di rumah atau setelah mandi, serasi dengan kaus dan celana pendek apa saja.',
        material: 'EVA (karet ringan)',
        care: 'Cuci dengan air dan sabun lembut, lalu lap hingga kering agar warna putihnya tetap bersih. Bagian gambar wajah cukup dilap pelan. Simpan jauh dari panas matahari langsung supaya tidak menguning.'
    },
    {
        id: 'yuyu-puka',
        name: 'Yuyu Puka',
        category: 'Anak',
        jenis: 'Sandal',
        image: 'images/produk/yuyu-puka.jpg',
        images: ['images/produk/yuyu-puka.jpg', 'images/produk/yuyu-puka2.jpg', 'images/produk/yuyu-puka3.jpg'],
        price: 119000,
        color: 'Putih',
        sizes: ukuranAnak,
        description: 'Sandal clog anak putih dengan hiasan pita dan karakter kucing kecil yang manis. Bahannya ringan dan empuk, dan ada tali belakang yang membuat sandal tidak mudah lepas. Mudah dipakai sendiri dan solnya tidak licin, aman untuk bermain di rumah atau halaman. Teman setia si kecil, cocok dipadukan dengan baju main warna pastel.',
        material: 'EVA (karet ringan)',
        care: 'Lepas charm pita dan kucing sebelum dicuci, lalu bersihkan sandal dengan air sabun. Lap sampai kering dan pasang lagi charm-nya. Simpan di tempat teduh agar warna putihnya tidak kusam.'
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

    // Kata dari pencarian navbar, contoh: produk.html?cari=sakura
    // Jika ada, isi kolom pencarian halaman ini (lalu disaring di bawah)
    var kataDariUrl = params.get('cari');
    if (kataDariUrl) {
        search.value = kataDariUrl;
    }

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
    document.getElementById('detail-material').textContent = product.material; // bahan
    document.getElementById('detail-care').textContent = product.care;         // cara merawat
    document.getElementById('detail-category').textContent =
        'KOLEKSI ' + product.category.toUpperCase() + ' · ' + product.jenis.toUpperCase();

    // Isi gambar
    var gambar = document.getElementById('detail-image');
    gambar.src = product.image;
    gambar.alt = product.name + ' berwarna ' + product.color.toLowerCase();

    // Lebih dari 1 foto: ganti gambar biasa dengan Carousel Bootstrap
    if (product.images.length > 1) {
        var indikator = '';
        var slide = '';
        for (var f = 0; f < product.images.length; f++) {
            var aktif = (f === 0) ? ' active' : '';
            indikator += `<button type="button" data-bs-target="#foto-carousel" data-bs-slide-to="${f}"
                class="${aktif}" ${f === 0 ? 'aria-current="true"' : ''} aria-label="Foto ${f + 1}"></button>`;
            slide += `<div class="carousel-item${aktif}">
                <img src="${product.images[f]}" alt="${product.name} - foto ${f + 1}">
            </div>`;
        }

        document.querySelector('.detail-photo').innerHTML = `
            <div id="foto-carousel" class="carousel slide detail-carousel"
                 data-bs-ride="carousel" data-bs-interval="4000" data-bs-pause="hover">
                <div class="carousel-indicators">${indikator}</div>
                <div class="carousel-inner">${slide}</div>
                <button class="carousel-control-prev" type="button" data-bs-target="#foto-carousel" data-bs-slide="prev">
                    <span aria-hidden="true">←</span>
                    <span class="visually-hidden">Foto sebelumnya</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#foto-carousel" data-bs-slide="next">
                    <span aria-hidden="true">→</span>
                    <span class="visually-hidden">Foto berikutnya</span>
                </button>
            </div>
        `;

        // Carousel dibuat setelah halaman dimuat, jadi diaktifkan manual
        // agar tetap berganti otomatis (berhenti saat kursor di atas foto)
        bootstrap.Carousel.getOrCreateInstance(document.getElementById('foto-carousel'), {
            interval: 4000,
            pause: 'hover',
            ride: 'carousel'
        });
    }

    // Buat pilihan ukuran (<option>) sesuai ukuran produk
    var pilihanUkuran = document.getElementById('size');
    for (var u = 0; u < product.sizes.length; u++) {
        var option = document.createElement('option');
        option.value = product.sizes[u];
        option.textContent = product.sizes[u];
        pilihanUkuran.appendChild(option);
    }

    // Saat tombol "Tambah ke keranjang" atau "Beli sekarang" ditekan
    addForm.addEventListener('submit', function (event) {
        event.preventDefault(); // jangan muat ulang halaman

        var ukuran = Number(pilihanUkuran.value);
        var jumlah = Number(document.getElementById('quantity').value);
        var pesan = document.getElementById('add-status');

        // event.submitter = tombol yang diklik.
        // "Beli sekarang": keranjang TIDAK diubah. Barang ini disimpan dengan
        // kunci terpisah, lalu pindah ke checkout dalam mode beli.
        if (event.submitter && event.submitter.id === 'btn-beli') {
            var barangBeli = { id: product.id, size: ukuran, quantity: jumlah };
            localStorage.setItem('cherryblossom-beli-sekarang', JSON.stringify(barangBeli));
            window.location.href = 'checkout.html?mode=beli';
            return;
        }

        // "Tambah ke keranjang":
        // cek apakah produk dengan ukuran yang sama sudah ada di keranjang
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
        pesan.textContent = ''; // hapus pesan error sebelumnya (jika ada)

        // Isi teks pop-up lalu tampilkan
        document.getElementById('add-modal-text').textContent =
            product.name + ' · Ukuran ' + ukuran + ' · ' + jumlah + ' pasang sudah masuk ke keranjangmu.';

        var modal = new bootstrap.Modal(document.getElementById('add-modal'));
        modal.show();
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

        // Tampilkan total; sembunyikan tombol "Lanjut ke pengiriman" jika kosong
        document.getElementById('subtotal').textContent = rupiah(total);
        document.getElementById('total').textContent = rupiah(total);
        document.getElementById('to-checkout').hidden = (cart.length === 0);
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
        }
    });

    // Saat tombol "Hapus" diklik
    cartItems.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove')) {
            var index = event.target.dataset.index;
            cart.splice(index, 1); // buang 1 barang pada posisi index
            saveCart();
            renderCart();
        }
    });

    // Gambar keranjang saat halaman dibuka
    renderCart();
}


/* ===== 6b. HALAMAN PENGIRIMAN (checkout.html) =====
   Menampilkan ringkasan pesanan dari keranjang, lalu saat form
   pengiriman valid dan dikirim: keranjang dikosongkan dan pop-up
   (Modal Bootstrap) "Pesanan berhasil!" ditampilkan. */
var checkoutForm = document.getElementById('checkout-form');

if (checkoutForm) {
    var orderItems = document.getElementById('order-items');
    var orderTotal = 0;

    // Baca ?mode= dari URL (sama seperti ?id= di halaman detail).
    // mode=beli  -> hanya barang dari tombol "Beli sekarang"
    // tanpa mode -> seluruh isi keranjang
    var modeCheckout = new URLSearchParams(window.location.search).get('mode');
    var modeBeli = (modeCheckout === 'beli');
    var daftarPesanan = cart;

    if (modeBeli) {
        var barangBeli = JSON.parse(localStorage.getItem('cherryblossom-beli-sekarang'));
        daftarPesanan = barangBeli ? [barangBeli] : [];

        // Tombol kembali mengarah ke halaman detail produk tersebut
        if (barangBeli) {
            var tombolKembali = document.getElementById('checkout-back');
            tombolKembali.href = 'detail.html?id=' + barangBeli.id;
            tombolKembali.textContent = '← Kembali ke produk';
        }
    }

    // Buat daftar barang singkat: foto kecil, nama, ukuran, jumlah, harga
    for (var i = 0; i < daftarPesanan.length; i++) {
        var item = daftarPesanan[i];
        var p = cariProduk(item.id);

        if (!p) {
            continue; // lewati produk yang sudah tidak ada di data
        }

        var subtotalBarang = p.price * item.quantity;
        orderTotal = orderTotal + subtotalBarang;

        var li = document.createElement('li');
        li.className = 'order-item d-flex align-items-center gap-3';
        li.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <div class="flex-grow-1">
                <strong>${p.name}</strong>
                <small>Ukuran ${item.size} · ${item.quantity} pasang</small>
            </div>
            <span class="order-price">${rupiah(subtotalBarang)}</span>
        `;
        orderItems.appendChild(li);
    }
    document.getElementById('order-total').textContent = rupiah(orderTotal);

    // Tidak ada barang: sembunyikan form, tampilkan pesan kosong
    if (daftarPesanan.length === 0) {
        document.getElementById('checkout-content').hidden = true;
        document.getElementById('checkout-empty').hidden = false;
    }

    // Browser sudah memeriksa required, pattern, dan minlength.
    // Event submit hanya terjadi jika semua kolom valid.
    checkoutForm.addEventListener('submit', function (event) {
        event.preventDefault(); // jangan muat ulang halaman

        if (daftarPesanan.length === 0) {
            return;
        }

        // Cek tambahan: alamat tidak boleh hanya berisi spasi
        var alamat = document.getElementById('co-address').value.trim();
        var status = document.getElementById('checkout-status');

        if (alamat.length < 10) {
            status.textContent = 'Isi alamat lengkap minimal 10 karakter, bukan hanya spasi.';
            return;
        }
        status.textContent = '';

        // Simpan nama dan total dulu, sebelum keranjang dikosongkan
        var nama = document.getElementById('co-name').value.trim();
        var totalTeks = document.getElementById('order-total').textContent;

        if (modeBeli) {
            // Mode beli: hapus data "beli sekarang" saja, keranjang tetap utuh
            localStorage.removeItem('cherryblossom-beli-sekarang');
        } else {
            // Dari keranjang: kosongkan keranjang (saveCart juga membuat angka navbar jadi 0)
            cart = [];
            saveCart();
        }

        // Penanda langkah: langkah 2 selesai, langkah 3 "Selesai" aktif
        var step2 = document.getElementById('step-2');
        var step3 = document.getElementById('step-3');
        step2.className = 'step done';
        step2.removeAttribute('aria-current');
        step3.className = 'step active';
        step3.setAttribute('aria-current', 'step');

        // Isi teks pop-up lalu tampilkan
        document.getElementById('order-modal-text').textContent =
            'Terima kasih, ' + nama + '! Pesananmu senilai ' + totalTeks + ' sudah kami terima.';
        checkoutForm.reset();

        var modal = new bootstrap.Modal(document.getElementById('order-modal'));
        modal.show();
    });
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

        // Lolos validasi: kosongkan pesan error, isi teks pop-up, lalu tampilkan
        status.textContent = '';
        document.getElementById('contact-modal-text').textContent =
            'Terima kasih, ' + nama + '! Kami akan segera membalas pesanmu.';

        var modal = new bootstrap.Modal(document.getElementById('contact-modal'));
        modal.show();

        contactForm.reset();
    });
}
