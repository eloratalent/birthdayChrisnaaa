// Countdown ulang tahun: 17 Oktober 2026 pukul 00.00 waktu lokal.
const birthdayDate = new Date("2026-10-17T00:00:00");
const openSurprise = document.getElementById("openSurprise");
const surpriseContent = document.getElementById("surpriseContent");
let surpriseOpened = false;

function updateCountdown() {
  const diff = birthdayDate.getTime() - Date.now();
  if (diff <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => {
      document.getElementById(id).textContent = "00";
    });
    document.getElementById("countdownMessage").textContent = "It's your special day, my love! ♡";
    document.getElementById("countdownNote").textContent = "Yayyy, waktunya buka kejutan sayangg!";
    openSurprise.disabled = false;
    return;
  }
  document.getElementById("days").textContent = String(Math.floor(diff / 86400000)).padStart(2, "0");
  document.getElementById("hours").textContent = String(Math.floor(diff / 3600000) % 24).padStart(2, "0");
  document.getElementById("minutes").textContent = String(Math.floor(diff / 60000) % 60).padStart(2, "0");
  document.getElementById("seconds").textContent = String(Math.floor(diff / 1000) % 60).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

openSurprise.addEventListener("click", async () => {
  if (openSurprise.disabled || surpriseOpened) return;
  surpriseOpened = true;
  surpriseContent.classList.remove("hidden");
  openSurprise.textContent = "Your surprise is open ♡";
  document.getElementById("countdownNote").textContent = "Semoga sayang suka kejutan kecil ini. 🩵";
  launchConfetti(70);
  // Musik mulai pada interaksi klik ini agar browser mengizinkan pemutaran.
  try {
    await audio.play();
    musicLabel.textContent = "Pause our song";
  } catch (error) {
    showToast("Tekan tombol Play our song jika musik belum mulai yaa 🩵");
  }
  document.getElementById("memories").scrollIntoView({ behavior: "smooth" });
});

// Tambahkan item baru di array ini untuk foto/video sebanyak yang sayang mau.
// Foto: images/foto1.jpg | Video: videos/video1.mp4
const memories = [
  { type: "photo", src: "images/foto1.jpeg", caption: "Hari ini sayang bertambah usia, tetapi bagiku sayang juga bertambah menjadi seseorang yang semakin berharga ♡" },
  { type: "photo", src: "images/foto2.jpeg", caption: "Siganteng akuuu 🥹" },
  { type: "video", src: "videos/video1.mp4", caption: "Aku nggak butuh hari yang sempurna, aku cuma ingin ada sayang di dalamnya 🎬" },
  { type: "photo", src: "images/foto3.jpeg", caption: "Mukanya sih kalem, kelakuannya bikin geleng-geleng" },
  { type: "photo", src: "images/foto4.jpeg", caption: "Katanya cinta itu buta, tapi aku masih bisa lihat sayang ganteng 🩵" },
  { type: "photo", src: "images/foto5.jpeg", caption: "Kalau kita film, genrenya romcom plus sedikit pertengkaran ♡" },
  { type: "photo", src: "images/foto6.jpeg", caption: "Jangan geer, tapi iya sayang emang favoritku" },
  { type: "photo", src: "images/foto7.jpeg", caption: "Dari sekian banyak hal baik yang terjadi dalam hidupku, bertemu sayang adalah salah satu yang paling kusyukuri. 🩵" },
  { type: "video", src: "videos/video2.mp4", caption: "Kalau kenangan punya suara, mungkin video ini akan bercerita betapa bahagianya aku bersamamu 🤍" },
  { type: "photo", src: "images/foto8.jpeg", caption: "Awalnya biasa aja, eh malah jadi kesayangan." },
  { type: "photo", src: "images/foto9.jpeg", caption: "Cakep sih, cuma kadang bikin pengen jitak 😔🤍" },
  { type: "photo", src: "images/foto10.jpeg", caption: "Aku tidak tahu semua hal yang akan terjadi nanti, tapi aku senang bisa menjalani hari ini bersamamu 🩵" },
  { type: "photo", src: "images/foto11.jpeg", caption: "Senyum dulu, biar kelihatan kalau kita bahagia WKWK ♡" },
  { type: "photo", src: "images/foto12.jpeg", caption: "Semoga kita selalu punya alasan untuk tertawa bersama, bahkan ketika hari sedang tidak baik-baik saja 🥹" },
  { type: "video", src: "videos/video3.mp4", caption: "Momen seperti ini membuatku sadar bahwa kebahagiaan sering kali hadir dalam hal-hal sederhana 🎞️" },
  { type: "photo", src: "images/foto13.jpeg", caption: "Aku berharap sayang selalu menemukan banyak alasan untuk tersenyum, dan semoga aku bisa menjadi salah satunya." },
  { type: "photo", src: "images/foto14.jpeg", caption: "Tambah umur, tambah dewasa, tapi jangan tambah nyebelin ya gantengkuu 🩵" },
  { type: "photo", src: "images/foto15.jpeg", caption: "Foto ini disponsori oleh rasa sayang dan kegabutan♡" },
  { type: "photo", src: "images/foto16.jpeg", caption: "Terima kasih sudah menjadi bagian dari hari-hariku yang biasa menjadi luar biasa" },
  { type: "photo", src: "images/foto17.jpeg", caption: "Kalau ada yang tanya favoritku siapa, ya orang yang lagi baca ini" },
  { type: "video", src: "videos/video4.mp4", caption: "Bukan cuma videonya yang ingin kusimpan, tapi juga perasaan bahagia saat bersamamu 🩵" },
  { type: "photo", src: "images/foto18.jpeg", caption: "Tolong jangan lucu-lucu, aku gampang jatuh cinta" },
  { type: "photo", src: "images/foto19.jpeg", caption: "Foto dulu, berantemnya nanti " },
  { type: "photo", src: "images/foto20.jpeg", caption: "Ini orang kalau nggak bikin kangen, ya bikin emosi. Paket lengkap 🩵" },
  { type: "photo", src: "images/foto21.jpeg", caption: "Kalau ditanya apa yang membuatku bahagia, salah satu jawabannya pasti sayang" },
  { type: "photo", src: "images/foto22.jpeg", caption: "Bukan pasangan paling aesthetic, tapi paling banyak tingkah 🥹" },
  { type: "video", src: "videos/video5.mp4", caption: "Selamat ulang tahun, cintaku. Semoga tahun ini membawa lebih banyak kebahagiaan dan cerita indah untukmu. 🎬" },
  { type: "photo", src: "images/foto23.jpeg", caption: "Cieee, yang masuk galeri dan masuk hati" },
  { type: "photo", src: "images/foto24.jpeg", caption: "Satu-satunya orang yang bisa bikin aku ketawa sekaligus manyun 🩵" },
  { type: "photo", src: "images/foto25.jpeg", caption: "Bukan tentang seberapa sempurna kita, tapi tentang bagaimana kita tetap memilih satu sama lain ♡" },
  { type: "photo", src: "images/foto29.jpeg", caption: "Satu foto, banyak cerita, dan kenangan yang selalu ingin kuulang" },
  { type: "photo", src: "images/foto27.jpeg", caption: "Semoga kita tetap jadi dua manusia yang bisa ketawa bareng karena hal sekecil apa pun" },
  { type: "photo", src: "images/foto28.jpeg", caption: "Dari sekian banyak orang, hatiku tetap menemukan rumahnya di sayang" },
  { type: "photo", src: "images/foto26.jpeg", caption: "Selamat ulang tahun, sayanggku. Semoga bahagiamu selalu bertambah, impianmu satu per satu terwujud, dan kita masih punya banyak cerita indah untuk dikenang bersama. Aku sayang sayang. 🩵🎂" },
];

let currentMemory = 0;
const memoryImage = document.getElementById("memoryImage");
const memoryVideo = document.getElementById("memoryVideo");
const memoryCaption = document.getElementById("memoryCaption");
const memoryCounter = document.getElementById("memoryCounter");
const prevMemory = document.getElementById("prevMemory");
const nextMemory = document.getElementById("nextMemory");

function showMemory(index) {
  currentMemory = index;
  const item = memories[index];

  // Hentikan video sebelumnya agar audio tidak berlanjut saat berpindah.
  memoryVideo.pause();
  memoryVideo.removeAttribute("src");
  memoryVideo.load();

  if (item.type === "video") {
    memoryImage.classList.add("hidden");
    memoryVideo.classList.remove("hidden");
    memoryVideo.src = item.src;
    memoryVideo.load();
  } else {
    memoryVideo.classList.add("hidden");
    memoryImage.classList.remove("hidden");
    memoryImage.src = item.src;
    memoryImage.alt = `Kenangan foto nomor ${index + 1}`;
  }

  memoryCaption.textContent = item.caption;
  memoryCounter.textContent = `Memory ${index + 1} of ${memories.length}`;
  prevMemory.disabled = index === 0;
  nextMemory.disabled = index === memories.length - 1;

  const card = document.getElementById("memoryCard");
  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "memory-appear .45s ease";
}
prevMemory.addEventListener("click", () => {
  if (currentMemory > 0) showMemory(currentMemory - 1);
});
nextMemory.addEventListener("click", () => {
  if (currentMemory < memories.length - 1) showMemory(currentMemory + 1);
});
showMemory(0);

// Musik instrumental sudah disertakan di folder music. Browser mengizinkan audio
// dimulai setelah pengguna mengeklik tombol kejutan atau tombol musik.
const audio = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const musicLabel = document.getElementById("musicLabel");

musicButton.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      musicLabel.textContent = "Pause our song";
    } catch (error) {
      showToast("Musik belum bisa diputar. Pastikan folder music tidak dipindahkan.");
      console.error("Audio playback failed:", error);
    }
  } else {
    audio.pause();
    musicLabel.textContent = "Play our song";
  }
});

const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}
document.getElementById("heartButton").addEventListener("click", () => {
  launchConfetti(90);
  showToast("A big hug and a million kisses for you, sayangku! 🩵");
});
function launchConfetti(amount = 50) {
  const symbols = ["♡", "✦", "✧", "♥"];
  const colors = ["#8dbbe5", "#b7d7f4", "#c5ced9", "#ffffff"];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.fontSize = `${12 + Math.random() * 16}px`;
    piece.style.animationDuration = `${2.2 + Math.random() * 2.2}s`;
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    piece.style.color = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5500);
  }
}
