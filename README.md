# Birthday Surprise ♡ — Galeri Foto + Video

Website ulang tahun bertema baby blue, putih, dan silver. Galeri menampilkan foto dan video bercampur satu per satu.

## Struktur
- `index.html` — struktur website
- `css/style.css` — desain responsif
- `js/script.js` — countdown, galeri, musik, efek hati
- `images/` — tempat foto
- `videos/` — tempat video MP4
- `music/` — tempat lagu latar

## Cara memasukkan foto
Simpan foto dalam folder `images/` dengan nama:
- `foto1.jpg`
- `foto2.jpg`
- `foto3.jpg`
- dan seterusnya.

## Cara memasukkan video
Simpan video MP4 di folder `videos/` dengan nama:
- `video1.mp4`
- `video2.mp4`
- `video3.mp4`
- dan seterusnya.

Video perlu ditambahkan ke daftar `memories` di `js/script.js` agar muncul di galeri. Contoh:
`{ type: "video", src: "videos/video3.mp4", caption: "our little moment ♡" },`

Foto contoh:
`{ type: "photo", src: "images/foto11.jpg", caption: "another memory ♡" },`

Letakkan item baru di posisi yang kamu inginkan di array `memories`; urutan di array adalah urutan tampilnya galeri. Nama file di kode harus sama persis dengan nama file sebenarnya. Format `.mp4` disarankan untuk video.

## Musik
Masukkan file musik bernama `lagu.mp3` ke folder `music/`. Browser biasanya tidak mengizinkan musik otomatis berjalan sebelum pengunjung menekan tombol Play. Gunakan audio yang kamu punya hak atau izin untuk dibagikan.

## Countdown
Countdown disetel ke 18 Oktober 2026 pukul 00.00 berdasarkan waktu lokal perangkat. Untuk mengganti tanggal, edit `birthdayDate` di `js/script.js`.

## Menjalankan
Ekstrak ZIP, buka folder di VS Code, lalu buka `index.html` di browser. Live Server juga bisa digunakan.

## Publikasi
Gunakan repository GitHub baru khusus website ini agar repository lama tetap aman. Upload isi folder proyek ini ke repository baru, lalu buka Settings → Pages, pilih branch `main` dan folder `/ (root)`, kemudian simpan.


## Media yang sudah disiapkan
- Musik instrumental romantis orisinal sudah disertakan di `music/lagu.mp3`; kamu tidak perlu menambahkan file lagu sendiri. Musik mulai ketika tombol **Open your surprise** diklik (atau bisa dikendalikan lewat tombol musik).
- Tambahkan foto ke folder `images` dengan nama `foto1.jpeg`, `foto2.jpeg`, dan seterusnya. Jika foto kamu berekstensi `.jpg` atau `.png`, sesuaikan ekstensi di daftar `memories` pada `js/script.js`.
- Tambahkan video MP4 ke folder `videos` dengan nama `video1.mp4` sampai `video5.mp4`.
- Tanggal kejutan disetel ke 18 Oktober 2026 pukul 00.00 waktu lokal perangkat.
