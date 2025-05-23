
/* ====== Countdown ====== */
const clock = document.getElementById('clock');
const eventDate = new Date('december 9, 2025 21:30:00').getTime();
const pad = n => n.toString().padStart(2, '0');

function updateClock() {
  const gap = eventDate - Date.now();
  const d = Math.floor(gap / 864e5);
  const h = Math.floor(gap / 36e5) % 24;
  const m = Math.floor(gap / 6e4) % 60;
  const s = Math.floor(gap / 1e3) % 60;

  clock.innerHTML = `
    <div><strong>${pad(d)}</strong><span>días</span></div>
    <div><strong>${pad(h)}</strong><span>horas</span></div>
    <div><strong>${pad(m)}</strong><span>min</span></div>
    <div><strong>${pad(s)}</strong><span>seg</span></div>`;
}

setInterval(updateClock, 1000); updateClock();

/* ====== Modal ====== */
const btnGift = document.getElementById('btnGift');
const modal = document.getElementById('modalRegalo');
const close = modal.querySelector('.close');
btnGift.onclick = () => modal.style.display = 'flex';
close.onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };

/* ====== Scroll reveal ====== */
const obs = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('appear');
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.section').forEach(sec => {
  sec.classList.add('hidden');
  obs.observe(sec);
});
// ======= Mensaje de bienvenida + Reproductor de música =========

const music = document.getElementById('bg-music');
const enterBtn = document.getElementById('enter-btn');
const overlay = document.getElementById('welcome-overlay');
const toggle = document.getElementById('music-toggle');
let isPlaying = false;

enterBtn.addEventListener('click', () => {

  overlay.classList.add('fade-out');
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 1000);

  if (music) {
    music.volume = 0.2;
    music.play().then(() => {
      isPlaying = true;
      toggle.textContent = '⏸️';
    }).catch(err => console.log('Autoplay bloqueado:', err));
  }
});

toggle.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    toggle.textContent = '🔊🎵';
  } else {
    music.play();
    toggle.textContent = '⏸️';
  }
  isPlaying = !isPlaying;
});


toggle.classList.add('playing');
toggle.classList.remove('playing');

// ===== NUEVA MÚSICA MÁGICA Y SU BOTÓN =====
const magicMusic = document.getElementById('magic-music'); // Referencia al nuevo audio
const magicMusicToggle = document.getElementById('magic-music-toggle'); // Referencia al nuevo botón
let isMagicMusicPlaying = false; // Estado de la música mágica


if (magicMusic) {
  magicMusic.volume = 0.3; // Volumen para la música mágica (ajusta a tu gusto)
  magicMusicToggle.addEventListener('click', () => {
    // Primero, pausamos la música de fondo principal
    if (isPlaying) {
      music.pause();
      toggle.textContent = '🔊🎵'; // Actualiza el icono del botón principal
      isPlaying = false;
    }

    // Luego, controlamos la música mágica
    if (isMagicMusicPlaying) {
      magicMusic.pause();
      magicMusicToggle.textContent = '🎵 Dale Bo 🔊'; // Texto cuando está pausada
      console.log("Música mágica pausada.");
    } else {
      magicMusic.play().then(() => {
        magicMusicToggle.textContent = '⏸️ Dale booo'; // Texto cuando está sonando
        console.log("Música mágica reproduciéndose.");
      }).catch(err => console.error("Error al reproducir música mágica:", err));
    }
    isMagicMusicPlaying = !isMagicMusicPlaying;
  });
} else {
  console.warn("Elemento de audio 'magic-music' no encontrado.");
}





// -------------------glitterContainer--------------------
document.addEventListener("DOMContentLoaded", function () {
  const graciasSection = document.getElementById("gracias");
  const glitterContainer = document.getElementById("glitter-container");

  console.log("DOMContentLoaded - graciasSection:", graciasSection);
  console.log("DOMContentLoaded - glitterContainer:", glitterContainer);

  const glitterOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: "transparent" },
    particles: {
      number: { value: 90, density: { enable: true, area: 700 } },
      color: { value: ["#0000FF", "#FFD700", "#EE82EE", "#7B68EE", "#ADFF2F", "#00FFFF", "#778899", "#2F4F4F", "FFFFFF", "DCDCDC"] },
      shape: {
        type: ["char", "star", "circle"],
        character: {
          value: ["❤️", "💗", "🎈", "🎉", "✨"],
          font: "Segoe UI Emoji",
          style: "",
          weight: "400",
        }
      },
      opacity:{
        value: 1,
        random: true,
        animation: { enable: true, speed: 1, minimumValue: 0.3, sync: false }
      },
      size: {
        value: 12,
        random: true,
        animation: { enable: true, speed: 2, minimumValue: 1, sync: false }
      },
      move: {
        enable: true,
        speed: 4,
        direction: "top",
        random: true,
        straight: false,
        outModes: { default: "out" }
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "bubble" },
        onClick: { enable: false }
      },
      modes: {
        bubble: { distance: 100, size: 18, duration: 10, opacity: 1 }
      }
    }
  };




  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("Sección 'gracias' intersectando. Intentando cargar tsParticles...");
        console.log("window.tsParticles:", window.tsParticles);

        if (window.tsParticles) {

          setTimeout(() => {
            window.tsParticles.load("glitter-container", glitterOptions)
              .then(container => {
                console.log("tsParticles cargado en la sección gracias!");
                console.log("Contenedor de tsParticles después de cargar:", container);
                console.log("Contenido de glitter-container después de cargar:", glitterContainer.innerHTML);

              })
              .catch(error => {
                console.error("Error al cargar tsParticles:", error);
              });
          }, 100);

        } else {
          console.warn("tsParticles no está disponible. Asegúrate de que el CDN cargue antes de este script.");
        }
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(graciasSection);
});

document.addEventListener("DOMContentLoaded", function () {
  const glitterContainer = document.getElementById("glitter-container");

  if (window.tsParticles && glitterContainer) {
    window.tsParticles.load("glitter-container", glitterOptions)
      .then(container => {
        console.log("tsParticles cargado directamente");
      })
      .catch(error => {
        console.error("Error al cargar tsParticles:", error);
      });
  }
});


document.getElementById("magicBtn").addEventListener("click", async () => {
  const container = await tsParticles.domItem(0);
  const newColors = ["#0000FF", "#FFD700"].sort(() => 0.5 - Math.random());

  container.options.particles.color.value = newColors;
  container.refresh();
});


document.getElementById("magicBtn").addEventListener("click", () => {
  const container = tsParticles.domItem(0); // primer sistema cargado
  // Elegimos nuevos colores al azar
  const newColors = ["#0000FF"].sort(() => 0.5 - Math.random());
  // Tomamos las opciones actuales, cambiamos el color y actualizamos
  container.load({
    ...container.options,
    particles: {
      ...container.options.particles,
      color: { value: newColors }
    }
  });
});