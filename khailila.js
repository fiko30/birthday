document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".TBirthday");
  const container = document.querySelector(".container");

  // === Bunga mengelilingi tombol awal — DIPERBESAR ===
  function createFlowerCircle() {
    const flowers = ["🌸", "🌷", "💐", "🌼", "🌺", "🌹", "🪻", "💮", "🌻", "💮"];
    const radius = 200; // jarak dari pusat
    const count = flowers.length;

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      const flower = document.createElement("div");
      flower.className = "flower-icon";
      flower.textContent = flowers[i];
      // Ukuran acak antara 2.0em - 2.8em
      const size = 2.0 + Math.random() * 0.8;
      flower.style.fontSize = `${size}em`;
      flower.style.left = `calc(50% + ${x}px)`;
      flower.style.top = `calc(50% + ${y}px)`;
      document.body.appendChild(flower);
    }
  }

  createFlowerCircle();

  button.addEventListener("click", () => {
    const audio = new Audio("happy.mp3");
    audio.volume = 0.4;
    audio.play().catch(e => console.log("Audio diputar:", e));

    container.style.display = "none";
    document.querySelectorAll(".flower-icon, .balloon").forEach(el => el.remove());

    // Balon
    function createBalloon() {
      const b = document.createElement("div");
      b.classList.add("balloon");
      b.style.left = Math.random() * 100 + "%";
      b.style.background = `hsl(${Math.random() * 360}, 70%, 70%)`;
      document.body.appendChild(b);
      setTimeout(() => b.remove(), 4000);
    }
    const balloonInterval = setInterval(createBalloon, 120);
    setTimeout(() => clearInterval(balloonInterval), 3500);

    // Confetti
    const end = Date.now() + 4500;
    (function frame() {
      confetti({ particleCount: 50, angle: 60, spread: 80, origin: { x: 0.1, y: 0.8 } });
      confetti({ particleCount: 50, angle: 120, spread: 80, origin: { x: 0.9, y: 0.8 } });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();

    // === HALAMAN 1: Ucapan Awal ===
    setTimeout(() => {
      document.body.innerHTML = '';

      const page1 = document.createElement("div");
      page1.id = "page1";
      page1.innerHTML = `
        <h1 class="title">Selamat Ulang Tahun yang ke-18! 🎀💖</h1>
        <p class="subtitle large">Semoga dalam setiap harinya kamu selalu senang dan bahagia, sehat selalu, banyak rezeki, semakin berbakti kepada kedua orang tua kamu dan dapat membahagiakan mereka, memiliki sikap dan sifat yang semakin dewasa seiring bertambahnya usia, sukses untuk dirimu cantikkk, akuu sayang sama kamu dan akuu bisa ngebuktiin itu dengan perlakuan aku ke kamuu, hahaa lovee youu ✨</p>
        <div class="decorations">
          <span>🎀</span>
          <span>🎂</span>
          <span>🌸</span>
          <span>💕</span>
          <span>🎀</span>
          <span>💖</span>
          <span>🎁</span>
          <span>🌷</span>
          <span>💐</span>
          <span>🎊</span>
        </div>
        <div class="button-container">
          <button class="arrow-button" id="next1Btn">Lanjutkan <span>▼</span></button>
        </div>
      `;
      document.body.appendChild(page1);

      createFloatingFlowers();

      const style = document.createElement("style");
      style.textContent = `
        body {
          background: linear-gradient(135deg, #ffe0f0, #fff5f9);
          overflow: hidden;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-family: 'Poppins', sans-serif;
          position: relative;
        }
        .title {
          font-size: 2.4em;
          color: #ff4081;
          margin-bottom: 1.2rem;
          text-shadow: 2px 2px 4px rgba(255, 105, 180, 0.2);
        }
        .subtitle.large {
          font-size: 1.45em;
          line-height: 1.7;
          max-width: 650px;
          margin: 0 auto 2rem;
          color: #ff69b4;
        }
        .decorations {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 1.8rem;
          padding: 0 1rem;
        }
        .decorations span {
          display: inline-block;
          font-size: 2.2em;
          color: #ff85a2;
          animation: float-deco 4s ease-in-out infinite;
        }
        .decorations span:nth-child(1) { animation-delay: 0.0s; }
        .decorations span:nth-child(2) { animation-delay: 0.2s; }
        .decorations span:nth-child(3) { animation-delay: 0.4s; }
        .decorations span:nth-child(4) { animation-delay: 0.6s; }
        .decorations span:nth-child(5) { animation-delay: 0.8s; }
        .decorations span:nth-child(6) { animation-delay: 1.0s; }
        .decorations span:nth-child(7) { animation-delay: 1.2s; }
        .decorations span:nth-child(8) { animation-delay: 1.4s; }
        .decorations span:nth-child(9) { animation-delay: 1.6s; }
        .decorations span:nth-child(10) { animation-delay: 1.8s; }
        @keyframes float-deco {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(3deg); }
        }
        .button-container {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }
        .arrow-button {
          background: white;
          border: 3px solid #ff4081;
          border-radius: 50px;
          padding: 12px 24px;
          font-size: 1.4em;
          color: #ff4081;
          cursor: pointer;
          box-shadow: 0 0 10px #ff85a2;
          transition: all 0.3s ease;
          animation: glow-pink 1.8s infinite alternate;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          opacity: 1;
        }
        .arrow-button:hover {
          background: #fff0f8;
          transform: scale(1.05);
          box-shadow: 0 0 20px #ff69b4;
        }
        @keyframes glow-pink {
          from { box-shadow: 0 0 8px #ff85a2, 0 0 16px #ff85a2; }
          to { box-shadow: 0 0 16px #ff4081, 0 0 24px #ff4081; }
        }
        .floating-flower {
          position: absolute;
          pointer-events: none;
          z-index: 0;
          opacity: 0.75;
          animation: float-random 10s infinite ease-in-out;
        }
        @keyframes float-random {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0); }
          25% { transform: translateY(-15px) translateX(8px) rotate(4deg); }
          50% { transform: translateY(-30px) translateX(-8px) rotate(-4deg); }
          75% { transform: translateY(-15px) translateX(0) rotate(2deg); }
        }
        .heart {
          position: absolute;
          font-size: 2em;
          color: #ff4081;
          opacity: 0.9;
          pointer-events: none;
          z-index: 20;
          animation: fly-heart 3s forwards;
        }
        @keyframes fly-heart {
          0% {
            transform: translate(0, 0) scale(0.5);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(1.2);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);

      document.getElementById("next1Btn").addEventListener("click", () => {
        createHeartFly();
        setTimeout(showPhotoPage, 300);
      });
    }, 4500);
  });

  // === HALAMAN 2: Foto + Ucapan Singkat — FOTO DI TENGAH (100% FIX) ===
  function showPhotoPage() {
    document.body.innerHTML = '';

    const container = document.createElement("div");
    container.id = "page2";
    container.innerHTML = `
      <div class="photo-frame">
        <img src="papy.jpg" alt="Papy" />
      </div>
      <div class="short-message">
        Untuk Papy yang selalu bikin hari-hariku cerah...
      </div>
      <div class="sweet-line">
        Kamu itu cantik, baik, dan selalu jadi alasan aku tersenyum setiap hari. 💖
      </div>
      <button class="next-button" id="next2Btn">Selanjutnya →</button>
    `;
    document.body.appendChild(container);

    const style = document.createElement("style");
    style.textContent = `
      body {
        background: linear-gradient(135deg, #fff5f9, #f8e1f4);
        margin: 0;
        font-family: 'Poppins', sans-serif;
        height: 100vh;
        overflow: hidden;
        position: relative;
      }
      #page2 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 1.5rem;
        box-sizing: border-box;
      }
      .photo-frame {
        width: 250px;
        height: 250px;
        border: 12px solid #ffaec9;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        animation: pulse 2s infinite;
        overflow: hidden;
        margin-bottom: 1.5rem;
      }
      .photo-frame img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
      .short-message,
      .sweet-line {
        text-align: center;
        color: #ff4081;
        font-size: 1.5em;
        line-height: 1.6;
        max-width: 80%;
        margin: 0 auto;
        padding: 0 0.5rem;
        text-shadow: 1px 1px 2px rgba(255, 182, 193, 0.5);
      }
      .sweet-line {
        margin-top: 0.6rem;
      }
      .next-button {
        background: white;
        border: 3px solid #ff4081;
        border-radius: 50px;
        padding: 12px 28px;
        font-size: 1.3em;
        color: #ff4081;
        cursor: pointer;
        box-shadow: 0 0 12px #ff85a2;
        animation: glow-pink 1.8s infinite alternate;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        margin-top: 1.8rem;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      .next-button:hover {
        background: #fff0f8;
        transform: scale(1.05);
        box-shadow: 0 0 20px #ff69b4;
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.03); }
      }
      @keyframes glow-pink {
        from { box-shadow: 0 0 8px #ff85a2, 0 0 16px #ff85a2; }
        to { box-shadow: 0 0 16px #ff4081, 0 0 24px #ff4081; }
      }
      .heart {
        position: absolute;
        font-size: 2em;
        color: #ff4081;
        opacity: 0.9;
        pointer-events: none;
        z-index: 20;
        animation: fly-heart 3s forwards;
      }
      @keyframes fly-heart {
        0% {
          transform: translate(0, 0) scale(0.5);
          opacity: 1;
        }
        100% {
          transform: translate(var(--tx), var(--ty)) scale(1.2);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    document.getElementById("next2Btn").addEventListener("click", () => {
      createHeartFly();
      setTimeout(showLoveMessage, 300);
    });
  }

  // === HALAMAN 3: Paragraf Cinta Panjang — TIDAK TERPOTONG (FIXED) ===
  function showLoveMessage() {
    document.body.innerHTML = '';

    const page3 = document.createElement("div");
    page3.id = "page3";
    page3.innerHTML = `
      <div class="love-message">
        <p>Papy, aku nggak pernah bosen melihat kamu, bukan cuma karena wajah cantikmu yang memang membuat jantungku berhenti sejenak setiap kali senyum, tapi karena ada sesuatu di matamu yang bikin aku merasa ‘pulang dan hangat’. Kamu itu cantik… bukan cuma cantik biasa, tapi cantik yang bikin orang di sekitarmu jadi ikut bahagia. Senyummu itu hangat kayak matahari pagi, suaramu lembut kayak bisikan angin yang selalu tahu kapan aku butuh pelukan. Dan yang paling aku kagumi? Hatimu. Kamu baik, perhatian, punya empati yang jarang dimiliki orang lain, dan selalu berusaha jadi versi terbaik dari dirimu, bukan buat orang lihat, tapi karena memang itu diri kamu.

        Aku sayang kamu bukan hanya karena kamu cantik, tapi karena kamu selalu jadi alasan aku untuk jadi pria yang lebih baik di setiap harinya. Setiap kali kamu ketawa, dunia terasa lebih ringan. Setiap kali kamu bicara, aku merasa didengar. Bahkan di hari-hariku yang paling berantakan, keberadaanmu sudah cukup buat semuanya terasa aman dan nyaman. Kamu itu langka, Papy. Cantik luar dalam, lembut tapi kuat, manis tapi penuh semangat. Dan aku… aku nggak cuma mencintaimu hari ini di ulang tahunmu yang ke-18, tapi setiap hari, dalam diam, dalam doa, dalam setiap hal kecil yang kuperhatikan darimu. Aku sayang kamu lebih dari kata-kata yang aku ungkapkan saat ini. Tetapi yang pasti aku di sini, dan selamanya aku akan berusaha membuktikan cintaku lewat tindakan, bukan cuma kata. Selamat ulang tahun, cintaku. 💖 💖</p>
      </div>
    `;
    document.body.appendChild(page3);

    createFlowers();

    const style = document.createElement("style");
    style.textContent = `
      /* RESET TOTAL */
      html, body {
        margin: 0;
        padding: 0;
        height: 100%;
      }
      body {
        background: linear-gradient(135deg, #fff0f8, #ffe0f0);
        font-family: 'Poppins', sans-serif;
        min-height: 100dvh; /* ✅ dynamic viewport height */
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        overflow-y: auto;
        overflow-x: hidden;
        position: relative;
        padding: 2.5rem 1.5rem 2rem;
        box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
      }
      .love-message {
        max-width: 650px;
        text-align: center;
        color: #ff4081;
        font-size: 1.3em;
        line-height: 1.7;
        margin: 0 auto;
        text-shadow: 1px 1px 2px rgba(255, 182, 193, 0.3);
        overflow-wrap: break-word;
      }
      .flower {
        position: absolute;
        font-size: 1.8em;
        opacity: 0.85;
        pointer-events: none;
        z-index: 1;
      }
      .heart {
        position: absolute;
        font-size: 2em;
        color: #ff4081;
        opacity: 0.9;
        pointer-events: none;
        z-index: 20;
        animation: fly-heart 3s forwards;
      }
      @keyframes fly-heart {
        0% {
          transform: translate(0, 0) scale(0.5);
          opacity: 1;
        }
        100% {
          transform: translate(var(--tx), var(--ty)) scale(1.2);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // === Animasi Hati Terbang ===
  function createHeartFly() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.left = "50%";
    heart.style.top = "50%";
    const tx = (Math.random() - 0.5) * 200;
    const ty = -100 - Math.random() * 100;
    heart.style.setProperty("--tx", tx + "px");
    heart.style.setProperty("--ty", ty + "px");
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }

  // === Bunga mengambang (halaman 1) ===
  function createFloatingFlowers() {
    const flowers = ["🌸", "🌷", "💐", "🌼", "🌺"];
    for (let i = 0; i < 6; i++) {
      const flower = document.createElement("div");
      flower.className = "floating-flower";
      flower.textContent = flowers[i % flowers.length];
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.top = Math.random() * 100 + "vh";
      flower.style.fontSize = (1.2 + Math.random() * 0.6) + "em";
      document.body.appendChild(flower);
    }
  }

  // === Bunga jatuh (halaman 3) ===
  function createFlowers() {
    const flowers = ["🌸", "🌷", "💐", "🌼", "🌺", "🌹"];
    let count = 0;
    const max = 50;
    const interval = setInterval(() => {
      if (count >= max || !document.body) {
        clearInterval(interval);
        return;
      }
      const flower = document.createElement("div");
      flower.className = "flower";
      flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.top = "-50px";
      flower.style.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
      flower.style.zIndex = "1";
      document.body.appendChild(flower);
      const fallDuration = 6 + Math.random() * 6;
      flower.style.transition = `top ${fallDuration}s linear, opacity ${fallDuration / 2}s`;
      flower.style.top = "110vh";
      flower.style.opacity = "0";
      setTimeout(() => {
        if (flower.parentNode) flower.parentNode.removeChild(flower);
      }, fallDuration * 1000);
      count++;
    }, 600);
  }
});