/* FADE IN GERAL */
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));


/* ANIMAÇÃO CARDS SERVIÇO */
const serviceCards = document.querySelectorAll('.service-card');

const serviceObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

serviceCards.forEach(card => serviceObserver.observe(card));


/* SERVIÇOS */
const servicos = {
  corte: {
    titulo: "Corte Masculino",
    desc: "Corte personalizado, na régua, respeitando seu estilo.",
    duracao: "⏱ 30 minutos",
    preco: "R$ 15,00",
    msg: "Quero agendar um corte masculino",
    img: "images/mendes (corte).jpeg"
  },
  barba: {
    titulo: "Barba",
    desc: "Barba alinhada, desenhada e finalizada na navalha.",
    duracao: "⏱ 20 minutos",
    preco: "R$ 5,00",
    msg: "Quero agendar uma barba",
    img: "images/barba.png"
  },
  combo: {
    titulo: "Pigmentação / Tintura",
    desc: "Pigmentação alinhada, natural e feita no detalhe.",
    duracao: "⏱ 40 minutos",
    preco: "R$ 25,00",
    msg: "Quero agendar uma pigmentação / tintura",
    img: "images/trajano.jpeg"
  }
};


/* MODAL */
const modal = document.getElementById("modal-servico");
const titulo = document.getElementById("modal-titulo");
const desc = document.getElementById("modal-desc");
const duracao = document.getElementById("modal-duracao");
const preco = document.getElementById("modal-preco");
const modalImg = document.getElementById("modal-img");
const whats = document.getElementById("modal-whats");
const close = document.querySelector(".close");



document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    const data = servicos[card.dataset.servico];

    titulo.textContent = data.titulo;
    desc.textContent = data.desc;
    duracao.textContent = data.duracao;

    // MICRO ANIMAÇÃO NO PREÇO
    preco.innerHTML = '';
    void preco.offsetWidth; 
    preco.innerHTML = `💰 <span class="service-price">${data.preco}</span>`;


    modalImg.src = data.img;
    modalImg.alt = data.titulo;

    whats.href = `https://wa.me/553191115850?text=${encodeURIComponent(data.msg)}`;

    modal.style.display = "flex";

    modal.classList.remove("active");
    void modal.offsetWidth;
    modal.classList.add("active");
  });
});

close.addEventListener("click", () => {
  modal.style.display = "none";
  modal.classList.remove("active");
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    modal.classList.remove("active");
  }
});


/* SLIDER HERO */
const slides = document.querySelectorAll(".hero-slider img");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3500);

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
