// Controle de música
let isPlaying = false;

// Tempo inicial da música em segundos (ajuste aqui para pular o início)
const MUSIC_START_TIME = 20; // Começa a partir dos 30 segundos

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");

  if (isPlaying) {
    music.pause();
    btn.textContent = "🎵 Love of My Life";
    isPlaying = false;
  } else {
    music.currentTime = MUSIC_START_TIME; // Define o ponto de início
    music.play();
    btn.textContent = "⏸️ Pausar Música";
    isPlaying = true;
  }
}

// Quando a música reiniciar (loop), voltar para o ponto inicial
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  if (music) {
    music.addEventListener("timeupdate", () => {
      // Se a música voltar ao início (loop), pula para o tempo definido
      if (music.currentTime < MUSIC_START_TIME && isPlaying) {
        music.currentTime = MUSIC_START_TIME;
      }
    });
  }
});

// Animação de revelação no scroll
function revealOnScroll() {
  const elements = document.querySelectorAll(
    ".memory-card, .reason-card, .letter-paper",
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.style.animationPlayState = "running";
    }
  });
}

// Pause animações até que o elemento esteja visível
document
  .querySelectorAll(".memory-card, .reason-card, .letter-paper")
  .forEach((element) => {
    element.style.animationPlayState = "paused";
  });

// Evento de scroll
window.addEventListener("scroll", revealOnScroll);

// Executar uma vez ao carregar
document.addEventListener("DOMContentLoaded", () => {
  revealOnScroll();

  // Efeito de digitação para mensagem especial (opcional)
  const subtitle = document.querySelector(".subtitle");
  if (subtitle) {
    subtitle.style.opacity = "0";
    setTimeout(() => {
      subtitle.style.transition = "opacity 2s ease";
      subtitle.style.opacity = "1";
    }, 500);
  }
});

// Adicionar mais corações dinamicamente
function createFloatingHeart() {
  const heartsContainer = document.querySelector(".hearts-bg");
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = ["💕", "❤️", "💖", "💗", "💓"][
    Math.floor(Math.random() * 5)
  ];
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = Math.random() * 10 + 10 + "s";
  heartsContainer.appendChild(heart);

  // Remover após animação
  setTimeout(() => {
    heart.remove();
  }, 20000);
}

// Criar novos corações periodicamente
setInterval(createFloatingHeart, 3000);

// Efeito parallax suave
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero-content");
  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    hero.style.opacity = 1 - scrolled / window.innerHeight;
  }
});

// Console message especial
console.log(
  "%c💕 Feito com amor para Nina 💕",
  "font-size: 24px; color: #c44569; font-family: cursive;",
);
