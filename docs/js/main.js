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
    duração: "⏱ 30 minutos",
    preço: "💰 R$ XX",
    msg: "Quero agendar um corte masculino"
  },
  barba: {
    titulo: "Barba",
    desc: "Barba alinhada, desenhada e finalizada na navalha.",
    duração: "⏱ 20 minutos",
    preço: "💰 R$ XX",
    msg: "Quero agendar uma barba"
  },
  sobrancelha: {
    titulo: "Sobrancelha",
    desc: "Acabamento masculino pra valorizar o visual.",
    duração: "⏱ 15 minutos",
    preço: "💰 R$ XX",
    msg: "Quero agendar uma sobrancelha"
  },
  combo: {
    titulo: "Combo Premium",
    desc: "Corte + barba + sobrancelha com preço especial.",
    duração: "⏱ 1 hora",
    preço: "💰 R$ XX",
    msg: "Quero agendar o combo premium"
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
