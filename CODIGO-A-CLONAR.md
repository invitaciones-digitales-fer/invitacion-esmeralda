<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Invitación • Esmeralda XV</title>

  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;600&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Charm:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

  <!-- Meta Open Graph para previsualización en WhatsApp / redes -->
  <meta property="og:title" content="¡Estás invitado al cumpleaños de 15 de Erica! 🎉" />
  <meta property="og:description"
    content="Estás invitado a una noche inolvidable. Confirmá tu asistencia desde esta invitación digital." />
  <meta property="og:image" content="https://i.imgur.com/VSFcQyk.png" />
  <meta property="og:url" content="https://fernandopizarrodw.github.io/invitacion-esmeralda/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />

</head>

<body class="bg-stars">
  
  <!-- HERO -->
  <header class="hero">
    <img src="assets/img/esmeralda-hero.jpg" alt="Esmeralda foto" class="hero-img">
    <div class="hero-overlay">
      <img src="assets/img/esmeralda-logo.png" alt="Logo Esmeralda">
    </div>
    <a href="#countdown" class="scroll-down" aria-label="Bajar"></a>
  </header>

  <!-- COUNTDOWN -->
  <section id="countdown" class="section bg-dark">
    <h3 class="section-title" role="heading" aria-level="3">¡Te invito a acompañarme en esta noche tan especial!</h3>
    <div id="clock" class="countdown"></div>
  </section>

  <!-- FIESTA -->
  <section id="fiesta" class="section bg-light bg-glitter">
    <div class="section-inner">
      <img src="assets/icons/icono-fiesta.svg" alt="icono-fiesta" class="icon-animado-m">
      <h3 class="section-title-fiesta" role="heading" aria-level="3">Fiesta</h3>
      <p class="fiesta-fecha">Sábado 9 de Diciembre&nbsp;•&nbsp;<br>21:30 hs<br>
        Av. Siempreviva 123, Palermo</p>
      <p class="section-click">Clickeá en el botón y encontrá las indicaciones para llegar.
        <br><em>¡Nos vemos!</em>
      </p>
      <a class="btn primary" target="_blank" href="https://maps.app.goo.gl/6sQoytHiGQq9pAsR7">Cómo
        llegar</a>
    </div>
  </section>

  <!-- RSVP -->
  <section id="rsvp" class="section bg-dark">
    <div class="section-inner">
      <h3 class="section-title fiesta-fecha" role="heading" aria-level="3">¡Confirmá tu asistencia!</h3>
      <p>Cuento con tu presencia ❤️</p>
      <a class="btn outline" target="_blank"
        href="https://web.whatsapp.com/">Confirmar
        por WhatsApp</a>
    </div>
  </section>

  <!-- DRESS CODE -->
  <section id="dresscode" class="section bg-light bg-glitter">
    <div class="section-inner">
      <img src="assets/icons/icono-dresscode.svg" alt="icono-dresscode" class="icon-animado dresscode">
      <h3 class="section-title" role="heading" aria-level="3">Dress Code </h3>
      <p class="pill">Elegante Sport</p>
    </div>
  </section>

  <!-- PLAYLIST -->
  <section id="playlist" class="section bg-dark">
    <div class="section-inner">
      <img src="assets/icons/icono-cancion.svg" alt="" class="icon-animado-music">
      <h3 class="section-title fiesta-fecha" role="heading" aria-level="3">¡Playlist!</h3>
      <p>¡Contame qué canciones <br>no pueden faltar! 🎶</p>
      <a class="btn primary" target="_blank" href="https://tally.so/r/wgr1AM">Sugerir canción</a>
    </div>
  </section>

  <!-- REGALOS -->
  <section id="regalos" class="section bg-light bg-glitter">
    <div class="section-inner">
      <img src="assets/icons/icono-regalo.svg" alt="icono-regalo" class="icon-animado">
      <h3 class="section-title fiesta-fecha" role="heading" aria-level="3">Regalos</h3>
      <p>El mejor regalo es que vengas,
        pero si deseás regalarme algo, podés colaborar con mis sueños y anhelos<br>¡Muchas gracias!</p>
      <button id="btnGift" class="btn outline">Hacer un regalo</button>
    </div>
  </section>

  <!-- MODAL -->
  <div id="modalRegalo" class="modal">
    <div class="modal-dialog">
      <span class="close">&times;</span>
      <h4>Datos bancarios</h4>
      <ul>
        <li><b>Titular:</b> Esmeralda</li>
        <li><b>CVU:</b> 000000110009999999999</li>
        <li><b>Alias:</b> hogar.cielo.puente</li>
        <li><b>CUIT/CUIL:</b> 99-101010101-9</li>
      </ul>
      <hr>
      <h4>Buzón de regalos 🎁</h4>
      <p>Si deseás hacer tu regalo personalmente,<br>
        el día del evento habrá un buzón para dejar obsequios.</p>
    </div>
  </div>

  <!-- GRACIAS -->

  <section id="gracias" class="section bg-dark">
    <div id="glitter-container"></div>
    <h3 class="section-title-gracias" role="heading" aria-level="3">¡Gracias por acompañarme en este momento tan
      importante!</h3>
   


    <div class="button-wrapper">
      <button id="magicBtn" class="btn outline" style="margin-top:2rem">
        ✨Cambiar magia💫
      </button>
    </div>

    

  </section>




  <!-- Mensaje de bienvenida -->
  <div id="welcome-overlay">
    <div class="welcome-content">
      <h1>✨¡Bienvenido/a!✨</h1>
      <p>Estás invitado a los 15 de Esmeralda 💖</p>
      <button id="enter-btn">Entrar a la invitación</button>
    </div>
  </div>


  <!-- Reproductor de música -->
  <audio id="bg-music" loop>
    <source src="assets/musica/The Weeknd - Save Your Tears (Official Music Video).mp3" type="audio/mpeg">
    Tu navegador no soporta el elemento de audio.
  </audio>

  <!-- Botón flotante -->

  <button id="music-toggle" aria-label="Activar o desactivar música de fondo"
    class="icon-animado-reproductor">🔊🎵</button>

  <!-- Script final -->

  <script src="https://cdn.jsdelivr.net/npm/tsparticles@2.12.0/tsparticles.bundle.min.js"></script>
  <script src="assets/js/glitter-particles.js"></script>


  <script src="assets/js/script.js"></script>

</body>

</html>





/* --------- Variables --------- */
:root {
    --font-title: 'Tinos', sans-serif;
    --font-script: 'Slabo', cursive;
    --font-btn: 'Merriweather', sans-serif;
    --color-dark: #0101b2;
    --color-light: #fff;
    --color-plate: #b7b7b7;
    /* fondo claro */
    --color-primary: #dcc602;
    --color-white: #fff;
    /* Textos */
    --color-violet: #6d00d1;
}

/* --------- Reset --------- */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0
}



body {
    font-family: var(--font-title);
    color: var(--color-white);
    background:
        linear-gradient(to right, rgba(0, 0, 32, 0.6) 0%, transparent 25%, transparent 75%, rgba(0, 0, 32, 0.6) 100%),
        url(images/weichao-deng-ckU7CseK6ag-unsplash.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    image-rendering: optimizeQuality;
    position: relative;
    scroll-behavior: smooth;
    line-height: 1.6;

}




/* --------- Botón --------- */
.btn {
    display: inline-block;
    padding: 1.2rem 2.2rem;
    border-radius: 25px;
    text-decoration: none;
    font-family: var(--font-btn);
    font-weight: 600;
    transition: .3s
}

.btn.primary {
    background: var(--color-plate);
    color: #02124d;
    margin-top: 2rem;
    font-size: 1.2rem;
    padding: 0.8rem 0rem;
    width: 14rem;
    box-shadow: 1px 1px 15px 1px rgba(0, 0, 255, 0.789);
}

.btn.outline {
    border: 2px solid var(--color-dark);
    margin-top: 2rem;
    color: #000;
    background-color: var(--color-plate);
    padding: 0.8rem 1rem;
    font-size: 1rem;
    width: 250px;
    box-shadow: 1px 1px 15px 1px rgba(9, 255, 0, 0.789);



}

.btn:hover {
    opacity: .55;
    color: var(--color-violet);
}

#btnGift {
    padding: 0.8rem 2.4rem;
    font-size: 1.3rem;
    box-shadow: 1px 1px 15px 0px rgba(255, 0, 132, 0.789);

}

#magicBtn,
#magic-music-toggle {
    padding: 0.5rem 0.3rem;
    font-size: 0.8rem;
    text-transform: capitalize;
    background-color: var(--color-plate);
    opacity: 1;
    border-radius: 50px;
    width: 150px;
    box-shadow: 1px 1px 5px 1px rgba(43, 0, 255, 0.789);

}
#music-toggle{
    opacity: 0.8;
}

#magic-music-toggle {
    background-color: var(--color-dark);
    color: var(--color-light);
    box-shadow: 1px 1px 5px 1px rgba(255, 221, 0, 0.789);

}

.button-wrapper {
    margin-bottom: 10px;
}

p {
    font-size: 1.7rem;
    margin-top: 1rem;
    margin-inline: auto;
    font-weight: 700;

}

#fiesta,
#playlist,
#countdown,
#rsvp {
    padding: 20px 20px 60px;
}

.fiesta-fecha {
    font-family: var(--font-btn);
}

/* --------- Secciones --------- */
.section {
    padding: 70px 20px;
    text-align: center
}

.section-title {
    font-size: 1.7rem;
    margin-bottom: 1.6rem;
    margin-top: 1.5rem;


}

.section-title-fiesta {
    font-size: 3rem;
    margin-bottom: 1.6rem;
    color: var(--color-dark);
}

.section-title-gracias {
    font-size: 2.5rem;
    padding: 0;
    line-height: 3rem;
    margin-bottom: 1rem;
}

.section-click {
    color: var(--color-dark);
    width: 300px;
    text-align: center;
    margin-inline: auto;
    font-weight: 700;

}

.bg-dark {
    background: rgba(1, 1, 178, 0.4);
}

.bg-light {
    background: rgba(255, 255, 255);
    color: #222;
}

.pill {
    display: inline-block;
    background: #0c35c9;
    color: #fff;
    border-radius: 8px 25px 25px;
    padding: .4rem 1rem;
    margin-top: .5rem
}

/* Mensaje de bienvenida */

#welcome-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, #19ffd1, #0000006d);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.welcome-content {
    text-align: center;
    padding: 2rem;
    background: rgba(0, 56, 141, 0.1);
    backdrop-filter: blur(8px);
    border-radius: 1rem;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}

#welcome-overlay h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

#welcome-overlay button {
    background: #029eff;
    color: #000408;
    border: 1 px solid ;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 2rem;
    cursor: pointer;
    transition: background 0.3s ease;
    margin-top: 1rem;
}

#welcome-overlay button:hover {
    background: #dddddd;
}

/* Botón de música */
#music-toggle {
    position: fixed;
    top: 40px;
    right: 40px;
    background-color: var(--color-dark);
    color: rgb(75, 96, 255);
    border: 1px solid rgb(0, 0, 0);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 17px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    opacity: 0.8;
    transition: transform 0.3s ease;
}

#music-toggle:hover {
    background-color: var(--color-plate);

}



#music-toggle:active {
    transform: scale(1.2) rotate(15deg);
}

.playing {
    animation: pulse 1.2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.15);
    }

    100% {
        transform: scale(1);
    }
}


/* Animación para el overlay de bienvenida */
#welcome-overlay {
    transition: opacity 1s ease;
}

.fade-out {
    opacity: 0;
    pointer-events: none;
}




/* --------- HERO --------- */
.hero {
    position: relative;
    height: 100vh;
    overflow: hidden
}

.hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% center;


}

.hero-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .45)
}

.hero-overlay img {
    width: 300px;
    margin-top: 10rem;
    opacity: 1;

}



/* Flecha */
.scroll-down {
    position: absolute;
    bottom: 40px;
    left: 50%;
    width: 32px;
    height: 32px;
    border-right: 4px solid #fff;
    border-bottom: 4px solid #fff;
    transform: translateX(-50%) rotate(45deg);
    animation: arrow 2s infinite
}

@keyframes arrow {
    0% {
        opacity: 0;
        transform: translate(-50%, -10px) rotate(45deg)
    }

    50% {
        opacity: 1;
        transform: translate(-50%, 0) rotate(45deg)
    }

    100% {
        opacity: 0;
        transform: translate(-50%, 10px) rotate(45deg)
    }
}

/* --------- Countdown --------- */
#clock {
    display: flex;
    justify-content: center;
    gap: .8rem;
    margin-top: 2rem
}

#clock div {
    background: rgba(255, 255, 255, .1);
    padding: 0.5rem;
    border-radius: 10px;
    width: 70px
}

#clock div span {
    display: block;
    font-size: .8rem;
    color: var(--color-plate)
}


#clock div strong {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-plate)
}

/* --------- Iconos --------- */


@keyframes zoomInOut {
    0% {
        opacity: 0;
        transform: scale(.1);
    }

    50% {
        opacity: 1;
        transform: scale(1.05);
    }

    70% {
        transform: scale(.9);
    }

    100% {
        transform: scale(1);
    }



}

.icon-animado {
    animation: zoomInOut 2s ease-in-out infinite;
    width: 90px;
}
.dresscode{
    width: 100px;
   
}

.icon-animado-m {
    animation: zoomInOut 2s ease-in-out infinite;
    width: 100px;
    margin-top: 1rem;
}

.icon-animado-music {
    animation: zoomInOut 2s ease-in-out infinite;
    width: 180px;
    margin-top: 1rem;
}

.icon-animado-reproductor {
    animation: zoomInOut 2s ease-in-out infinite;
}

.bg-glitter {
    position: relative;
    z-index: 0;
    color: #222;
    overflow: hidden;
    /* para que no se desborde el pseudo-elemento */
}

.bg-glitter::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('images/katie-harp-TnQE5X48FMA-unsplash.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: -1;
}

/* --------- Scroll reveal --------- */
.section.hidden {
    opacity: 0;
    transform: translateY(60px);
    transition: .9s
}

.section.appear {
    opacity: 1;
    transform: translateY(0)
}

/* --------- Modal --------- */
.modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .75);
    justify-content: center;
    align-items: center;
    z-index: 100
}

.modal-dialog {
    background: #fff;
    color: #000;
    padding: 2rem 1rem;
    border-radius: 10px;
    max-width: 400px;
    width: 90%;
    position: relative;
    border: 2px solid var(--color-violet);
    font-size: 1.3rem;

}

.modal-dialog h4 {
    margin-bottom: 1rem;
    color: var(--color-violet);
    text-align: center;
    font-family: var(--font-btn);


}

.modal-dialog p {
    text-align: center;
    font-size: 1.3rem;

}

.modal-dialog .close {
    position: absolute;
    top: 8px;
    right: 16px;
    font-size: 1.6rem;
    cursor: pointer
}

.modal-dialog ul {
    margin-left: 1.7rem;
    font-family: var(--font-btn);
}

.modal-dialog hr {
    margin: 1rem 0;

}

/* --------- Gracias --------- */


#gracias {
    background: rgba(1, 1, 178, 0.4);
    padding: 30px 20px;
    position: relative;
    min-height: 100%;
    overflow: hidden;
}


#glitter-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 100;
}






@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}




/* --------- Responsive pequeños --------- */

@media(max-width:480px) {
    .section-title {
        font-size: 1.7rem
    }

    #clock div strong {
        font-size: 1.6rem
    }
}

@media(min-width:768px) {
    .hero-overlay img {
        width: 320px;
        margin-top: 15rem
    }
     #music-toggle {
        width: 70px;
        height: 70px;
    }

}

@media(min-width:1024px) {
    .hero-overlay img {
        width: 400px;
        margin-top: 15rem;
        opacity: 0.8;
    }

    .section-title {
        font-size: 2rem
    }
    #music-toggle {
        width: 100px;
        height: 100px;
        font-size: 2rem;
        opacity: 0.5;
    }
}



@media(min-width:1440px) {
    .hero-overlay img {
        width: 600px;
        margin-top: 5rem;
        opacity: 0.8;
    }

    .section-title,
    .section-title-fiesta {
        font-size: 5rem
    }

    #clock div {
        width: 400px;
    }

    #clock div span {
        font-size: 4rem;


    }

    #clock div strong {
        font-size: 5rem;
    }

    .icon-animado-m {
        width: 300px;
    }

    .section-title-fiesta {
        font-size: 8rem;
    }

    p.fiesta-fecha {
        font-size: 4rem;
    }

    .section-click {
        font-size: 4rem;
        width: 800px;
    }

    .btn.primary {
        font-size: 3rem;
        width: 24rem;
    }
    p{
        font-size: 4rem;
    }
    .btn.outline{
        font-size: 3.5rem;
        width: 350px;
    }
    .icon-animado{
        width: 200px;
    }
    .icon-animado-music{
        width: 230px;
    }
    #btnGift{
        font-size: 4rem;
        width: 450px;
        padding: 1rem 3rem;
    }
    h3.section-title-gracias{
        font-size: 5rem;
        margin-bottom: 5rem;
        margin-top: 5rem;
        line-height: 6rem;
    }

    
#magicBtn,
#magic-music-toggle{
        font-size: 2rem;
        padding: 2rem 0rem;
        width: 400px;
    }
    #music-toggle {
        width: 120px;
        height: 120px;
        font-size: 2rem;
        opacity: 0.5;
    }

    }
    






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







