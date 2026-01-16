const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

const servicos = {
  corte: {
    titulo: "Corte Masculino",
    desc: "Corte personalizado, na régua, respeitando seu estilo.",
    duracao: "⏱ 30 minutos",
    preco: "💰 R$ 15,00",
    msg: "Quero agendar um corte masculino",
    img: "images/mendes (corte).jpeg"
  },
  barba: {
    titulo: "Barba",
    desc: "Barba alinhada, desenhada e finalizada na navalha.",
    duracao: "⏱ 20 minutos",
    preco: "💰 R$ 5,00",
    msg: "Quero agendar uma barba",
    img: "images/manin.jpeg"
  },
  combo: {
    titulo: "Pigmentação / Tintura",
    desc: "Pigmentação alinhada, natural e feita no detalhe.",
    duracao: "⏱ 40 minutos",
    preco: "💰 R$ 25,00",
    msg: "Quero agendar uma pigmentação / tintura",
    img: "images/trajano.jpeg"
  }
};

const modal = document.getElementById("modal-servico");
const titulo = document.getElementById("modal-titulo");
const desc = document.getElementById("modal-desc");
const duracao = document.getElementById("modal-duracao");
const preco = document.getElementById("modal-preco");
const whats = document.getElementById("modal-whats");
const close = document.querySelector(".close");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const data = servicos[card.dataset.servico];

    titulo.textContent = data.titulo;
    desc.textContent = data.desc;
    duracao.textContent = data.duracao;
    preco.textContent = data.preco;

    whats.href = `https://wa.me/553191115850?text=${encodeURIComponent(data.msg)}`;

    modal.style.display = "flex";
  });
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

const slides = document.querySelectorAll(".hero-slider img");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3500);
