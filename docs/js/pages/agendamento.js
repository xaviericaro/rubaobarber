const form = document.getElementById("agendamento-form");
const msg = document.getElementById("msg");

const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const servico = document.getElementById("serviço").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  const conflito = agendamentos.find(
    a => a.data === data && a.hora === hora
  );

  if (conflito) {
    msg.textContent = "Esse horário já tá ocupado, escolhe outro 😬";
    msg.style.color = "red";
    return;
  }

  agendamentos.push({ servico, data, hora });
  localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

  msg.textContent = "Agendado com sucesso 🔥";
  msg.style.color = "green";
  form.reset();
});
