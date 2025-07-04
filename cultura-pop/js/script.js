document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contato");
  const statusDiv = document.getElementById("mensagem-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // impede envio do formulário

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Limpa mensagens anteriores
    statusDiv.innerHTML = "";
    statusDiv.className = "";

    if (nome === "" || email === "" || mensagem === "") {
      statusDiv.textContent = "Por favor, preencha todos os campos.";
      statusDiv.className = "erro";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      statusDiv.textContent = "Digite um e-mail válido.";
      statusDiv.className = "erro";
      return;
    }

    statusDiv.textContent = "Mensagem enviada com sucesso!";
    statusDiv.className = "sucesso";
    form.reset();
  });
});
const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('reduzida');
  } else {
    navbar.classList.remove('reduzida');
  }
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});