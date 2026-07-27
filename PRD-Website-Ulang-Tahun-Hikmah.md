# PRD — Website Ulang Tahun Hikmah Sulianti

**Nama proyek:** Hikmah — Chapter 20  
**Lokasi proyek:** `G:/ultah-hikmah`  
**Jenis produk:** Website ulang tahun satu halaman  
**Target utama:** Hikmah Sulianti  
**Pengirim:** Daffa Al Syaddad  
**Tanggal ulang tahun:** 28 Juli 2026  
**Usia:** 20 tahun  
**Status dokumen:** Siap dieksekusi oleh OpenCode

---

## 1. Ringkasan Produk

Website ini merupakan hadiah ulang tahun digital yang romantis untuk **Hikmah Sulianti** saat memasuki usia **20 tahun** pada **28 Juli 2026**.

Pengalaman visual mengambil inspirasi dari tampilan platform streaming sinematik: hero section yang kuat, informasi seperti judul film, tombol aksi, deretan kartu foto horizontal, efek hover, serta transisi yang halus. Desain tidak boleh menyalin logo, nama merek, atau aset Netflix secara langsung.

Karakter visual utama:

- Pink romantis dan feminin.
- Latar gelap bernuansa plum agar kartu foto terasa sinematik.
- Aksen blush pink, rose, magenta, dan putih hangat.
- Terlihat modern, personal, emosional, tetapi tidak berlebihan.
- Nyaman digunakan melalui desktop maupun ponsel.

Website bersifat statis, tanpa akun, database, dashboard, atau backend.

---

## 2. Tujuan Produk

### 2.1 Tujuan Utama

1. Memberikan kejutan ulang tahun digital yang personal untuk Hikmah.
2. Menampilkan foto-foto Hikmah dan momen bersama dalam bentuk kartu sinematik.
3. Menyampaikan ucapan ulang tahun dan doa dari Daffa.
4. Menampilkan hitung mundur menuju 28 Juli 2026.
5. Menghadirkan pengalaman yang terasa spesial saat countdown selesai.

### 2.2 Indikator Keberhasilan

Produk dianggap berhasil apabila:

- Hikmah langsung memahami bahwa website dibuat khusus untuk ulang tahunnya.
- Countdown menunjukkan waktu yang tepat menuju 28 Juli 2026 pukul 00.00 WIB.
- Setelah waktu ulang tahun tiba, countdown berubah menjadi ucapan ulang tahun ke-20.
- Foto tampil rapi, responsif, dan tidak terdistorsi.
- Ucapan serta doa mudah dibaca.
- Website tetap nyaman digunakan pada layar ponsel berukuran kecil.
- Tidak ada error pada console browser.
- Website dapat dibuka sebagai situs statis tanpa server backend.

---

## 3. Ruang Lingkup

### 3.1 Termasuk dalam MVP

- Single-page birthday website.
- Hero section sinematik.
- Identitas Hikmah dan usia ke-20.
- Countdown real-time menuju tanggal ulang tahun.
- Mode setelah ulang tahun tiba.
- Galeri foto berbentuk card.
- Deretan card horizontal seperti katalog streaming.
- Ucapan dari Daffa Al Syaddad.
- Bagian doa dan harapan.
- Animasi ringan menggunakan CSS.
- Navigasi scroll menuju bagian tertentu.
- Responsive design.
- Optimasi dasar gambar dan aksesibilitas.

### 3.2 Tidak Termasuk

- Backend.
- Database.
- Login atau registrasi.
- Dashboard admin.
- Fitur upload foto dari browser.
- Komentar pengunjung.
- Integrasi media sosial.
- Sistem pembayaran.
- React, Vue, Next.js, atau framework JavaScript lain.
- Library animasi berat.
- Autoplay musik.
- Penyalinan logo atau elemen merek Netflix.

---

## 4. Keputusan Teknis Utama

Stack utama:

- HTML5.
- Tailwind CSS.
- CSS tambahan untuk animasi dan detail visual.
- Vanilla JavaScript minimal.

JavaScript hanya digunakan untuk:

1. Countdown real-time.
2. Mengubah tampilan saat tanggal ulang tahun telah tiba.
3. Smooth interaction sederhana apabila tidak dapat ditangani langsung oleh CSS.
4. Kontrol galeri horizontal apabila tombol navigasi kartu digunakan.

> Catatan: countdown tanggal real-time tidak dapat dibuat hanya dengan HTML dan CSS. Karena itu, vanilla JavaScript wajib digunakan secara minimal. Tidak boleh menambahkan framework JavaScript.

---

## 5. Target Pengguna

### Pengguna Utama

**Hikmah Sulianti**, perempuan yang berulang tahun ke-20 pada 28 Juli 2026.

### Pengguna Sekunder

Daffa Al Syaddad, sebagai pembuat dan pengirim hadiah digital.

### Konteks Penggunaan

- Dibuka melalui tautan yang dikirim pada malam atau hari ulang tahun.
- Mayoritas kemungkinan dibuka melalui ponsel.
- Bisa dibuka kembali sebagai album digital pribadi.

---

## 6. Konsep Kreatif

### 6.1 Nama Pengalaman

**HIKMAH — CHAPTER 20**

Alternatif tulisan pendukung:

- `A Daffa Al Syaddad Original`
- `Now Entering Her Twenties`
- `Premiering 28 July 2026`
- `A Story Worth Celebrating`

### 6.2 Ide Utama

Website diperlakukan seperti halaman film spesial tentang Hikmah. Hero section menjadi “poster utama”, sedangkan foto-foto disusun seperti koleksi episode atau momen pilihan.

Pengalaman dibagi menjadi beberapa “bab”:

1. **Opening Scene** — hero dan countdown.
2. **Favorite Moments** — deretan kartu foto.
3. **The Birthday Message** — ucapan dari Daffa.
4. **A Prayer for Hikmah** — doa dan harapan.
5. **The Next Chapter** — penutup untuk memasuki usia 20 tahun.

### 6.3 Karakter Emosional

- Hangat.
- Romantis.
- Personal.
- Tulus.
- Sedikit playful.
- Tidak terlalu ramai atau kekanak-kanakan.

---

## 7. Arah Visual

### 7.1 Palet Warna

Gunakan kombinasi berikut sebagai acuan:

| Fungsi | Warna | Hex |
|---|---|---|
| Background utama | Deep Plum | `#160A14` |
| Background sekunder | Dark Rose | `#2A1023` |
| Pink utama | Hot Pink | `#FF4FA3` |
| Pink lembut | Blush Pink | `#FFB7D5` |
| Aksen | Rose Magenta | `#E92F85` |
| Highlight lembut | Pale Pink | `#FFE4EF` |
| Teks utama | Warm White | `#FFF8FB` |
| Teks sekunder | Dusty Pink Gray | `#D8B8C8` |

Warna dapat disesuaikan sedikit selama tetap konsisten dan memiliki kontras yang baik.

### 7.2 Gradient Utama

Contoh arah gradient:

```css
background:
  radial-gradient(circle at top right, rgba(255, 79, 163, 0.22), transparent 35%),
  linear-gradient(180deg, #160A14 0%, #2A1023 50%, #160A14 100%);
```

### 7.3 Tipografi

Gunakan font yang mudah dibaca dan tersedia melalui layanan font web atau fallback sistem.

Rekomendasi:

- Judul: `Playfair Display`, `DM Serif Display`, atau serif elegan.
- Isi: `Inter`, `Poppins`, atau sans-serif modern.

Fallback harus selalu tersedia.

### 7.4 Bentuk dan Detail

- Card menggunakan rounded corner sedang, tidak terlalu bulat.
- Bayangan lembut dengan glow pink tipis.
- Border transparan berwarna pink.
- Hover card: naik sedikit, membesar maksimal sekitar 3–5%, dan menampilkan caption.
- Gunakan efek glass secukupnya, bukan pada seluruh komponen.
- Tambahkan dekorasi hati atau sparkle yang sangat ringan.
- Hindari animasi berlebihan.

---

## 8. Struktur Halaman

Website adalah satu halaman dengan urutan berikut:

1. Fixed navigation.
2. Hero section.
3. Countdown panel.
4. Photo row: “Hikmah’s Favorite Moments”.
5. Photo row: “A Story Through Pictures”.
6. Birthday message.
7. Prayer and wishes.
8. Closing section.
9. Footer.

---

## 9. Detail Fitur dan Komponen

## 9.1 Navigation Bar

### Tujuan

Memberikan identitas situs dan akses cepat ke bagian utama.

### Isi

- Logo teks: `HIKMAH`
- Badge kecil: `20`
- Menu:
  - Home
  - Moments
  - Message
  - Prayer

### Perilaku

- Posisi fixed di atas.
- Transparan saat berada di hero.
- Menjadi lebih solid saat halaman di-scroll.
- Pada mobile, menu dapat disederhanakan menjadi tombol menuju gallery dan message.
- Tidak perlu hamburger menu kompleks jika empat menu masih dapat ditampilkan dengan baik.

---

## 9.2 Hero Section

### Isi Utama

Eyebrow:

> A Daffa Al Syaddad Original

Judul:

> HIKMAH  
> CHAPTER 20

Metadata:

> 28 July 2026 · Turning 20 · Birthday Special

Deskripsi:

> Sebuah cerita tentang Hikmah Sulianti, perempuan istimewa yang kini memasuki bab baru dalam hidupnya. Bab tentang tumbuh, bermimpi, mencintai, dan menjadi versi terbaik dari dirinya.

Tombol utama:

> Mulai Ceritanya

Tombol sekunder:

> Lihat Pesan Daffa

### Visual

- Gunakan satu foto utama Hikmah sebagai background atau portrait besar.
- Tambahkan dark gradient overlay agar teks tetap terbaca.
- Foto harus memiliki `object-position` yang dapat disesuaikan.
- Pada mobile, tinggi hero minimal memenuhi sebagian besar viewport.
- Tambahkan animasi fade-in ringan saat halaman pertama dibuka.

### Perilaku Tombol

- `Mulai Ceritanya` scroll ke galeri foto.
- `Lihat Pesan Daffa` scroll ke bagian ucapan.

---

## 9.3 Countdown Menuju Ulang Tahun

### Target Waktu

```text
2026-07-28T00:00:00+07:00
```

Zona waktu: WIB / Asia/Jakarta.

### Unit Countdown

- Hari.
- Jam.
- Menit.
- Detik.

### Tampilan

Gunakan empat kotak countdown dengan:

- Angka besar.
- Label kecil.
- Border pink transparan.
- Background dark glass.
- Glow pink tipis.

### Perilaku Sebelum Tanggal Ulang Tahun

Tampilkan:

> Menuju Chapter 20

dan countdown aktif.

### Perilaku Saat atau Setelah Tanggal Ulang Tahun

Countdown harus berhenti pada nol dan diganti menjadi:

> Happy 20th Birthday, Hikmah! 💗  
> Chapter 20 resmi dimulai.

Tombol hero dapat berubah menjadi:

> Buka Hadiahmu

Tidak perlu melakukan reload halaman.

### Error Handling

- Jika JavaScript gagal membaca waktu, tampilkan teks fallback:
  `28 Juli 2026 — Hari spesial Hikmah`.
- Countdown tidak boleh menunjukkan angka negatif.
- Interval harus dihentikan ketika target telah tercapai.

---

## 9.4 Galeri Foto Bergaya Katalog Streaming

### Tujuan

Menampilkan foto Hikmah dan momen-momen pilihan sebagai bagian paling visual dari website.

### Jumlah Foto

MVP menggunakan sekitar 8–12 foto.

### Struktur Folder

```text
assets/images/
├── hero-hikmah.webp
├── hikmah-01.webp
├── hikmah-02.webp
├── hikmah-03.webp
├── hikmah-04.webp
├── hikmah-05.webp
├── hikmah-06.webp
├── hikmah-07.webp
├── hikmah-08.webp
└── placeholder.webp
```

Nama file dapat menggunakan JPG atau PNG apabila WebP belum tersedia.

### Row Pertama

Judul:

> Hikmah’s Favorite Moments

Isi:

- 5–6 kartu horizontal.
- Fokus pada portrait dan candid terbaik.

### Row Kedua

Judul:

> A Story Through Pictures

Isi:

- 4–6 kartu.
- Dapat berisi foto bersama, perjalanan, aktivitas, atau momen sederhana.

### Bentuk Card

- Desktop: rasio sekitar 3:4 atau 4:5.
- Mobile: card tetap cukup besar agar foto terlihat.
- Card menggunakan `object-cover`.
- Caption tampil di bagian bawah saat hover atau selalu terlihat secara tipis pada mobile.

### Caption Default

Gunakan caption yang netral dan mudah diganti:

- `Your beautiful smile`
- `One of my favorite moments`
- `A memory worth keeping`
- `You make ordinary days special`
- `My favorite person`
- `More chapters with you`

### Interaksi

- Galeri dapat di-scroll horizontal.
- Sembunyikan scrollbar secara visual tanpa menonaktifkan kemampuan scroll.
- Desktop boleh memiliki tombol panah kiri dan kanan.
- Hover menampilkan overlay gradient dan caption.
- Mobile menggunakan swipe.
- Card tidak perlu membuka modal pada MVP agar implementasi tetap sederhana.

### Fallback Gambar

Apabila foto gagal dimuat:

- Gunakan `placeholder.webp`.
- Alt text tetap menggambarkan konteks.
- Layout tidak boleh rusak.

---

## 9.5 Birthday Message

### Judul

> A Message for My Favorite Person

### Isi Ucapan Final

> Selamat ulang tahun ke-20, Hikmah Sulianti. Terima kasih sudah hadir dan menjadi bagian paling manis dalam hari-hariku. Di usia yang baru ini, semoga kamu semakin bahagia, semakin kuat, dan semakin dekat dengan semua impianmu.
>
> Aku bangga dengan setiap proses yang sudah kamu lewati. Jangan pernah meragukan dirimu sendiri, karena kamu punya begitu banyak hal baik yang mungkin kadang tidak kamu sadari. Semoga senyummu selalu punya banyak alasan untuk kembali.
>
> Terima kasih sudah menjadi Hikmah yang aku kenal dan aku sayang. Aku berharap bisa terus menemani banyak cerita, perjalanan, dan bab baru setelah ini.
>
> Selamat memasuki Chapter 20, sayang.
>
> **Dari Daffa Al Syaddad, pacar kamu.**

### Visual

- Gunakan layout seperti featured content.
- Satu sisi berisi foto.
- Satu sisi berisi pesan.
- Pada mobile menjadi satu kolom.
- Gunakan background dark rose dengan border pink lembut.
- Tanda tangan Daffa dapat menggunakan font script secukupnya.

---

## 9.6 Prayer and Wishes

### Judul

> My Prayer for You

### Isi Doa Final

> Ya Allah, jagalah Hikmah dalam setiap langkahnya. Panjangkan umurnya dalam kebaikan, sehatkan tubuh dan hatinya, mudahkan setiap urusannya, serta berkahi ilmu, rezeki, keluarga, dan masa depannya.
>
> Jauhkan Hikmah dari kesedihan yang terlalu berat, dari orang-orang yang berniat buruk, dan dari jalan yang tidak baik. Berikan ia kekuatan ketika menghadapi kesulitan, ketenangan ketika merasa lelah, serta keberanian untuk meraih semua cita-citanya.
>
> Semoga hubungan kami selalu dipenuhi kejujuran, kesabaran, rasa saling menghargai, kasih sayang, dan arah yang baik. Semoga kami dapat bertumbuh menjadi pribadi yang lebih baik dan saling mendukung dalam setiap proses.
>
> Aamiin.

### Wishes Cards

Tampilkan tiga kartu kecil:

1. **Happiness**  
   Semoga hari-harimu selalu dipenuhi alasan untuk tersenyum.

2. **Health**  
   Semoga kamu selalu diberikan kesehatan dan kekuatan.

3. **Dreams**  
   Semoga satu per satu impianmu menemukan jalannya.

---

## 9.7 Closing Section

### Judul

> The Best Is Yet to Come

### Copy

> Ini bukan akhir cerita. Ini adalah awal dari Chapter 20—bab baru yang semoga dipenuhi lebih banyak kebahagiaan, keberanian, pencapaian, dan cinta.

Tombol:

> Kembali ke Awal

Perilaku:

- Scroll kembali ke hero.
- Tambahkan dekorasi glow atau bokeh pink yang ringan.

---

## 9.8 Footer

Isi:

> Made with love by Daffa Al Syaddad for Hikmah Sulianti.  
> 28 July 2026 · Chapter 20

Tambahkan simbol hati sederhana.

---

## 10. Animasi dan Interaksi

### Animasi yang Diizinkan

- Fade in.
- Slide up ringan.
- Scale ringan saat hover.
- Floating heart atau sparkle menggunakan CSS.
- Glow pada tombol.
- Smooth scrolling.

### Aturan Animasi

- Durasi umum 200–700 ms.
- Jangan menggunakan animasi yang terus bergerak secara agresif.
- Hormati preferensi `prefers-reduced-motion`.
- Tidak menggunakan library animasi eksternal.
- Jangan membuat animasi yang menghambat pembacaan teks.

---

## 11. Responsive Design

### Mobile

Prioritas utama.

- Lebar acuan mulai dari 320 px.
- Hero menggunakan layout satu kolom.
- Judul tidak boleh terpotong.
- Tombol dapat menjadi full-width atau tersusun vertikal.
- Countdown menggunakan grid 2x2 pada layar kecil.
- Photo cards dapat di-swipe horizontal.
- Message section menjadi satu kolom.
- Padding horizontal minimal 16 px.

### Tablet

- Countdown dapat menggunakan empat kolom.
- Hero dapat tetap satu kolom atau mulai dua kolom.
- Cards menampilkan sekitar 2–3 item dalam viewport.

### Desktop

- Hero menggunakan komposisi teks dan foto yang lebih lebar.
- Cards menampilkan sekitar 4–5 item dalam viewport.
- Message section menggunakan dua kolom.
- Konten memiliki max-width agar tidak terlalu melebar.

---

## 12. Accessibility

- Semua gambar memiliki `alt`.
- Tombol menggunakan elemen `<button>` atau `<a>` yang benar.
- Fokus keyboard harus terlihat.
- Kontras teks dan background harus cukup.
- Heading menggunakan urutan semantik.
- Jangan hanya mengandalkan warna untuk menyampaikan informasi.
- Countdown memiliki label yang jelas.
- Gunakan `aria-live="polite"` untuk pesan saat countdown selesai.
- Dekorasi visual yang tidak bermakna menggunakan `aria-hidden="true"`.

---

## 13. Performance

### Target

- Website terasa cepat pada jaringan seluler.
- Tidak menggunakan video background.
- Tidak menggunakan gambar resolusi penuh tanpa kompresi.
- Tidak menggunakan library eksternal yang tidak diperlukan.

### Optimasi Gambar

- Gunakan WebP apabila memungkinkan.
- Hero sekitar 1600 px pada sisi terpanjang.
- Card sekitar 600–900 px pada sisi terpanjang.
- Gunakan `loading="lazy"` pada gambar non-hero.
- Tetapkan rasio card agar layout tidak bergeser ketika gambar dimuat.

### JavaScript

- Satu file JavaScript kecil.
- Tidak ada dependency runtime.
- Tidak ada request API.
- Tidak ada data sensitif.

---

## 14. Struktur Folder

Struktur yang direkomendasikan:

```text
G:/ultah-hikmah/
├── PRD.md
├── index.html
├── assets/
│   ├── css/
│   │   ├── input.css
│   │   └── output.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── hero-hikmah.webp
│       ├── hikmah-01.webp
│       ├── hikmah-02.webp
│       ├── hikmah-03.webp
│       ├── hikmah-04.webp
│       ├── hikmah-05.webp
│       ├── hikmah-06.webp
│       ├── hikmah-07.webp
│       ├── hikmah-08.webp
│       └── placeholder.webp
├── package.json
└── README.md
```

Catatan:

- `package.json` hanya diperlukan apabila Tailwind dijalankan melalui CLI.
- Bila menggunakan Tailwind melalui CDN untuk prototipe, struktur dapat lebih sederhana.
- Untuk hasil final, prefer build CSS lokal agar situs tidak bergantung pada runtime CDN.
- Jangan menambahkan bundler atau framework aplikasi yang tidak diperlukan.

---

## 15. Data dan Konfigurasi

Seluruh teks dan daftar foto dapat disimpan langsung di HTML karena website bersifat statis.

Konstanta target countdown:

```js
const birthdayTarget = new Date('2026-07-28T00:00:00+07:00');
```

Pastikan perhitungan menggunakan timestamp dari nilai tersebut, bukan menyusun tanggal berdasarkan zona waktu browser secara terpisah.

Tidak diperlukan JSON eksternal pada MVP.

---

## 16. State Produk

### State A — Sebelum 28 Juli 2026

- Countdown aktif.
- Label: `Menuju Chapter 20`.
- Hero menampilkan `Premiering 28 July 2026`.

### State B — Saat atau Setelah 28 Juli 2026

- Countdown berhenti.
- Muncul pesan ulang tahun ke-20.
- Label hero dapat berubah menjadi `Now Celebrating`.
- Tidak ada angka negatif.
- Seluruh konten lain tetap dapat diakses.

### State C — Gambar Tidak Tersedia

- Placeholder tampil.
- Card tetap mempertahankan ukuran.
- Tidak ada ikon broken image yang terlihat.

### State D — JavaScript Tidak Aktif

- Tanggal ulang tahun tetap terlihat sebagai konten HTML.
- Galeri dan seluruh pesan masih dapat dibaca.
- Hanya countdown real-time yang tidak aktif.

---

## 17. Acceptance Criteria

### Hero

- [ ] Nama Hikmah Sulianti tampil jelas.
- [ ] Usia ke-20 ditampilkan.
- [ ] Tanggal 28 Juli 2026 ditampilkan.
- [ ] Foto utama memiliki overlay yang membuat teks terbaca.
- [ ] Dua tombol hero berfungsi menuju section yang benar.

### Countdown

- [ ] Menghitung menuju `2026-07-28T00:00:00+07:00`.
- [ ] Menampilkan hari, jam, menit, dan detik.
- [ ] Update minimal setiap satu detik.
- [ ] Tidak menampilkan angka negatif.
- [ ] Berubah menjadi pesan ulang tahun setelah mencapai target.
- [ ] Interval dihentikan setelah target tercapai.

### Galeri

- [ ] Minimal delapan placeholder/card foto tersedia.
- [ ] Card dapat di-scroll horizontal.
- [ ] Foto tidak terdistorsi.
- [ ] Hover desktop berfungsi.
- [ ] Swipe mobile berfungsi.
- [ ] Alt text tersedia pada setiap foto.
- [ ] Gambar non-hero menggunakan lazy loading.

### Ucapan

- [ ] Ucapan menyebut Hikmah Sulianti.
- [ ] Ucapan menyebut usia ke-20.
- [ ] Pengirim tertulis Daffa Al Syaddad.
- [ ] Frasa `pacar kamu` ditampilkan secara natural.
- [ ] Teks mudah dibaca di mobile.

### Doa

- [ ] Bagian doa memiliki heading tersendiri.
- [ ] Isi doa sesuai naskah pada PRD.
- [ ] Tiga wishes cards tampil responsif.

### Kualitas

- [ ] Tidak menggunakan framework JavaScript.
- [ ] Tidak memiliki backend.
- [ ] Tidak ada error pada console.
- [ ] Tidak ada horizontal overflow pada halaman utama.
- [ ] Tampilan layak pada lebar 320 px.
- [ ] Keyboard focus terlihat.
- [ ] Reduced motion didukung.
- [ ] Tidak menggunakan logo atau merek Netflix.

---

## 18. Skenario Pengujian

### Test 1 — Countdown Normal

**Langkah:**

1. Buka website sebelum 28 Juli 2026 pukul 00.00 WIB.
2. Amati countdown selama beberapa detik.

**Expected result:**

- Detik berkurang secara normal.
- Semua unit waktu valid.
- Tidak ada layout shift besar.

### Test 2 — Birthday Mode

**Langkah:**

1. Ubah target sementara menjadi satu menit dari waktu sekarang.
2. Tunggu hingga countdown selesai.

**Expected result:**

- Countdown mencapai nol.
- Pesan `Happy 20th Birthday, Hikmah!` muncul.
- Interval berhenti.
- Tidak ada angka negatif.

### Test 3 — Mobile Width

**Langkah:**

1. Buka DevTools.
2. Gunakan viewport 320x568 dan 390x844.

**Expected result:**

- Tidak ada elemen keluar layar.
- Countdown menjadi grid yang sesuai.
- Foto dapat di-swipe.
- Ucapan tetap nyaman dibaca.

### Test 4 — Broken Image

**Langkah:**

1. Ubah satu path gambar menjadi path yang tidak valid.

**Expected result:**

- Placeholder tampil.
- Layout card tidak rusak.

### Test 5 — Keyboard Navigation

**Langkah:**

1. Navigasikan halaman menggunakan tombol Tab.

**Expected result:**

- Semua tombol dan link dapat difokuskan.
- Focus state terlihat jelas.
- Urutan fokus masuk akal.

### Test 6 — Reduced Motion

**Langkah:**

1. Aktifkan `prefers-reduced-motion` pada sistem atau DevTools.

**Expected result:**

- Animasi besar dinonaktifkan atau dipersingkat.
- Isi tetap tampil normal.

---

## 19. Definition of Done

Pengerjaan dinyatakan selesai jika:

1. Seluruh acceptance criteria terpenuhi.
2. Website dapat dibuka melalui `index.html` atau static server.
3. Countdown menggunakan zona waktu WIB yang benar.
4. Foto dapat diganti cukup dengan mengganti file pada folder images.
5. Tidak ada dependency yang tidak dibutuhkan.
6. Tidak ada backend atau framework aplikasi.
7. Tampilan mobile, tablet, dan desktop telah diuji.
8. Semua naskah ucapan dan doa telah dimasukkan.
9. `README.md` berisi cara menjalankan dan mengganti foto.
10. Seluruh hasil sesuai dengan PRD ini tanpa menambahkan fitur di luar scope.

---

## 20. Instruksi Eksekusi untuk OpenCode

Gunakan instruksi berikut saat mulai mengerjakan:

```text
Kerjakan website berdasarkan PRD.md di root G:/ultah-hikmah.

Aturan:
1. Baca PRD.md secara utuh sebelum membuat atau mengubah file.
2. Gunakan HTML5, Tailwind CSS, CSS tambahan, dan vanilla JavaScript minimal.
3. Jangan gunakan React, Vue, Next.js, Vite app, backend, database, atau library animasi.
4. JavaScript hanya untuk countdown, birthday state, dan interaksi galeri sederhana.
5. Buat desain sinematik bergaya katalog streaming tanpa menyalin logo atau merek Netflix.
6. Prioritaskan mobile-first dan aksesibilitas.
7. Gunakan placeholder image yang mudah diganti.
8. Jangan menambahkan fitur di luar scope.
9. Pastikan target countdown adalah 28 Juli 2026 pukul 00.00 WIB.
10. Setelah implementasi, jalankan pengecekan responsive, console error, countdown, broken image fallback, dan keyboard navigation.
11. Laporkan file yang dibuat, keputusan teknis, hasil pengujian, serta hal yang masih perlu diganti oleh pengguna.
```

---

## 21. Catatan Penggantian Konten

Sebelum website dikirim kepada Hikmah, Daffa perlu:

1. Memilih satu foto utama untuk hero.
2. Menyiapkan minimal delapan foto tambahan.
3. Mengubah caption card apabila ingin lebih personal.
4. Memastikan seluruh foto telah dikompresi.
5. Menguji website dari ponsel.
6. Menguji countdown atau birthday state menggunakan target waktu sementara.
7. Mengembalikan target ke `2026-07-28T00:00:00+07:00` setelah pengujian.

---

**Dokumen ini menjadi sumber kebutuhan utama. OpenCode harus mengutamakan isi PRD ini dan tidak melakukan overengineering.**
